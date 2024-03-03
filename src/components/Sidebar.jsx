import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 overflow-y-auto text-center bg-gray-900 transition-all duration-300 ${expanded ? 'w-36' : 'w-14'}`}>
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={expanded ? faArrowLeft : faBars} className="text-white text-xl" />
        </button>
        <span>{expanded ? 'Sidebar' : ''}</span>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <ul className="space-y-4">
          <li>
            <Link to="/" className={`flex items-center justify-center text-gray-400 hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>
              {expanded ? (
                <>
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </>
              ) : (
                <FontAwesomeIcon icon={faHome} />
              )}
            </Link>
          </li>
          <li>
            <Link to="/about" className={`flex items-center justify-center text-gray-400 hover:text-white ${location.pathname === '/about' ? 'text-white' : ''}`}>
              {expanded ? (
                <>
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  About
                </>
              ) : (
                <FontAwesomeIcon icon={faInfoCircle} />
              )}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`flex items-center justify-center text-gray-400 hover:text-white ${location.pathname === '/contact' ? 'text-white' : ''}`}>
              {expanded ? (
                <>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contact
                </>
              ) : (
                <FontAwesomeIcon icon={faEnvelope} />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
