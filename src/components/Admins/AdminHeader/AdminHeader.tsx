import React, { useState } from "react";

const AdminHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1b1b1b] text-white shadow-md">
      <div className="w-[1300px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
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
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
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
