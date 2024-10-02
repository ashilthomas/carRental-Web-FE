// import React from 'react'

// function Booking() {
//     return (
//         <section
//         className="bg-fixed bg-cover bg-center h-[90vh] flex justify-center items-center"
//         style={{
//             backgroundImage:
//                 "url('https://www.hdcarwallpapers.com/download/bmw_m5_cs_2021_5k_7-3840x2160.jpg')"
           
//         }}
//     >
//         <div className="container mx-auto max-w-screen-lg m-auto">
//             {/* Heading Section */}
//             <h6 className="text-center text-xs text-yellow-500 mb-5 font-light tracking-[6px]">
//                 RENT NOW
//             </h6>
//             <h2 className="text-center text-4xl text-white mb-5 font-bold">
//                 Book Auto Rental
//             </h2>
    
//             {/* Form Section */}
//             <div>
//                 <form
//                     className="flex flex-col md:flex-row gap-6 justify-around p-6 bg-[#222]  md:rounded-full"
//                 >
//                     {/* Car Type Selection */}
//                     <div className="relative flex flex-col md:flex-row items-center text-gray-200 text-sm">
//                         <label htmlFor="car-type" className="mb-2 md:mb-0">
//                             Choose car type:
//                         </label>
//                         <select
//                             id="car-type"
//                             className="ml-3 bg-transparent text-yellow-500 border-none outline-none cursor-pointer"
//                         >
//                             <option value="sedan">Sedan</option>
//                             <option value="luxury">Luxury</option>
//                             <option value="convertible">Convertible</option>
//                             <option value="smallcar">Small Car</option>
//                             <option value="coupe">Coupe</option>
//                             <option value="suv">SUV</option>
//                         </select>
//                     </div>
    
//                     {/* Pickup Date */}
//                     <div className="relative flex flex-col md:flex-row items-center text-gray-200 text-sm">
//                         {/* <label htmlFor="pickup-date" className="mb-2 md:mb-0">
//                             Pickup date:
//                         </label> */}
//                         <input
//                             type="number"
//                             id="pickup-date"
//                             placeholder='pickup date'
//                             className="ml-3 bg-transparent text-yellow-500 border-none outline-none cursor-pointer"
//                         />
//                     </div>
    
//                     {/* Return Date */}
//                     <div className="relative flex flex-col md:flex-row items-center text-gray-200 text-sm">
//                         {/* <label htmlFor="return-date" className="mb-2 md:mb-0">
//                             Return date:
//                         </label> */}
//                         <input
//                             type="date"
//                             id="return-date"
//                             placeholder=' Return date:'
//                             className="ml-3 bg-transparent text-yellow-500 border-none outline-none cursor-pointer"
//                         />
//                     </div>
    
//                     {/* Location */}
//                     <div className="relative flex flex-col md:flex-row items-center text-gray-200 text-sm">
//                         <label htmlFor="location" className="mb-2 md:mb-0">
//                             Location:
//                         </label>
//                         <input
//                             type="text"
//                             id="location"
//                             placeholder="City or Airport"
//                             className="ml-3 bg-transparent text-yellow-500 border-none outline-none cursor-pointer"
//                         />
//                     </div>
    
//                     {/* Rent Now Button */}
//                     <div className="relative flex items-center justify-center text-white">
//                         <button
//                             type="submit"
//                             className="py-3 px-8 rounded-full bg-yellow-400 text-black text-sm font-light"
//                         >
//                             Rent Now
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </section>
    
//     )
// }

// export default Booking


import React, { useState } from 'react';

const CarRentalForm: React.FC = () => {
  const [pickUpDate, setPickUpDate] = useState<string | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<string | undefined>(undefined);

  return (
    <section className="relative bg-fixed w-full  bg-cover bg-center bg-black bg-opacity-50" style={{ backgroundImage: 'url("https://www.hdcarwallpapers.com/download/bmw_m5_cs_2021_5k_7-3840x2160.jpg")' }}>
      <div className="flex justify-center items-center h-full ">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-6">Book Auto Rental</h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-[#222] p-6 rounded-lg md:rounded-full">
            <select className="bg-[#222]   p-3 rounded-lg w-full md:w-auto text-gray-200 text-sm">
              <option value="">Choose Car Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="coupe">Coupe</option>
              <option value="luxury">Luxury</option>
            </select>

            <select className="bg-[#222] text-gray-200 text-sm p-3 rounded-lg w-full md:w-auto">
              <option value="">Pick Up Location</option>
              <option value="airport">Airport</option>
              <option value="city-center">City Center</option>
              <option value="suburbs">Suburbs</option>
            </select>

            <input
              type="date"
              className="bg-[#222] text-gray-200 text-sm p-3 rounded-lg w-full md:w-auto"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
            />

            <select className="bg-[#222] text-gray-200 text-sm p-3 rounded-lg w-full md:w-auto">
              <option value="">Drop Off Location</option>
              <option value="airport">Airport</option>
              <option value="city-center">City Center</option>
              <option value="suburbs">Suburbs</option>
            </select>

            <input
              type="date"
              className="bg-[#222] text-gray-200 text-sm p-3 rounded-lg w-full md:w-auto"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />

            <button className="bg-yellow-500 text-black  py-3 px-6 rounded-full transition duration-300 hover:bg-yellow-600 font-light text-sm">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalForm;
