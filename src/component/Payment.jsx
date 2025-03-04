import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { plan, amount } = location.state || { plan: 'Unknown', amount: 0 };
  const walletAddress = '0xY0xa2f74f74fde22c13d1d32373045421cdc97c0d79'; // Ganti dengan alamat wallet Anda

  const handlePayment = () => {
    setIsLoading(true);
    console.log('Wallet Address:', walletAddress);
    console.log('Amount:', amount);

    // Simulasi proses pembayaran
    setTimeout(() => {
      setIsLoading(false);
      navigate('/PaymentSuccess'); // Pindah ke halaman sukses pembayaran
    }, 3000); // Ganti dengan logika pembayaran sebenarnya
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#121212] text-white">
      <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Crypto Payment</h1>
        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="walletAddress">Wallet Address (USDT)</label>
            <p className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white">{walletAddress}</p>
          </div>
          <div className="mb-6">
            <label className="block text-lg mb-2" htmlFor="amount">$ Amount (BEP20)</label>
            <p className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white">{amount}</p>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-[#EFA593] text-black font-bold hover:bg-[#d97a6b]"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        {isLoading && (
          <div className="mt-4 text-center">
            <div className="loader"></div>
            <p>Processing your payment, please wait...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;