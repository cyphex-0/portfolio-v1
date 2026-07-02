import React from 'react';
import ClientBootstrapper from '@/components/ClientBootstrapper';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
