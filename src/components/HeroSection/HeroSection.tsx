import React, { useState, useEffect } from 'react';

const images = [
  {
    carType:"Premium",
    title: ' Rental Car',
    subtitle: 'Rolls Royce Cullinan',
    price: '$900 / Day',
    imageUrl: 'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/12.jpg',
  },
  {
    carType:"Premium",
    title: 'Luxury SUV',
    subtitle: 'Audi Rs7 SportBack',
    price: '$700 / Day',
    imageUrl: 'https://cdn.motor1.com/images/mgl/Kqv8l/s1/2020-audi-rs7-sportback.jpg',
  },
  {
    carType:"Premium",
    title: 'Executive Class',
    subtitle: 'Mercedes Benz S-Class',
    price: '$800 / Day',
    imageUrl: 'https://s.aolcdn.com/commerce/autodata/images/USD10MBC101A01300.jpg',
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000; // 5 seconds per slide

  // Automatic slide transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, slideDuration);

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative h-screen">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'} bg-cover bg-center h-screen`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 h-full w-[1300px] m-auto flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
            <h1 className="text-6xl lg:text-8xl w-full font-bold text-white mb-4">
              {/* {slide.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))} */}
              {slide.title}
            </h1>
            <div className='flex gap-6' >
            <p className="text-3xl lg:text-lg  text-white mb-8">{slide.subtitle}</p>
            <div className="text-2xl text-yellow-400 font-semibold mb-8">{slide.price}</div>
            </div>
            

            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-12 pb-5 pt-5 rounded-full text-sm font-medium hover:bg-yellow-500 transition duration-300">
                View Details
              </button>
              <button className="bg-transparent border border-white text-white px-12 pb-5 pt-5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition duration-300">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full ${currentSlide === idx ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
