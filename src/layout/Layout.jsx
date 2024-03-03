// SidebarLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Sidebar */}
      <div className="flex-grow flex">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-14 flex-shrink-0 transition-all duration-300 ${expanded ? 'ml-0' : '-ml-14'}`}>
          <Sidebar />
        </div>
        
        {/* Main content */}
        <div className={`ml-14 transition-all duration-300 ${expanded ? 'pl-14' : 'pl-0'} flex-grow`}> {/* Adjusting margin based on sidebar state */}
          <div className="p-4 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
