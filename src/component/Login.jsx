// filepath: /D:/ragnarok/src/component/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#121212] text-white">
      <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg bg-[#2C2C2C] text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-[#EFA593] text-black font-bold hover:bg-[#d97a6b]"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Don't have an account? <Link to="/register" className="text-[#EFA593] hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;