import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const HomePage = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <h1 className="text-white text-2xl font-bold">HomePage</h1>
      <Link to="/dashboard" className="text-white ml-4">Go to Dashboard</Link>
    </div>
  );
};

export default HomePage;
