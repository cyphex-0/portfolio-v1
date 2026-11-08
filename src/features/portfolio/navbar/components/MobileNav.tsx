'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/config/navigation.config';
import { PROFILE_CONFIG } from '@/config/profile.config';

export interface MobileNavProps {
  isOpen: boolean;
  activeSection: string;
  onToggle: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({ isOpen, activeSection, onToggle, onNavClick }: MobileNavProps) {
  return (
    <>
      {/* Mobile Menu Trigger */}
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded-full hover:bg-white/5 transition-all text-white border border-transparent hover:border-white/10"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-5 h-5 text-[#FF5C00]" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
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
              {NAVIGATION_ITEMS.map((item, index) => {
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
                      onClick={(e) => onNavClick(e, item.href)}
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
                <a
                  href={`mailto:${PROFILE_CONFIG.email}`}
                  className="font-display font-medium text-sm text-white hover:text-[#FF5C00] transition-colors"
                >
                  {PROFILE_CONFIG.email}
                </a>
              </div>
              <div className="flex space-x-6">
                <a
                  href={PROFILE_CONFIG.socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs text-[#8A8A8A] hover:text-white transition-colors uppercase tracking-widest"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE_CONFIG.socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs text-[#8A8A8A] hover:text-white transition-colors uppercase tracking-widest"
                >
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

export default MobileNav;
