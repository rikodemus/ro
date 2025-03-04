import React, { useState } from 'react';
import { FaBars, FaHome, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen flex bg-[#121212] text-white">
      {/* Sidebar */}
      <div
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={`${
          isSidebarOpen ? 'w-1/6' : 'w-16'
        } bg-[#1E1E1E] overflow-hidden transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-center h-16">
          <FaBars className="text-2xl text-white" />
          {isSidebarOpen && <h1 className="ml-4 text-xl font-bold text-white">Menu</h1>}
        </div>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center space-x-4 p-5 cursor-pointer hover:text-[#EFA593]">
            <FaHome className="text-2xl" />
            {isSidebarOpen && <Link to="/" className="text-lg font-medium">Homepage</Link>}
          </li>
          <li className="flex items-center space-x-4 p-5 cursor-pointer hover:text-[#EFA593]">
            <FaRobot className="text-2xl" />
            {isSidebarOpen && <Link to="/Pricing" className="text-lg font-medium">Bot Ragnarok</Link>}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Header */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg text-center mb-6">
          <h1 className="text-3xl font-bold">Light Hack</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
