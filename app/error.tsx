'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
      <h2 className="text-4xl font-display font-black text-[#FF5C00] mb-4">Something went wrong!</h2>
      <p className="text-[#8A8A8A] mb-8 font-mono">A critical system error occurred.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 rounded bg-white/5 border border-white/10 hover:border-[#FF5C00]/40 text-white font-medium transition-all duration-300"
      >
        Try again
      </button>
    </div>
  );
}
