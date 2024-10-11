import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { closeAdminSlide } from "../../../Redux/globelSlice";
import {  NavLink } from "react-router-dom";

interface SidebarItem {
  name: string;
  href: string;
  icon?:any
}

// Define the array with the type of SidebarItem[]
const sidebarVal: SidebarItem[] = [
  { name: 'AddVehicle', href: '/addVehicles',icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

 },
  { name: 'AllVehicle', href: '/adminAllVehicle',icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
 },
  { name: 'Home', href: '/',icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
 },
  { name: 'Setting', href: '/a',icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
 },
  { name: 'profile', href: '/adminAllVehicl',icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
 },
];

const AdminSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isClickAdSide,setIsClickAdSide]=useState<string>("")
    const { isOpen } = useAppSelector((state) => state.global);
 

  const closeNav = () => {
    dispatch(closeAdminSlide());
  };

  return (
    <div>
    
      <div
        className={`adSliderRes h-full bg-[#1b1b1b] text-white transition-all duration-500 ease-in-out ${
          isOpen ? "w-56" : "w-0"
        } overflow-x-hidden z-10 pt-16`}
      >
        {/* Close button */}

      
        <button className="absolute top-0 right-5 text-3xl" onClick={closeNav}>
        <span className="text-3xl cursor-pointer mb-3" >
        &#9776; 
      </span>
        </button>
        <nav className="flex flex-col space-y-4 mt-10 pl-8">
        <ul>
  {
    sidebarVal?.map((val) => (
      <NavLink 
  to={val.href}
  className={({ isActive }) => 
    `py-4 cursor-pointer flex gap-2 items-center ${isActive ? 'bg-primary shadow-lg pl-3' : ''}`
  }
 
>
  <li  className="flex items-center gap-2"
    key={val.name} 

    onClick={() => setIsClickAdSide(val.name)}
  >
    {val.icon}{val.name}
  </li>
</NavLink>
    ))
  }
</ul>
        
        </nav>
      </div>
    </div>
  );
};

export default AdminSlider;
