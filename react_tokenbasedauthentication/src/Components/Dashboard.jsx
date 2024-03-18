import React, { useState } from 'react';
import Login from './Login/Login';
import useToken from './App/useToken';
import logo from '../logo.svg'; // Import the logo image with a correct relative path

const Dashboard = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <div className='text-white font-bold text-2xl'>Dashboard</div>
      <div>
        <img src={logo} alt="Logo" /> {/* Use the imported logo variable */}
      </div>
    </div>
  );
};

export default Dashboard;
