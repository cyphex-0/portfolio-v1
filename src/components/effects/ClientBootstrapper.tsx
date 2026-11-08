'use client';

import React, { useState } from 'react';
import { CinematicLoader } from './CinematicLoader';
import { CustomCursor } from './CustomCursor';

export interface ClientBootstrapperProps {
  children: React.ReactNode;
}

export function ClientBootstrapper({ children }: ClientBootstrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic intro loader */}
      <CinematicLoader onComplete={() => setIsLoading(false)} />

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

export default ClientBootstrapper;
