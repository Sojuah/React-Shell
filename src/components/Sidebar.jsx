// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ expanded, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div className={`w-14 flex-shrink-0 bg-gray-900 transition-all duration-300 ${expanded ? 'w-36' : ''}`}>
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={expanded ? faArrowLeft : faBars} className="text-xl" />
        </button>
        {expanded && <span></span>}
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <ul className="space-y-4">
          <li>
            <Link to="/" className={`flex items-center justify-center text-gray-400 hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>
              <FontAwesomeIcon icon={faHome} className={expanded ? "mr-2" : ""} />
              {expanded && "Home"}
            </Link>
          </li>
          <li>
            <Link to="/about" className={`flex items-center justify-center text-gray-400 hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}>
              <FontAwesomeIcon icon={faInfoCircle} className={expanded ? "mr-2" : ""} />
              {expanded && "About"}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`flex items-center justify-center text-gray-400 hover:text-white ${location.pathname === '/contact' ? 'text-white' : ''}`}>
              <FontAwesomeIcon icon={faEnvelope} className={expanded ? "mr-2" : ""} />
              {expanded && "Contact"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
