'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'project'>('default');
  const [isTouch, setIsTouch] = useState(true);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth custom cursor following physics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Add springs for fluid elastic motion
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch or desktop
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(hasTouch);
      if (!hasTouch) setIsVisible(true);
    };

    checkTouch();

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the 32px cursor
      mouseY.set(e.clientY - 16);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (!isTouch) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering over links/buttons
      const isPointer = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button';

      // Check if hovering over project cards
      const isProjectCard = target.closest('[data-cursor="project"]') !== null;
      
      // Check if hovering over text inputs or long-form copy
      const isText = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('[data-cursor="text"]') !== null;

      if (isProjectCard) {
        setCursorType('project');
      } else if (isText) {
        setCursorType('text');
      } else if (isPointer) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center font-display text-[8px] font-bold tracking-widest uppercase text-black"
      style={{
        x: cursorX,
        y: cursorY,
        border: cursorType === 'text' 
          ? '1px solid #FFFFFF' 
          : cursorType === 'project'
          ? 'none'
          : '1.5px solid #FF5C00',
        backgroundColor: cursorType === 'pointer' 
          ? 'rgba(255, 92, 0, 0.9)' 
          : cursorType === 'project'
          ? '#FFFFFF'
          : 'transparent',
        scale: cursorType === 'pointer' 
          ? 1.5 
          : cursorType === 'project'
          ? 2.5
          : cursorType === 'text'
          ? 0.5
          : 1,
      }}
      animate={{
        width: cursorType === 'text' ? '2px' : '32px',
        height: cursorType === 'text' ? '24px' : '32px',
        borderRadius: cursorType === 'text' ? '1px' : '9999px',
      }}
      transition={{ duration: 0.15 }}
    >
      {cursorType === 'project' && (
        <span className="text-[7px] text-black font-extrabold leading-none tracking-normal">VIEW</span>
      )}
    </motion.div>
  );
}
