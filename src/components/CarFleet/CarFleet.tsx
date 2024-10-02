
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Car {
  name: string;
  passengers: number;

  transmission: string;
  bags: number;
  price: number;
  image: string;
}

const cars: Car[] = [
  {
    name: 'Bentley Bentayga',
    passengers: 5,

    transmission: 'Auto',
    bags: 2,
    price: 600,
    image: 'https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/8-1.jpg',
  },
  {
    name: 'Bugatti Chiron',
    passengers: 2,

    transmission: 'Auto',
    bags: 1,
    price: 1500,
    image: 'https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/14.jpg',
  },
  {
    name: 'Bugatti Chiron',
    passengers: 2,

    transmission: 'Auto',
    bags: 1,
    price: 1500,
    image: 'https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/14.jpg',
  },
  // Add more cars as needed
];



function CarFleet() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
  return (
    <section className=" bg-[#222] pb-[100px] pt-[100px]">
    <div className='bg-[#222] flex items-center justify-center'>
      <div className='h-[50px] w-[1px] bg-yellow-500 mb-[100px]'>

      </div>
    </div>
     <div className='max-w-[1300px] w-full mx-auto px-4'>
  <Slider {...settings}>
    {cars.map((currentCar, i) => (
       

      
      <div key={i} className="relative p-6 rounded-lg shadow-lg w-full max-w-[800px] mx-auto">
        {/* Car Image */}
        <img
          src={currentCar.image}
          alt={currentCar.name}
          className="w-full h-[400px] object-cover rounded-lg z-10 relative"
        />

        {/* Car Information (Overlay) */}
        <div className="absolute bottom-0 left-0 z-30 right-0 mx-auto bg-gradient-to-t from-gray-900 to-transparent bg-[#222] p-6 w-[90%] md:w-[600px] rounded-3xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{currentCar.name}</h3>

              <div className="flex items-center space-x-4 text-sm font-light text-white mt-2">
                <span className="flex items-center text-[#999]  text-sm font-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-yellow-500">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                  {currentCar.passengers} 
                </span>

              

                <span className="flex items-center text-[#999] text-sm font-light">
                  <svg className="h-5 w-5 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                    <path d="M5 3C6.10457 3 7 3.89543 7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3ZM5 9C7.20914 9 9 10.7909 9 13H7C7 11.8954 6.10457 11 5 11C3.89543 11 3 11.8954 3 13H1C1 10.7909 2.79086 9 5 9Z" />
                  </svg>
                  {currentCar.transmission}
                </span>

                <span className="flex gap-1 items-center text-[#999]  text-sm font-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-yellow-500">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                  {currentCar.bags} Bags
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4 font-light">
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400">
                Details
              </button>
              <div className="text-yellow-500 font-semibold text-xl">
                ${currentCar.price} <span className="text-sm">/day</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
    ))}
  </Slider>
  </div>
</section>
    
  )
}

export default CarFleet