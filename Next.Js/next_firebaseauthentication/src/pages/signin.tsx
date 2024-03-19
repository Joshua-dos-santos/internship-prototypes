// pages/signin.tsx

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase'; // Import Firebase configuration
import '@/app/globals.css';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const auth = getAuth(app);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to dashboard or any other page after signin
    } catch (error) {
      console.error('Error signing in:');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Sign In</title>
      </Head>
      <main className="px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          />
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
