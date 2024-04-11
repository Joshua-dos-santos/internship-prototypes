// pages/dashboard.tsx
import { useEffect } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Example of fetching user data or other initialization logic on dashboard load
    // You can fetch user data here and display it on the dashboard
  }, []);

  const handleLogout = () => {
    // Example logout handler
    localStorage.removeItem('token'); // Remove token from local storage
    router.push('/Login'); // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedRoute(DashboardPage);
