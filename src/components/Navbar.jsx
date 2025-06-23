import React from 'react';
import logo from '../assets/Janvi Technologies (1) (1) REV-01.png'; // adjust path if needed

export default function Navbar() {
  const menuItems = ['Home', 'About', 'IT Solutions', 'ContactUs'];

  return (
    <header className="bg-white bg-opacity-70 backdrop-blur-md text-teal-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Janvi Technologies Logo" className="h-24 w-auto" />
          <div className="text-xl font-bold select-none">Janvi Technologies</div>
        </div>

        <nav className="space-x-6">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-teal-300 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
