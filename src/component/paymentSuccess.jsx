import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#121212] text-white">
      <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Payment Successful</h1>
        <p className="mb-6">Thank you for your payment!</p>
        <Link to="/">
          <button className="w-full p-3 rounded-lg bg-[#EFA593] text-black font-bold hover:bg-[#d97a6b]">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;