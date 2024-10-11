import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../Axios/Instance';
import { IVehicle } from '../../Redux/vechicleSlice';
import { GiCarDoor } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";


import { useDisclosure } from '@chakra-ui/react';
import Loader from '../Loader/Loader';
import BookingForm from '../BookingForm.tsx/BookingForm';



function CarDetails() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<IVehicle>();
  const [loading,setLoading]=useState(false)

  const {  onOpen } = useDisclosure()

  

  const fetchSingleVehicle = async () => {
    setLoading(true)
    try {
      // Use .get() instead of .post()
      const response = await instance.get(`vechicle/singlevehicle/${id}`);
   
      setLoading(false)

      if (response.data.success) {
        setVehicle(response.data.singleVehicle);
      } else {
        console.log('Vehicle not found:', response.data.message);
      }
    } catch (error) {
      console.error("Error fetching vehicle:", error);
    }
  };

  // Call fetchSingleVehicle when the id changes
  useEffect(() => {
    if (id) {
      fetchSingleVehicle();
    }
  }, [id]);  // Add id as a dependency
  if(loading){
    return <Loader/>
  }

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  
  return (
   
    <section className="bg-background text-white py-16 px-6 lg:px-24 flex flex-col lg:flex-row gap-6 items-center">
  
  
   
 
  
    

    <div className="w-full lg:w-2/3">
  
   
      <div className="flex justify-center lg:justify-start">
        <img src={vehicle.carImage} className="h-60 sm:h-80 lg:h-[400px] w-full rounded-lg mt-4 object-cover" alt="Car Image" />
      </div>
      <div className="mt-6 lg:mt-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">General Information</h2>
        <p className="mb-4 sm:mb-6 text-small ">
          Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation porttitor orci sit amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequation the porttiton.
        </p>
        <p className="mb-4 sm:mb-6 text-small">
          Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion consesua the risus consequattion the porttiton.
        </p>
        {/* Benefits List */}
        <ul className="space-y-4">
          <li className="flex items-center gap-2 text-sm lg:text-base">
           <span className='py-2 px-2 rounded-full text-secondary  bg-[#333]'>
<TiTick/>
           </span>
            24/7 Roadside Assistance
          </li>
          <li className="flex items-center gap-2 text-sm lg:text-base">
          <span className='py-2 px-2 rounded-full text-secondary  bg-[#333]'>
<TiTick/>
           </span>
            Free Cancellation & Return
          </li>
          <li className="flex items-center gap-2 text-sm lg:text-base">
          <span className='py-2 px-2 rounded-full text-secondary  bg-[#333]'>
<TiTick/>
           </span>
            Rent Now Pay When You Arrive
          </li>
        </ul>
      </div>
    </div>
  
    {/* Right Section - Car Info and Price */}
    <div className="w-full lg:w-1/4 bg-primary p-6 lg:p-8 rounded-lg relative">
      {/* Price */}
      <div className="absolute top-[-40px] right-0 bg-secondary text-black py-3 px-6 rounded-t-lg text-2xl lg:text-3xl font-bold">
        ${vehicle.pricePerDay} <span className="text-lg">/ day</span>
      </div>
  
      {/* Car Specifications */}
      <ul className="mt-16 space-y-6 ">
        <li className="flex justify-between items-center">
          <span className="flex items-center space-x-2 ">
            <span className='py-3 px-3 rounded-full text-secondary  bg-[#333]'>
          <GiCarDoor />     
            </span>
          <h4 className='text-small'>
              Doors
          </h4>
          
          </span>
          <span>4</span>
        
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center space-x-2 ">
          <span className='py-3 px-3 rounded-full text-secondary bg-[#333]'>
           <LuUsers2/>
           </span>
           <h4 className='text-small'>
              Passengers
           </h4>
          
          </span>
          <span>{vehicle.details.Passengers}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center space-x-2 ">
          <span className='py-3 px-3 rounded-full text-secondary bg-[#333]'>
          <GiGearStickPattern />
          </span>
          <h4 className='text-small'>
             Transmission 
          </h4>
          
          </span>
          <span>{vehicle.details.Transmission}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
          <span className='py-3 px-3 rounded-full text-secondary bg-[#333]'>
          <RiLuggageDepositLine />
          </span>
          <h4 className='text-small'>
            Luggage 
          </h4>
           
          </span>
          <span>2</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
          <span className='py-3 px-3 rounded-full text-secondary bg-[#333]'>
          <CiLocationOn  />
          </span>
          <h4 className='text-small'>
            Location
          </h4>
           
          </span>
          <span>{vehicle.location}</span>
        </li>
      
      </ul>
  
      {/* Buttons */}
      <BookingForm vehicle={vehicle} />
     
    </div>
  </section>
  
  )
}

export default CarDetails
