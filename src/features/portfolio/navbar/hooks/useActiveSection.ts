'use client';

import { useState, useEffect, useCallback } from 'react';
import { SECTION_IDS } from '@/config/navigation.config';

export function useActiveSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy logic preserving exact 200px threshold
      for (const section of SECTION_IDS) {
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

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    },
    []
  );

  return {
    isScrolled,
    activeSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleNavClick,
  };
}

export default useActiveSection;
