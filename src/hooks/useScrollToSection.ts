'use client';

import { useCallback } from 'react';

/**
 * Hook providing smooth scroll functions for section navigation and back-to-top.
 * Preserves the exact 100px top offset used across the portfolio.
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((target: string, offset = 100) => {
    const selector = target.startsWith('#') ? target : `#${target}`;
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToSection, scrollToTop };
}

export default useScrollToSection;
