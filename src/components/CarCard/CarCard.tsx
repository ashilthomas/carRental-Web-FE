import React from "react";
import { FaDoorOpen, FaUserFriends, FaCogs, FaSuitcase } from "react-icons/fa";
import { IVehicle } from "../../Redux/vechicleSlice";



const CarCard: React.FC<IVehicle> = ({
  carModel,
  year,
  pricePerDay,
  available,
  carImage,
  brand,
  type,
  description,
  details,
  location,

}) => {
  return (
    <div className="max-w-sm bg-[#222]  text-white rounded-lg overflow-hidden shadow-lg">
      {/* Car Image */}
      <img
        className="w-full h-48 object-cover"
        src={carImage}
        alt={carModel}
      />

      {/* Car Details */}
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold ">{carModel}</h2>

        <div className="flex items-center justify-between space-x-2 text-sm">
          <div className="flex items-center space-x-2">
          <FaDoorOpen className="text-orange-500" />
          <span className="text-small">Doors</span>      
          </div>
      
          <span className="ml-auto text-small">{pricePerDay}</span>
        </div>

        <div className="flex items-center justify-between space-x-2 text-sm">
          <div className="flex items-center space-x-2 text-small">

        
          <FaUserFriends className="text-orange-500" />
          <span className="text-small">Passengers</span>  
          
          </div>
          <span className="ml-auto text-small">{details.Passengers}</span>
        </div>

        <div className="flex items-center justify-between space-x-2 text-sm">
          <div className="flex items-center space-x-2 text-small">

      
          <FaCogs className="text-orange-500" />
          <span className=" text-small">Transmission</span>    
          </div>
          <span className="ml-auto  text-small">{details.Transmission}</span>
        </div>

        <div className="flex items-center justify-between space-x-2 text-sm">
          <div className="flex items-center space-x-2 text-small">

       
          <FaSuitcase className="text-orange-500" />
          <span className="text-small">Luggage</span>
          </div>
          <span className="ml-auto text-small">{details.allWheelDrive}</span>
        </div>

        {/* Price and Button */}
        <div className="mt-6">
          <div className="text-2xl font-bold text-orange-500">${pricePerDay}<span className="text-sm">/day</span></div>
          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
        {
          available == true? "Book":"Not available"
        }
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;