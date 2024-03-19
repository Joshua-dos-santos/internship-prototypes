import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/authenticate', { username, password });
      const { token } = response.data;

      // Store token in local storage
      localStorage.setItem('token', token);

      console.log('Login successful!', response.data);
      router.push('/dashboard');
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Login failed!', error);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-24">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <div className="relative flex items-center mt-8">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <div className="space-y-4">
          <input
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          className={`w-full bg-blue-500 text-white py-2 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          } mt-4`}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </main>
  );
};

export default Login;
