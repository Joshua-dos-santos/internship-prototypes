import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Login from './Login/Login';
import useToken from './App/useToken';
import logo from '../logo.svg'; // Import the logo image with a correct relative path

const Dashboard = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className='font-bold text-2xl mb-8'>Dashboard</div>
      <div>
        <img src={logo} alt="Logo" className="w-20 h-20" /> {/* Use the imported logo variable */}
      </div>
      <Link to="/" className="mt-4 underline">Back to Home</Link> {/* Add a link back to home */}
    </div>
  );
};

export default Dashboard;
