// components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const ProtectRoute = () => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Redirect to login if token is not present
        router.push('/Login');
      }
    }, []);

    return <WrappedComponent />;
  };

  return ProtectRoute;
};

export default ProtectedRoute;
