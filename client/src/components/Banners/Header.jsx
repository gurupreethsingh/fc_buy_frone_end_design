import React from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import logo from "../../assets/logo-removebg.png"; // Replace with your logo import

const Header = () => {
  return (
    <header className="bg-white border-b">
      {/* Logo Section */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section: Logo and Location */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <div className="hidden md:flex items-center text-sm text-gray-700">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 text-green-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657A8 8 0 1119 12h2a10 10 0 10-5.293 8.657M12 12v.01"
                />
              </svg>
              Setup your precise location
            </span>
            <svg
              className="ml-1 w-4 h-4 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.292 7.292a1 1 0 011.416 0L10 10.585l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Center Section: Search Field */}
        <div className="hidden md:flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search for restaurant and food"
            className="w-full bg-transparent outline-none text-sm"
          />
          <FaSearch className="text-gray-400 ml-2" />
        </div>

        {/* Right Section: User Avatar */}
        <div className="flex items-center">
          <a href="/user-profile" className="text-gray-500 w-6 h-6">
            <FaUserAlt />
          </a>
        </div>
      </div>

      {/* Mobile Search Bar (only visible on small screens) */}
      <div className="md:hidden flex justify-center p-4">
        <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search for restaurant and food"
            className="w-full bg-transparent outline-none text-sm"
          />
          <FaSearch className="text-gray-400 ml-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
