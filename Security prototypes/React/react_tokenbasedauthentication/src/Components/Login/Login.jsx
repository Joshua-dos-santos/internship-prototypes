import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg' // Import the logo image with a correct relative path

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json());
}

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long.');
      return;
    }

    setPasswordError('');

    const token = await loginUser({
      userName,
      password
    });
    setToken(token);
  };

  return (
    <>
      <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center">
        <div className="bg-gray-800 text-white rounded-md shadow-md p-8 max-w-md w-full">
          <img src={logo} alt="Logo" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">Sign Up Here</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="username" className="text-white font-bold mb-1">Username</label>
              <input type="text" id="username" required onChange={(e) => setUserName(e.target.value)} className="p-3 rounded bg-gray-900 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-white font-bold mb-1">Password</label>
              <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} className="p-3 rounded bg-gray-900 text-white" />
              {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
            </div>
            <button type="submit" className="bg-blue-700 py-3 rounded font-bold text-white">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;
