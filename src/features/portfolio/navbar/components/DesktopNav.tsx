'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/config/navigation.config';

export interface DesktopNavProps {
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function DesktopNav({ activeSection, onNavClick }: DesktopNavProps) {
  return (
    <>
      {/* Desktop Nav Items */}
      <nav className="hidden md:flex items-center space-x-1 justify-center">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
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
          onClick={(e) => onNavClick(e, '#contact')}
          className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#FF5C00]/40 group"
        >
          <span>Build</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5C00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </>
  );
}

export default DesktopNav;
