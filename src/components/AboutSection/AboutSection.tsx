import React from 'react'

function AboutSection() {
  return (
    <section className="bg-[#222] dark:bg-black text-white py-16 px-8"
    
    
    
    >
    <div className="container mx-auto max-w-screen-lg m-auto flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <span className="text-secondary uppercase tracking-widest text-sm font-bold">Rentax</span>
        <h2 className="text-4xl lg:text-4xl font-bold text-white  mt-4 mb-6">
          We Are More Than <br /> A Car Rental Company
        </h2>
        <p className="text-gray-400  text-sm font-light mb-6 leading-8 w-full lg:w-4/5">
          Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu
          euismod nisl massa nutodio in the miss volume place urna lacinia eros nuntala urna mauris 
          vehicula rutrum in the miss on volume interdum.
        </p>
  
        {/* Bullet Points */}
        <ul className="mb-6 space-y-4">
          <li className="flex items-center space-x-2">
            <span className="bg-[#222] rounded-full h-6 w-6 flex justify-center items-center text-secondary font-bold">✓</span>
            <span className='text-sm text-gray-400'>Sports and Luxury Cars</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-[#222] rounded-full h-6 w-6 flex justify-center items-center text-secondary font-bold">✓</span>
            <span className='text-sm text-gray-400'>Economy Cars</span>
          </li>
        </ul>
  
        {/* Read More Button */}
        <button className="bg-secondary text-white py-3 px-6 rounded-full text-sm font-light hover:bg-secondary transition duration-300">
          Read More &rarr;
        </button>
      </div>
  
      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative rounded-lg overflow-hidden w-full lg:w-4/5 ">
          <img
            src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/about.jpg"
            alt="Car Rental"
            className="w-full h-auto object-cover "
          />
          {/* Play button (if needed) */}
          <button className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197 3.6A1 1 0 018 13.6V10.4a1 1 0 011.555-.832l5.197 3.6a1 1 0 010 1.664z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default AboutSection