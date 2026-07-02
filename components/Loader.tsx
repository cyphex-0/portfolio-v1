'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const words = ["INTELLIGENCE", "STRUCTURE", "SYNERGY", "CRAFT", "ELEGANCE", "PERFORMANCE"];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(new Date().toLocaleTimeString());
    };
    const timer = setTimeout(updateTime, 0);
    const timeInterval = setInterval(updateTime, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    // Increment loading percentage with custom ease
    let start = 0;
    const duration = 2400; // 2.4 seconds total load
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += Math.random() * 3 + 1; // Variable steps for realism
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for transition animation
        }, 300);
      }
      setProgress(Math.floor(start));
    }, intervalTime);

    // Cycle through words rapidly but elegantly
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 350);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="cinematic-loader"
          className="fixed inset-0 bg-[#050505] z-[99999] flex flex-col justify-between p-10 md:p-16 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] sunset-glow opacity-60 pointer-events-none" />

          {/* Top Row: Brand & System Indicator */}
          <div className="flex justify-between items-start z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-[#FF5C00] rounded-full animate-pulse" />
              <span className="font-display font-medium text-xs tracking-widest text-[#FF5C00]">MAKHDU.M</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-[9px] text-[#8A8A8A] tracking-wider block">SYS_STATUS: ACTIVE</span>
              <span className="font-mono text-[9px] text-[#8A8A8A] tracking-wider block">LOCAL_TIME: {localTime}</span>
            </div>
          </div>

          {/* Center Row: Conceptual Word Changing */}
          <div className="flex flex-col items-center justify-center z-10 flex-1 my-auto">
            <div className="h-16 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="font-display text-2xl md:text-4xl lg:text-5xl font-black tracking-[0.2em] text-white"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Row: Percentage & Subtext */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 z-10">
            <div className="max-w-xs text-left">
              <span className="font-display font-bold text-[#FF5C00] text-xs tracking-widest block mb-1">SHAH MAKHDUM</span>
              <p className="text-[10px] text-[#8A8A8A] uppercase tracking-wider leading-relaxed">
                Creative design meets cutting-edge machine intelligence.
              </p>
            </div>
            
            {/* Big Elegant Counter */}
            <div className="flex items-baseline font-display text-[15vw] md:text-[8vw] font-black leading-none text-white tracking-tighter">
              <span>{progress.toString().padStart(3, '0')}</span>
              <span className="text-[#FF5C00] text-[4vw] md:text-[2.5vw] font-light ml-2">%</span>
            </div>
          </div>

          {/* Progress bar overlay at bottom */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-[#FF5C00] transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
