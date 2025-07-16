import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-gray-300 py-6 border-t border-teal-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
        <p>&copy; {new Date().getFullYear()} Janvi Technologies. All rights reserved.</p>
        
        {/* Optional: Add links or social icons here */}
        <div className="flex space-x-4">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#contactus" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
