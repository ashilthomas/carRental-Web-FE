// src/BookingForm.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

import instance from '../../Axios/Instance';
import { IVehicle } from '../../Redux/vechicleSlice';



const schema = yup.object().shape({
  vehicleId: yup.string().required('Car name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, 'Phone number is not valid')
      .required('Phone number is required'),
    carType: yup.string().required('Please select a car type'),
    pickUpLocation: yup.string().required('Pick-up location is required'),
    dropOffLocation: yup.string().required('Drop-off location is required'),
    pickUpDate: yup.date().required('Pick-up date is required'),
    dropOffDate: yup.date().required('Drop-off date is required'),
    additionalNote: yup.string().optional(),
  });

  
 type BookingFormData = {
  vehicle: IVehicle | undefined;


 }
  interface FormData {
    vehicleId:string,

    email: string;
    phone: string;
    carType: string;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpDate: string;
    dropOffDate: string;
    additionalNote?: string;
  
  }

const BookingForm: React.FC <BookingFormData>= ({vehicle}) => {
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
  
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: yupResolver(schema),
    });


 

      // Form submission handler
      const onSubmit = async (data: FormData) => {
        console.log(data);
      
        const formData = new FormData();
        console.log('Vehicle ID before appending:', data.vehicleId);
      
        // Remove spaces from the formData keys
        formData.append('vehicleId', data.vehicleId);  // Corrected ' vehicleId' -> 'vehicleId'
        // formData.append('userId', data.carType); // Corrected ' userId' -> 'userId'
        formData.append('startDate', data.pickUpDate);
        formData.append('endDate', data.dropOffDate);
      
        try {
          // Send the formData in the POST request
          const response = await instance.post('booking/vehiclebooking', formData, {
            headers: {
              'Content-Type': 'application/json' // Make sure to set the content type as JSON
            }
          });
          console.log(response);
        } catch (error) {
          console.error('Error during booking:', error);
        }
      };
  return (

    <>
   
    <div onClick={onOpen} className="mt-8 flex gap-2 relative">
        <div className=' absolute bg-primary inset-0 m-auto w-10 h-10 flex items-center justify-center   rounded-full'>
          &

        </div>
        <button  onClick={onOpen} className="bg-secondary text-white py-5 px-3 rounded-s-full flex-grow hover:bg-yellow-400">
        Renta Now
         
        </button>
        <button className="bg-secondary text-white py-3 px-3 rounded-e-full flex-grow hover:bg-green-400">
          WhatsApp
        </button>
      </div>
    
    <Modal  isOpen={isOpen} onClose={onClose}  >
    <ModalOverlay  />
    <ModalContent maxW="800px  "pb={2} pt={2} bgColor={"#222"} >
      <ModalHeader color='white'>Booking Form</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-4 flex gap-3">
    <div className="w-full">
      <input
        placeholder="Enter car name"
        value={vehicle?._id}
        defaultValue={vehicle?.carModel}
        {...register('vehicleId')}
        className={`w-full py-4 pl-2 text-white rounded-full bg-[#1b1b1b] border ${
          errors.vehicleId ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.vehicleId && <p className="text-red-500 mt-1">{errors.vehicleId.message}</p>}
    </div>

    <div className="w-full">
      <input
        type="email"
     
       
        {...register('email')}
        className={`w-full py-4 pl-2 text-white rounded-full bg-[#1b1b1b]  border ${
          errors.email ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
    </div>
  </div>

  <div className="mb-4 flex gap-3">
    <div className="w-full">
      <input
        type="tel"
        placeholder="Enter phone"
        {...register('phone')}
        className={`w-full py-4 pl-2 rounded-full bg-[#1b1b1b] border ${
          errors.phone ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
    </div>

    <div className="w-full">
      <select
        {...register('carType')}
        className={`w-full py-4 pl-2 rounded-full bg-[#1b1b1b] border ${
          errors.carType ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      >
        <option value="">Select a car type</option>
        <option value="Compact">Compact</option>
        <option value="SUV">SUV</option>
        <option value="Luxury">Luxury</option>
      </select>
      {errors.carType && <p className="text-red-500 mt-1">{errors.carType.message}</p>}
    </div>
  </div>

  <div className="mb-4 flex gap-3">
    <div className="w-full">
      <input
        type="text"
        placeholder="Enter pick-up location"
        defaultValue={vehicle?.location}
        {...register('pickUpLocation')}
        className={`w-full py-4 pl-2 text-white rounded-full bg-[#1b1b1b] border ${
          errors.pickUpLocation ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.pickUpLocation && <p className="text-red-500 mt-1">{errors.pickUpLocation.message}</p>}
    </div>

    <div className="w-full">
      <input
        type="text"
        placeholder="Enter drop-off location"
        {...register('dropOffLocation')}
        className={`w-full py-4 pl-2 text-white rounded-full bg-[#1b1b1b] border ${
          errors.dropOffLocation ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.dropOffLocation && <p className="text-red-500 mt-1">{errors.dropOffLocation.message}</p>}
    </div>
  </div>

  <div className="mb-4 flex gap-3">
    <div className="w-full">
      <input
        type="date"
        {...register('pickUpDate')}
        className={`w-full py-4 pl-2 text-white rounded-full bg-[#1b1b1b] border ${
          errors.pickUpDate ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.pickUpDate && <p className="text-red-500 mt-1">{errors.pickUpDate.message}</p>}
    </div>

    <div className="w-full">
      <input
        type="date"
        {...register('dropOffDate')}
        className={`w-full py-4 pl-2 text-white rounded-full bg-[#1b1b1b] border ${
          errors.dropOffDate ? 'border-red-600' : 'border-gray-600'
        } focus:outline-none focus:border-yellow-500`}
      />
      {errors.dropOffDate && <p className="text-red-500 mt-1">{errors.dropOffDate.message}</p>}
    </div>
  </div>

  <div className="mb-4">
    <textarea
      placeholder="Enter additional notes"
      {...register('additionalNote')}
      className="w-full rounded-3xl py-4 pl-2  text-white bg-[#1b1b1b] border border-gray-600 focus:outline-none focus:border-yellow-500"
      rows={4}
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-secondary text-white font-bold py-2 rounded-full hover:bg-yellow-400 transition duration-300"
  >
    Rent Now
  </button>
</form>

      </ModalBody>

    
    </ModalContent>
  </Modal>

</>
  
  );
};

export default BookingForm;

// {/* <div className='w-full h-full fixed inset-0 flex z-20 justify-center items-center'>
// //     {/* Background overlay with opacity */}
// //     <div className='absolute inset-0 bg-black opacity-[.4]'></div>
    
// //     {/* Booking Form Container */}
// //     <div className="relative bg-[#222] p-6 shadow-lg w-[800px] rounded-lg mx-auto">
// //         <div className='flex justify-between'>
// //                   <h2 className="text-2xl text-white font-bold mb-4">Booking Form</h2>
// //                   <button onClick={() => dispatch(closeBookingForm())} className='cursor-pointer'>
// //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
// //   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
// // </svg>

// //                   </button>
// //         </div>


// //     </div>
//    </div> */}
