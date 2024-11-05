import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { useAppSelector } from "../../hooks";

const Footer = () => {
  const  userData = useAppSelector((state)=>state.userData)
 

  
  return (
    <footer className=" dark:bg-black  bg-[#222]  text-white py-[100px] px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="font-bold">Call us</h3>
          <p className="flex items-center space-x-2">
            <span className="bg-orange-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 4.5h16.5m-16.5 0a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25m-16.5 0v-.75a2.25 2.25 0 112.25 2.25m14.25 0V4.5m-14.25 0h14.25"
                />
              </svg>
            </span>
            <span>+971 52-333-4444</span>
          </p>

          <h3 className="font-bold">Write to us</h3>
          <p className="flex items-center space-x-2">
            <span className="bg-orange-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
                />
              </svg>
            </span>
            <span>info@renax.com</span>
          </p>

          <h3 className="font-bold">Address</h3>
          <p className="flex items-center space-x-2">
            <span className="bg-orange-500 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25c-1.518 0-2.75 1.232-2.75 2.75S10.482 13.75 12 13.75s2.75-1.232 2.75-2.75S13.518 8.25 12 8.25z"
                />
              </svg>
            </span>
            <span>Dubai, Water Tower, Office 123</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#b6b5b5]">
            <li>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Car Types
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold text-xl mb-4">Subscribe</h3>
          <p className="mb-4">Want to be notified about our services? Just sign up and we'll send you a notification by email.</p>
          <form className="flex space-x-2 border p-2 rounded-full ">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2  bg-inherit focus:outline-none focus:border-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 py-3 px-3  rounded-e-full text-black hover:bg-yellow-600"
            >
              →
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-4  ">
            <a href="#" className="text-xl hover:text-orange-500 text-yellow-500 border p-4 rounded-full ">
            <FaFacebook/> {/* Use Font Awesome or a similar icon library */}
            </a>
            <a href="#" className="text-xl hover:text-orange-500 text-yellow-500  border p-4 rounded-full">
            <FaSquareXTwitter />
            </a>
            <a href="#" className="text-xl hover:text-orange-500 text-yellow-500  border p-4 rounded-full">
            <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p>©2024 webRedox. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
