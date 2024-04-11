import { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/api/logout');

        // Remove token from local storage
        localStorage.removeItem('token');

        console.log('Logout successful!');
        // Handle successful logout, e.g., redirect to login page
      } catch (error) {
        console.error('Logout failed!', error);
        // Handle logout failure, if needed
      }
    };

    logout();
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;
