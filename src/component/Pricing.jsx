import React, { useState } from 'react';
import { FaBars, FaHome, FaRobot } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loadingButton, setLoadingButton] = useState(null);
  const navigate = useNavigate();

  const handleOrder = (plan, amount) => {
    setLoadingButton(plan);
    setTimeout(() => {
      setLoadingButton(null);
      navigate('/payment', { state: { plan, amount } });
    }, 2000); // Simulasi waktu loading selama 2 detik
  };

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
          <h1 className="text-3xl font-bold">easy play, easy implement, easy cracked!</h1>
        </div>
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-6">Ragnarok - IdRo</h1>
          <div className="flex justify-center space-x-6">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h2 className="text-xl font-bold">3 Client / 30 Days</h2>
              <div className="border-t border-gray-300 my-2"></div>
              <p className="text-3xl font-bold">$25<span className="text-gray-500 text-xl">/30Days</span></p>
              <p className="mt-2 text-gray-700">Xkore 1</p>
              <p className="text-gray-700">Lock HWID</p>
              <p className="text-gray-700">3 Clients</p>
              <button
                className="bg-black text-white px-6 py-2 rounded-lg mt-4"
                onClick={() => handleOrder('30Days', 25)}
                disabled={loadingButton === '30Days'}
              >
                {loadingButton === '30Days' ? 'Processing...' : 'Order'}
              </button>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h2 className="text-xl font-bold">3 Client / 60 Days</h2>
              <div className="border-t border-gray-300 my-2"></div>
              <p className="text-3xl font-bold">$45<span className="text-gray-500 text-xl">/60Days</span></p>
              <p className="mt-2 text-gray-700">Xkore 1</p>
              <p className="text-gray-700">Lock HWID</p>
              <p className="text-gray-700">3 Clients</p>
              <button
                className="bg-black text-white px-6 py-2 rounded-lg mt-4"
                onClick={() => handleOrder('60Days', 45)}
                disabled={loadingButton === '60Days'}
              >
                {loadingButton === '60Days' ? 'Processing...' : 'Order'}
              </button>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h2 className="text-xl font-bold">3 Client / 90 Days</h2>
              <div className="border-t border-gray-300 my-2"></div>
              <p className="text-3xl font-bold">$60<span className="text-gray-500 text-xl">/90Days</span></p>
              <p className="mt-2 text-gray-700">Xkore 1</p>
              <p className="text-gray-700">Lock HWID</p>
              <p className="text-gray-700">3 Clients</p>
              <button
                className="bg-black text-white px-6 py-2 rounded-lg mt-4"
                onClick={() => handleOrder('90Days', 60)}
                disabled={loadingButton === '90Days'}
              >
                {loadingButton === '90Days' ? 'Processing...' : 'Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
