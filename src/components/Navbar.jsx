// Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4 h-14">
      {/* Logo placeholder */}
      <div style={{ width: '120px' }}>Logo</div>

      {/* Search input */}
      <div className="flex-grow flex justify-center">
        <input type="text" placeholder="Search..." className="bg-gray-700 text-white p-2 h-6 rounded" />
      </div>

      {/* Avatar with dropdown menu */}
      <div className="relative">
        <button onClick={toggleMenu} className="flex items-center text-white focus:outline-none">
          <img src="avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
          <span>Username</span>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded shadow-md">
            <ul className="py-1">
              <li className="hover:bg-gray-700 py-1 px-3">Profile</li>
              <li className="hover:bg-gray-700 py-1 px-3">Settings</li>
              <li className="hover:bg-gray-700 py-1 px-3">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
