'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, Code, ShieldCheck, Cpu } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/types/project.types';

export interface ProjectDetailDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailDrawer({ project, onClose }: ProjectDetailDrawerProps) {
  return (
    <AnimatePresence>
      {project && (
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
                  onClick={onClose}
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
                    {project.category}
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight">
                    {project.title}
                  </h3>
                  <span className="block text-sm font-semibold text-[#8A8A8A] uppercase tracking-widest mt-2">
                    {project.subtitle}
                  </span>
                </div>

                {/* Hero Image inside page */}
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40 z-10 pointer-events-none" />
                  <Image
                    src={project.image}
                    alt={project.title}
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
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-white/80 tracking-wider uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-3">
                      <a
                        href={project.demoUrl}
                        onClick={(e) => {
                          if (project.demoUrl === '#') e.preventDefault();
                        }}
                        className="w-full py-3.5 rounded-xl bg-[#FF5C00] hover:bg-[#FF8A1D] text-white font-display text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#FF5C00]/10 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE PROJECT LINK</span>
                      </a>

                      <a
                        href={project.githubUrl}
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
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="font-display font-bold text-xs text-[#FF5C00] uppercase tracking-[0.25em] mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span>02 // CHALLENGES FACED</span>
                      </h4>
                      <p className="text-sm text-[#8A8A8A] leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="font-display font-bold text-xs text-[#FF5C00] uppercase tracking-[0.25em] mb-3 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span>03 // POTENTIAL IMPROVEMENTS</span>
                      </h4>
                      <p className="text-sm text-[#8A8A8A] leading-relaxed">
                        {project.improvements}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom detail copyright */}
              <div className="pt-16 mt-8 border-t border-white/5 flex justify-start items-center text-[9px] font-mono text-[#8A8A8A] uppercase tracking-wider">
                <span>PROJECT ID: {project.id}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailDrawer;
