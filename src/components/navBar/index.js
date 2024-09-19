import React, { useState } from "react";
import Logo from "../../Assests/Logo.svg";
import Vector12 from "../../Assests/Vector 12.png";
const Navbar = () => {
  // State to control the side drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="bg-white  relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <img className="h-10 w-auto" src={Logo} alt="CRUX Logo" />
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-6 text-gray-900">
              <a className="hover:text-orange-600">About Us</a>
              <a className="hover:text-orange-600">Our Clients</a>
              <a className="hover:text-orange-600">Our Team</a>
              <a className="hover:text-orange-600">Our Work</a>
              <a className="hover:text-orange-600 border-b-2 border-orange-600">
                Our Services
              </a>
              <a className="hover:text-orange-600">Industries We Serve</a>

              {/* Blog Nav Item with vector beside */}
              <a className="hover:text-orange-600 flex items-center space-x-2">
                <span>Blog</span>
                {/* <img
                  src={Vector13} // Replace with vector beside Blog
                  alt="Vector beside Blog"
                  className="h-8 w-0.5"
                /> */}
              </a>
            </div>

            {/* Contact Us Button (visible on all screens) */}
            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="px-5 py-2 bg-black text-white hover:bg-gray-800 rounded-full text-sm font-medium flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.293l3 3a1 1 0 01-1.414 1.414L11 10.414V14a1 1 0 11-2 0v-3.586l-1.293 1.293A1 1 0 116.293 9.707l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                className="text-gray-900 focus:outline-none"
              >
                {/* Hamburger SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Vector as Bottom Border */}
        <div
          className="absolute bottom-0 left-0 w-full h-1"
          style={{
            backgroundImage: `url(${Vector12})`,
            backgroundRepeat: "repeat-x", // Repeat along the X-axis
            backgroundSize: "contain", // Ensure it fits without stretching
            height: "3px", // Adjust the height based on your border image
          }}
        ></div>
      </nav>

      {/* Side Drawer for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Drawer Content */}
        <div className="px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img className="h-10 w-auto" src={Logo} alt="CRUX Logo" />
            </div>
            {/* Close Button */}
            <button
              onClick={toggleDrawer}
              className="text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="../../"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <a className="block text-gray-900 hover:text-orange-600">
              About Us
            </a>
            <a className="block text-gray-900 hover:text-orange-600">
              Our Clients
            </a>
            <a className="block text-gray-900 hover:text-orange-600">
              Our Team
            </a>
            <a className="block text-gray-900 hover:text-orange-600">
              Our Work
            </a>
            <a className="block text-orange-600">Our Services</a>
            <a className="block text-gray-900 hover:text-orange-600">
              Industries We Serve
            </a>
            <a className="block text-gray-900 hover:text-orange-600">Blog</a>
            {/* Contact Us button inside drawer */}
            <a className="block px-5 py-2 mt-4 bg-black text-white hover:bg-gray-800 rounded-full text-sm font-medium flex items-center justify-center space-x-2">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop when side drawer is open */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
