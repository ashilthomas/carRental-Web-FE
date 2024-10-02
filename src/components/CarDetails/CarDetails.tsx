import React from 'react';

const CarDetails: React.FC = () => {
  return (
    <section className="bg-[#181818] text-white py-16 px-6 lg:px-24 flex justify-between items-start">
      {/* Left Section - General Information */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-semibold mb-6">General Information</h2>
        <p className="mb-6">
          Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi conseua 
          the miss sustion consation porttitor orci sit amet iaculis nisan.
        </p>
        <p className="mb-6">
          Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen morbinetion 
          consesua the risus consequattion the porttiton.
        </p>
        
        {/* Benefits List */}
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-yellow-500 mr-3" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59l-3.29-3.3 1.42-1.42 1.87 1.87 4.59-4.59 1.42 1.42L11 16.59z" />
            </svg>
            24/7 Roadside Assistance
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-yellow-500 mr-3" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59l-3.29-3.3 1.42-1.42 1.87 1.87 4.59-4.59 1.42 1.42L11 16.59z" />
            </svg>
            Free Cancellation & Return
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-yellow-500 mr-3" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59l-3.29-3.3 1.42-1.42 1.87 1.87 4.59-4.59 1.42 1.42L11 16.59z" />
            </svg>
            Rent Now Pay When You Arrive
          </li>
        </ul>
      </div>

      {/* Right Section - Car Info and Price */}
      <div className="w-full lg:w-1/3 bg-[#1f1f1f] p-8 rounded-lg relative">
        {/* Price */}
        <div className="absolute top-[-40px] right-0 bg-yellow-500 text-black py-4 px-8 rounded-t-lg text-3xl font-bold">
          $500 <span className="text-lg">/ rent per day</span>
        </div>

        {/* Car Specifications */}
        <ul className="mt-12 space-y-6">
          <li className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" />
              </svg>
              Doors
            </span>
            <span>4</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" />
              </svg>
              Passengers
            </span>
            <span>5</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" />
              </svg>
              Transmission
            </span>
            <span>Auto</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" />
              </svg>
              Luggage
            </span>
            <span>2</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" />
              </svg>
              Air Condition
            </span>
            <span>Yes</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
                <path d="M10 2C11.6569 2 13 3.34315 13 5C13 6.65685 11.6569 8 10 8C8.34315 8 7 6.65685 7 5C7 3.34315 8.34315 2 10 2Z" />
              </svg>
              Age
            </span>
            <span>25</span>
          </li>
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-yellow-500 text-black py-3 px-6 rounded-lg flex-grow hover:bg-yellow-400">
            Rent Now
          </button>
          <button className="bg-[#25D366] text-white py-3 px-6 rounded-lg flex-grow hover:bg-green-400">
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
