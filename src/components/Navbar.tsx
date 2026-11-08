'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate absolute top position on the document reliably
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const topOffset = elementPosition - 100; // Account for the floating navbar height
      
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

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
        <div 
          className="w-auto md:w-full max-w-5xl bg-black/40 backdrop-blur-md border border-white/8 rounded-full p-2 md:px-6 md:py-3 flex items-center justify-center md:grid md:grid-cols-[1fr_auto_1fr] pointer-events-auto transition-all duration-300 shadow-xl shadow-black/10"
        >
          {/* Left Spacer for perfect center alignment */}
          <div className="hidden md:block" />

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 justify-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-4 py-1.5 font-display text-xs font-semibold tracking-wider uppercase text-white transition-all duration-300 hover:text-[#FF5C00]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 bg-[#FF5C00]/10 rounded-full border border-[#FF5C00]/20 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA / Quick contact */}
          <div className="hidden md:flex justify-end">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#FF5C00]/40 group"
            >
              <span>Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5C00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-all text-white border border-transparent hover:border-white/10"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FF5C00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-lg z-40 flex flex-col justify-between p-10 pt-28"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sunset-glow opacity-30 pointer-events-none" />

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 z-10">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`font-display text-4xl font-black tracking-tight uppercase transition-all ${
                        isActive 
                          ? 'text-[#FF5C00]' 
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom contact info */}
            <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-6 z-10">
              <div>
                <span className="block text-[10px] text-[#8A8A8A] uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:contact.makhdum@gmail.com" className="font-display font-medium text-sm text-white hover:text-[#FF5C00] transition-colors">
                  contact.makhdum@gmail.com
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="https://github.com/cyphex-0" target="_blank" rel="noopener noreferrer" className="font-display text-xs text-[#8A8A8A] hover:text-white transition-colors uppercase tracking-widest">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/shahmakhdum/" target="_blank" rel="noopener noreferrer" className="font-display text-xs text-[#8A8A8A] hover:text-white transition-colors uppercase tracking-widest">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
