import React from "react";
import { FaDoorOpen, FaUserFriends, FaCogs, FaSuitcase } from "react-icons/fa";
import { IVehicle } from "../../Redux/vechicleSlice";
import { Link } from "react-router-dom";



const CarCard: React.FC<IVehicle> = ({
  _id,
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
    <div className=" bg-[#222]  text-white rounded-lg overflow-hidden shadow-lg">
      {/* Car Image */}
      <img 
        className="w-full cursor-pointer h-48 object-cover hover:scale-110 duration-300 ease-in-out "
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
          <Link to={`/cardetails/${_id}`}>
          <button className="mt-4 w-full bg-orange-500 hover:-translate-y-2 duration-300 ease-in-out text-white py-2 rounded-full hover:bg-orange-600 transition">
        {
          available == true? "Book":"Not available"
        }
          </button>
          </Link>
        </div>
      </div>

      

    </div>
  );
};

export default CarCard;
