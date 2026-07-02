'use client';

import React, { useState } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic intro loader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main app viewport */}
      {!isLoading && (
        <div className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-[#FF5C00] selection:text-white">
          {/* Hardware-accelerated custom cursor */}
          <CustomCursor />

          {/* Floating glassmorphic header */}
          <Navbar />

          {/* Content sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Minimal, elegant brand footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
