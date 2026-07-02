'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, Code, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tech: string[];
  description: string;
  challenges: string;
  improvements: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 'folder-organizer',
      title: 'FOLDER ORGANIZER',
      subtitle: 'Automated File Sorting Engine',
      category: 'DESKTOP APPLICATION / AUTOMATION',
      image: '/project-1.png',
      demoUrl: '#',
      githubUrl: 'https://github.com/cyphex-0/Folder-Organizer.git',
      tech: ['Electron', 'React 19', 'Vite', 'Node.js', 'Chokidar', 'Lucide React'],
      description: 'A smart, automated folder organizer desktop application that monitors specified directories and automatically sorts incoming files into designated folders based on configurable rules. It runs entirely offline and features custom sorting presets, undo capabilities, and conflict resolution.',
      challenges: 'Handling file locks and race conditions when multiple files were being moved simultaneously across the file system using chokidar. Designed a robust queueing system inside the core backend monitor to safely process and manage file operations without data loss.',
      improvements: 'Implement AI-based file categorization using a local LLM to sort files by semantic content rather than just file extensions.'
    },
    {
      id: 'krypton-sql',
      title: 'KRYPTON DB VISUALIZER (DEMO PROJECT)',
      subtitle: 'High-Throughput Relational Query Engine',
      category: 'BACKEND / SYSTEMS',
      image: 'https://picsum.photos/seed/kryptonsql/1200/800',
      demoUrl: '#',
      githubUrl: 'https://github.com/cyphex-0',
      tech: ['TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'Docker'],
      description: 'Krypton is a lightning-fast, secure database visualizer and schema inspector designed for cloud SQL instances. It scans relational databases, maps tables and constraints in real-time, and provides an interactive playground for DQL/DML queries with built-in speed analytics. All credentials are encrypted end-to-end and stored in a secure local vault.',
      challenges: 'Visualizing ultra-complex database schemas with hundreds of foreign key relations caused major performance degradation on client browsers. I solved this by implementing a canvas-based spatial chunking algorithm that only renders elements in the active viewport, decreasing DOM node overhead by 80%.',
      improvements: 'Add automatic SQL query optimization suggestions powered by Gemini models, helping developers automatically identify missing table indexes or unoptimized nested subqueries.'
    },
    {
      id: 'solaris-ui',
      title: 'SOLARIS IMMERSIVE CORE (DEMO PROJECT)',
      subtitle: 'Luxury Motion and Interface Library',
      category: 'FRONTEND ARCHITECTURE',
      image: 'https://picsum.photos/seed/solaris/1200/800',
      demoUrl: '#',
      githubUrl: 'https://github.com/cyphex-0',
      tech: ['React 19', 'Framer Motion', 'Tailwind CSS v4', 'GSAP', 'Next.js App Router'],
      description: 'Solaris is a highly curated, premium UI library designed for creative developers building luxury portfolios and agency websites. It focuses heavily on high-end desktop fluid interactions, magnetic cursor tracking, asymmetrical editorial bento grids, and scroll-bound text transformations. All code blocks are highly reusable, lightweight, and compile cleanly without bloating bundle sizes.',
      challenges: 'Synchronizing scroll indicators across multiple layers of parallax frames was difficult, often leading to visual jittering on mobile browsers. I engineered a custom hook to debounce scroll events, binding them to hardware-accelerated CSS transforms rather than triggers that force layout repaints.',
      improvements: 'Support direct theme compilations inside the CLI, enabling developers to export specific micro-animations directly into custom theme systems in one terminal line.'
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative min-h-screen bg-[#0F1115] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-white/5"
    >
      {/* Background glow filters */}
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] sunset-glow opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vw] sunset-glow opacity-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2.5 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
              <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">04 / CREATIONS</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-white tracking-tight uppercase"
            >
              CRAFTED LABS & <br />
              <span className="text-stroke text-stroke-hover">REPRESENTATIVE</span> WORK
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs text-[#8A8A8A] uppercase tracking-[0.2em] font-mono"
          >
            SELECT_PROJECTS_DB // REVISION_2026
          </motion.p>
        </div>

        {/* Project Behance Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/20 border border-white/5 hover:border-[#FF5C00]/30 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-cursor="project"
            >
              {/* Card Hover Ambient Light */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Large Image Showcase (Left) */}
              <div 
                className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-2xl relative border border-white/5 shadow-inner cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Glow overlay on hover */}
                <div className="absolute inset-0 bg-[#FF5C00]/5 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Text Description (Right) */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2 pl-2">
                <div>
                  {/* Category Tag */}
                  <span className="block font-mono text-[9px] text-[#FF5C00] font-bold tracking-[0.25em] uppercase mb-3">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-wide uppercase mb-1.5 transition-colors group-hover:text-[#FF8A1D]">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <span className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-6">
                    {project.subtitle}
                  </span>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[9px] text-[#8A8A8A] tracking-wider uppercase">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[9px] text-[#FF5C00] tracking-wider uppercase">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details button */}
                <div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FF5C00] text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 border border-white/8 group-hover:border-transparent flex items-center gap-2 group cursor-pointer"
                  >
                    <span>View More / Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5C00] group-hover:text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Dynamic Project Details Page (Overlay Drawer) */}
      <AnimatePresence>
        {selectedProject && (
            <motion.div 
              id="project-detail-drawer"
              className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Ambient Background sunset filter */}
              <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] sunset-glow opacity-30 pointer-events-none" />

              {/* Content panel */}
              <motion.div
                data-lenis-prevent
                className="absolute inset-0 w-full bg-[#0F1115] h-[100dvh] overflow-y-auto overscroll-y-contain block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="max-w-6xl mx-auto p-8 md:p-12 lg:p-16 relative">
                  {/* Sticky Close Button */}
                  <div className="absolute top-6 right-6 md:top-12 md:right-12 z-30">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-3 bg-black/60 hover:bg-[#FF5C00]/20 border border-white/10 hover:border-[#FF5C00]/40 rounded-full text-white transition-all duration-300 cursor-pointer"
                      aria-label="Close details"
                    >
                      <X className="w-5 h-5 text-white hover:text-[#FF5C00] transition-colors" />
                    </button>
                  </div>

                  {/* Content Body */}
                  <div className="space-y-12">
                {/* Meta Category and Subtitle */}
                <div>
                  <span className="inline-block font-mono text-[9px] text-[#FF5C00] font-bold tracking-[0.25em] uppercase mb-4 bg-[#FF5C00]/5 px-2.5 py-1 rounded border border-[#FF5C00]/10">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight">
                    {selectedProject.title}
                  </h3>
                  <span className="block text-sm font-semibold text-[#8A8A8A] uppercase tracking-widest mt-2">
                    {selectedProject.subtitle}
                  </span>
                </div>

                {/* Hero Image inside page */}
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40 z-10 pointer-events-none" />
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover filter contrast-105"
                  />
                </div>

                {/* Grid Split Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                  {/* Left Column: Tech Stack & Actions */}
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <span className="block font-display font-bold text-xs text-white uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span>TECH STACK</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-white/80 tracking-wider uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-3">
                      <a
                        href={selectedProject.demoUrl}
                        onClick={(e) => {
                          if (selectedProject.demoUrl === '#') e.preventDefault();
                        }}
                        className="w-full py-3.5 rounded-xl bg-[#FF5C00] hover:bg-[#FF8A1D] text-white font-display text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#FF5C00]/10 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE PROJECT LINK</span>
                      </a>
                      
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 text-white font-display text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span>GITHUB REPO (CLIENT)</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Descriptions & Challenges */}
                  <div className="lg:col-span-8 space-y-8">
                    <div>
                      <h4 className="font-display font-bold text-xs text-[#FF5C00] uppercase tracking-[0.25em] mb-3">
                        01 // BRIEF DESCRIPTION
                      </h4>
                      <p className="text-sm text-[#8A8A8A] leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="font-display font-bold text-xs text-[#FF5C00] uppercase tracking-[0.25em] mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span>02 // CHALLENGES FACED</span>
                      </h4>
                      <p className="text-sm text-[#8A8A8A] leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="font-display font-bold text-xs text-[#FF5C00] uppercase tracking-[0.25em] mb-3 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span>03 // POTENTIAL IMPROVEMENTS</span>
                      </h4>
                      <p className="text-sm text-[#8A8A8A] leading-relaxed">
                        {selectedProject.improvements}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom detail copyright */}
              <div className="pt-16 mt-8 border-t border-white/5 flex justify-start items-center text-[9px] font-mono text-[#8A8A8A] uppercase tracking-wider">
                <span>PROJECT ID: {selectedProject.id}</span>
              </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
