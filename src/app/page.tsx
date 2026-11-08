import React from 'react';
import { ClientBootstrapper } from '@/components/effects';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from '@/features/portfolio';

export default function Home() {
  return (
    <ClientBootstrapper>
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
    </ClientBootstrapper>
  );
}
