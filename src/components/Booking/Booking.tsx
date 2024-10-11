

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

            <button className="bg-secondary text-black  py-3 px-6 rounded-full transition duration-300 hover:bg-yellow-600 font-light text-sm">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalForm;
