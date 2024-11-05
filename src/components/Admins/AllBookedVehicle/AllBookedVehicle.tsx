import React, { useEffect, useState } from 'react';
import instance from '../../../Axios/Instance';
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Image } from '@chakra-ui/react';

// Vehicle Details Interface
interface VehicleDetails {
  Transmission: string;
  allWheelDrive: string;
  Passengers: number;
}

// Vehicle Interface
interface Vehicle {
  details: VehicleDetails;
  _id: string;
  carModel: string;
  year: number;
  pricePerDay: number;
  available: string;
  carImage: string;
  brand: string;
  type: string;
  description: string;
  location: string;
  __v: number;
}

// BookedVehicle Interface
interface BookedVehicle {
  currentStatus: string;
  _id: string;
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
  status: string;
  __v: number;
}

// Response Type
interface BookingResponse {
  success: boolean;
  BookedVehile: BookedVehicle[];
}

function AllBookedVehicle() {
  const [bookedVeh, setBookedVeh] = useState<BookingResponse | null>(null);

  const fetchAllBookingItems = async () => {
    try {
      const response = await instance.get<BookingResponse>('booking/allBookedvehicle');
      setBookedVeh(response.data);
    } catch (error) {
      console.error('Error fetching booking items:', error);
    }
  };

  useEffect(() => {
    fetchAllBookingItems();
  }, []);

  // Function to determine if the booking is currently running or complete
  const checkBookingStatus = (startDate: string, endDate: string) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (currentDate >= start && currentDate <= end) {
      return 'Running';
    } else {
      return 'Complete';
    }
  };

  return (
    <div>
      <h1>All Booked Vehicles</h1>
      {bookedVeh ? (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>List of all booked vehicles and their statuses</TableCaption>
            <Thead>
              <Tr>
                <Th>Car Model</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Status</Th>
                <Th>Image</Th>
                

              </Tr>
            </Thead>
            <Tbody>
              {bookedVeh.BookedVehile.map((booking) => (
                <Tr key={booking._id}>
                  <Td>{booking.vehicle.carModel}</Td>
                  <Td>{new Date(booking.startDate).toLocaleDateString()}</Td>
                  <Td>{new Date(booking.endDate).toLocaleDateString()}</Td>
                  <Td color='red'>{checkBookingStatus(booking.startDate, booking.endDate)}</Td>
                  <Td>
                    <Image
                      src={booking.vehicle.carImage}
                      alt={booking.vehicle.carModel}
                      boxSize="50px"
                      objectFit="cover"
                      borderTopRadius="md"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AllBookedVehicle;
