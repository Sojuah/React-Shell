// Navbar.jsx
import React, {useState} from 'react';

const Navbar = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4 h-14">
      <button onClick={toggleSidebar} className="text-white focus:outline-none md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div style={{ width: '120px' }}>Logo</div>

      <div className="flex-grow flex justify-center">
        <input type="text" placeholder="Search..." className="bg-gray-700 text-white p-2 h-6 rounded" />
      </div>

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
