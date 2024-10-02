

import React, { useState } from "react";

// Array of image URLs and labels (replace with your actual image paths)
const images = [
    
  { src: "https://images.hdqwalls.com/wallpapers/bmw-m-performance-nu.jpg", label: "Sedan" },
  { src: "https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/06.jpg", label: "Luxury" },
  { src: "https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/04.jpg" ,label: "sportcar"},
  { src: "https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/01.jpg", label: "Small Car" },
  { src: "https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/05.jpg", label: "Coupe" },
  { src: "https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/03.jpg", label: "SUV" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of images to show at a time
  const imagesPerSlide = 3;

  // Total number of images
  const totalImages = images.length;

  // Handler to show the next set of images
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + imagesPerSlide) % totalImages
    );
  };

  // Handler to show the previous set of images
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - imagesPerSlide + totalImages) % totalImages
    );
  };

  return (
    <section className="pt-24 pb-24 bg-[#222]">
    <div className="w-full max-w-4xl mx-auto"> 
          <h6 className="text-center text-xs text-yellow-500 mb-5 font-light tracking-[6px]">CATEGORIES</h6>
        <h1 className="text-center text-4xl text-white mb-5 font-bold">Rental Car Types</h1>
     
      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / imagesPerSlide}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-1/3 relative px-2"
              style={{ flex: "0 0 33.33%" }} 
            >
              {/* Image */}
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-60 object-cover rounded-3xl transition duration-150 ease-in-out"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-opacity-50 flex  justify-start ml-10 mt-4">
                <span className="text-white text-xl font-bold">{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          className="bg-yellow-500 text-white px-2 py-2 rounded-full hover:bg-white transition"
          onClick={prevSlide}
        >
          
        </button>
        <button
          className="bg-yellow-500 text-white px-2 py-2 rounded-full hover:bg-white transition"
          onClick={nextSlide}
        >
         
        </button>
      </div>
    </div>
    </section>
  );
};

export default Carousel;
