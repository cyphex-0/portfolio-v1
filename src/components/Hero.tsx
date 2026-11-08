'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Github, Linkedin, FileText, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import profilePic from '@/assets/shah_makhdum.jpg';

const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { 
    y: "115%", 
    rotateX: 12,
    skewY: 2,
    opacity: 0,
  },
  visible: { 
    y: "0%", 
    rotateX: 0,
    skewY: 0,
    opacity: 1,
    transition: { 
      duration: 1.1, 
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Connect typography transitions directly to page scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate high-end scroll-bound offsets
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const handleScrollToWork = () => {
    const element = document.getElementById('projects');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const topOffset = elementPosition - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const topOffset = elementPosition - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-[100vh] w-full bg-[#050505] flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8 lg:px-16"
    >
      {/* Background glowing sunset environment */}
      <div className="absolute top-1/4 right-1/10 w-[60vw] h-[60vw] sunset-glow-strong opacity-30 pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[45vw] h-[45vw] sunset-glow opacity-15 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none" />

      {/* Abstract Shape 1: Amber/Orange drifting organic blob with high blur */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[280px] h-[280px] rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%] bg-gradient-to-tr from-[#FF5C00]/15 to-[#FF1E00]/5 blur-[60px] pointer-events-none"
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -50, 30, 0],
          rotate: [0, 120, 240, 360],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Abstract Shape 2: Rotating precise orbital geometric ring with subtle glass glow */}
      <motion.div
        className="absolute top-[12%] right-[12%] w-[320px] h-[320px] rounded-full border border-white/5 bg-gradient-to-br from-white/[0.01] to-white/[0.03] backdrop-blur-[2px] pointer-events-none hidden md:flex items-center justify-center"
        animate={{
          y: [0, 25, -15, 0],
          x: [0, -20, 25, 0],
          rotate: [0, -90, -180, -360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Inner concentric ring with accent border */}
        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-[#FF5C00]/10 flex items-center justify-center animate-[spin_80s_linear_infinite]" />
        {/* Micro-dot acting as an orbiting satellite */}
        <div className="absolute w-1.5 h-1.5 bg-[#FF5C00]/40 rounded-full top-[15%] left-[15%] blur-[1px]" />
      </motion.div>

      {/* Abstract Shape 3: Deep sunset Cyberpunk pill shape with heavy blur */}
      <motion.div
        className="absolute bottom-[15%] right-[5%] w-[450px] h-[150px] rounded-full bg-gradient-to-r from-[#FF5C00]/10 via-[#FF2E00]/5 to-transparent blur-[80px] pointer-events-none origin-center"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -30, 0],
          rotate: [-15, 5, -25, -15],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Content Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Massive Typography & Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-2.5 mb-6"
          >
            <span className="w-2 h-2 bg-[#FF5C00] rounded-full animate-ping" />
            <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">SHAH MAKHDUM</span>
            <span className="text-white/20 text-xs">|</span>
            <span className="font-mono text-[10px] text-[#8A8A8A] tracking-wider uppercase">BASED IN BANGLADESH</span>
          </motion.div>

          {/* Big Editorial Headline */}
          <motion.div 
            style={{ y: textY, scale: textScale, opacity: textOpacity }}
            className="mb-8"
          >
            <motion.h1 
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="font-display font-black text-[12vw] sm:text-[8vw] lg:text-[5.5vw] leading-[1.0] text-white tracking-tight uppercase flex flex-col"
              style={{ perspective: 1000 }}
            >
              <span className="block overflow-hidden py-1">
                <motion.span 
                  variants={wordVariants} 
                  className="block origin-left"
                >
                  BUILDING
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span 
                  variants={wordVariants} 
                  className="block text-stroke text-stroke-hover origin-left"
                >
                  INTELLIGENT
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span 
                  variants={wordVariants} 
                  className="block text-[#FF5C00] flex items-center gap-2 origin-left"
                >
                  SYSTEMS
                  <span className="w-4 h-4 md:w-8 md:h-8 bg-[#FF5C00] rounded-full inline-block animate-pulse align-middle" />
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Role Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-[#FF5C00] to-transparent" />
            <span className="font-mono text-[10px] md:text-xs text-[#8A8A8A] font-semibold tracking-[0.3em] uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 items-center mb-12"
          >
            <button
              onClick={handleScrollToWork}
              className="px-6 py-3.5 rounded-full bg-[#FF5C00] hover:bg-[#FF8A1D] text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#FF5C00]/20 flex items-center gap-2 group cursor-pointer"
            >
              <span>View Work</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: elementPosition - 100, behavior: 'smooth' });
                }
              }}
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span>Let&apos;s Build</span>
              <span className="w-1.5 h-1.5 bg-[#FFD66B] rounded-full animate-ping" />
            </a>
            
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              title="Resume Placeholder"
            >
              <FileText className="w-4 h-4 text-[#FF5C00]" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center space-x-6"
          >
            <a 
              href="https://github.com/cyphex-0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8A8A8A] hover:text-[#FF5C00] transition-colors flex items-center space-x-2 text-xs font-mono tracking-wider"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <span className="text-white/10 text-xs">/</span>
            <a 
              href="https://www.linkedin.com/in/shahmakhdum/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8A8A8A] hover:text-[#FF5C00] transition-colors flex items-center space-x-2 text-xs font-mono tracking-wider"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image inside a cinematic lighting frame */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 relative">
          
          {/* Complex backdrop warm glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full sunset-glow-strong opacity-45 blur-2xl pointer-events-none" />

          {/* Portrait Container */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 sm:w-80 lg:w-full max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/80"
          >
            {/* Subtle glow rim lighting border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#FF5C00]/20 rounded-2xl pointer-events-none transition-all duration-700 z-30" />
            
            {/* Warm Sunset/Cyberpunk Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#FF5C00]/5 to-transparent mix-blend-color-dodge opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-80" />
            
            {/* Noise texture specifically inside frame */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,92,0,0.1),transparent_50%)] z-10" />

            <div className="w-full h-full relative z-0 scale-100 transition-all duration-1000 group-hover:scale-105">
              <Image
                src={profilePic}
                alt="Shah Makhdum"
                fill
                placeholder="blur"
                priority
                className="object-cover filter grayscale contrast-110 brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Bottom floating details card inside image */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 flex justify-between items-center transition-all duration-500 group-hover:bg-[#0F1115]/85 group-hover:border-[#FF5C00]/30">
              <div>
                <span className="block text-white font-display text-xs font-bold tracking-wider">SHAH MAKHDUM</span>
                <span className="block text-[9px] text-[#8A8A8A] uppercase tracking-widest font-mono">SYS_AI_ARCHITECT</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
                <span className="text-[8px] text-[#FF5C00] font-mono tracking-widest font-bold">100% DISCIPLINE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 pointer-events-none"
      >
        <span className="font-mono text-[9px] text-[#8A8A8A] tracking-[0.3em] uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#FF5C00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
