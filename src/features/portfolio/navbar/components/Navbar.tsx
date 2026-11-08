'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useActiveSection } from '../hooks/useActiveSection';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const {
    isScrolled,
    activeSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleNavClick,
  } = useActiveSection();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 flex justify-end md:justify-center px-4 md:px-8 py-6 pointer-events-none"
        animate={{
          paddingTop: isScrolled ? '16px' : '24px',
          paddingBottom: isScrolled ? '16px' : '24px',
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="w-auto md:w-full max-w-5xl bg-black/40 backdrop-blur-md border border-white/8 rounded-full p-2 md:px-6 md:py-3 flex items-center justify-center md:grid md:grid-cols-[1fr_auto_1fr] pointer-events-auto transition-all duration-300 shadow-xl shadow-black/10">
          {/* Left Spacer for perfect center alignment */}
          <div className="hidden md:block" />

          {/* Desktop Navigation */}
          <DesktopNav activeSection={activeSection} onNavClick={handleNavClick} />

          {/* Mobile Navigation */}
          <MobileNav
            isOpen={isMobileMenuOpen}
            activeSection={activeSection}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onNavClick={handleNavClick}
          />
        </div>
      </motion.header>
    </>
  );
}

export default Navbar;
