// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';
import app from '../firebase';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Home</title>
      </Head>
      <main className="px-4 py-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome to My App</h1>
        <div className="flex flex-col gap-4">
          <Link href="/signup">
            Sign Up
          </Link>
          <Link href="/signin">
            Sign In
          </Link>
        </div>
      </main>
    </div>
  );
}
