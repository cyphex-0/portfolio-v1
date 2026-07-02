'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

interface MagneticProps {
  children: React.ReactNode;
}

function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, high-fidelity spring configuration
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull distance (multiplied by 0.35 to keep it controlled and premium)
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 py-8 px-4 md:px-8 lg:px-16 overflow-hidden select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <div className="text-[#8A8A8A] text-xs md:text-sm font-mono uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Shah Makhdum
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-8 z-10">
          <Magnetic>
            <a 
              href="https://github.com/cyphex-0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8A8A8A] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="https://www.linkedin.com/in/shahmakhdum/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8A8A8A] hover:text-[#0A66C2] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Magnetic>
        </div>

        {/* Back to top button */}
        <Magnetic>
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 text-[#8A8A8A] hover:text-white transition-colors duration-300 text-xs font-mono uppercase tracking-wider group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </Magnetic>

      </div>
    </footer>
  );
}
