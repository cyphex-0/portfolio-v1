'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { PROFILE_CONFIG } from '@/config/profile.config';

export function Footer() {
  const { scrollToTop } = useScrollToSection();

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 py-8 px-4 md:px-8 lg:px-16 overflow-hidden select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-[#8A8A8A] text-xs md:text-sm font-mono uppercase tracking-wider">
          &copy; {new Date().getFullYear()} {PROFILE_CONFIG.name}
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-8 z-10">
          <Magnetic>
            <a
              href={PROFILE_CONFIG.socialLinks.github.url}
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
              href={PROFILE_CONFIG.socialLinks.linkedin.url}
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
            onClick={scrollToTop}
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

export default Footer;
