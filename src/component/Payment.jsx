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
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212', color: 'white' }}>
      <div style={{ backgroundColor: '#1E1E1E', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>Crypto Payment</h1>
        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '18px', marginBottom: '8px' }} htmlFor="walletAddress">Wallet Address (USDT)</label>
            <p style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#2C2C2C', color: 'white' }}>{walletAddress}</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '18px', marginBottom: '8px' }} htmlFor="amount">$ Amount (BEP20)</label>
            <p style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#2C2C2C', color: 'white' }}>{amount}</p>
          </div>
          <button
            type="submit"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#EFA593', color: 'black', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        {isLoading && (
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <div className="loader"></div>
            <p>Processing your payment, please wait...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;