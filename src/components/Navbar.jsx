import React, { useState } from 'react';
import logo from '../assets/Janvi Technologies (1) (1) REV-01.png'; // Adjust path if needed
import { FaBars, FaTimes } from 'react-icons/fa'; // Install react-icons if not already

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'IT Solutions', 'ContactUs'];

  return (
    <header className="bg-white bg-opacity-70 backdrop-blur-md text-teal-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Janvi Technologies Logo" className="h-14 w-auto" />
          <div className="text-lg font-bold select-none">Janvi Technologies</div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-teal-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 shadow-md">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-teal-700 hover:text-teal-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)} // Close menu after click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
