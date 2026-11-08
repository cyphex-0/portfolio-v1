'use client';

import React, { useState } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';

export default function ClientBootstrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic intro loader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main app viewport - only renders after loader completes */}
      {!isLoading && (
        <div className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-[#FF5C00] selection:text-white">
          {/* Hardware-accelerated custom cursor */}
          <CustomCursor />
          
          {children}
        </div>
      )}
    </>
  );
}
