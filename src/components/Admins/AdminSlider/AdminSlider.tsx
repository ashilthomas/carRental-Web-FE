import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { closeAdminSlide } from "../../../Redux/globelSlice";

const AdminSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector((state) => state.global);
 

  const closeNav = () => {
    dispatch(closeAdminSlide());
  };

  return (
    <div>
    
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-500 ease-in-out ${
          isOpen ? "w-64" : "w-0"
        } overflow-x-hidden z-10 pt-16`}
      >
        {/* Close button */}

      
        <button className="absolute top-0 right-5 text-3xl" onClick={closeNav}>
        <span className="text-3xl cursor-pointer mb-3" >
        &#9776; 
      </span>
        </button>
        <nav className="flex flex-col space-y-4 mt-10 pl-8">
          <a href="#" className="text-gray-400 hover:text-gray-200 text-xl">
          Add Vechicle
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 text-xl">
            VechileList
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 text-xl">
           AddBrands
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 text-xl">
          MembersList
          </a>
        </nav>
      </div>
    </div>
  );
};

export default AdminSlider;
