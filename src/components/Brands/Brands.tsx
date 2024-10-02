import React from 'react';

const images = [
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/3.png',
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/4.png',
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/6.png',
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.png',
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/5.png',
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/1.png',
  'https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.png',
];

const Brands: React.FC = () => {
  return (
    <div className="flex items-center justify-center  bg-[#222] ">
      <div className="relative overflow-hidden  h-32 bg-[#222] w-[1300px] m-auto shadow-lg">
        <div className="flex animate-scroll w-[calc(250px*14)]">
          {images.concat(images).map((src, index) => (
            <div className="w-full h-full" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r  to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l  to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Brands
