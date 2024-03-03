// Layout.jsx
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
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow">
        <Sidebar expanded={expanded} toggleSidebar={toggleSidebar} />
        <main className={`flex-grow overflow-y-auto p-4 ${expanded ? '' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
