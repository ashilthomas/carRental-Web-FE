import React, { useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { toggleAdminSlide } from "../../../Redux/globelSlice";

const AdminHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch=useAppDispatch()

  return (
    <header className="bg-[#1b1b1b] text-white shadow-md">
      <div className="w-[1300px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="md:hidden">
          <button onClick={()=>dispatch(toggleAdminSlide())}>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
          </button>
        </div>
        <div className="text-xl font-bold">
          <a href="/">Admin Dashboard</a>
        </div>

        {/* Menu for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Users</a>
          <a href="#" className="hover:text-gray-300">Settings</a>
          <a href="#" className="hover:text-gray-300">Profile</a>
        </nav>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-white"
            
          >
         onClick
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <nav className="space-y-2 py-2">
            <a href="#" className="block px-4 py-2 hover:bg-blue-500">
              Dashboard
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500">
              Users
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500">
              Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
