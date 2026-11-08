'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/types/project.types';

export interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/20 border border-white/5 hover:border-[#FF5C00]/30 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden cursor-pointer"
      onClick={() => onSelect(project)}
      data-cursor="project"
    >
      {/* Card Hover Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Large Image Showcase (Left) */}
      <div
        className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-2xl relative border border-white/5 shadow-inner cursor-pointer"
        onClick={() => onSelect(project)}
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
              <span
                key={t}
                className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[9px] text-[#8A8A8A] tracking-wider uppercase"
              >
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
            onClick={() => onSelect(project)}
            className="px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FF5C00] text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 border border-white/8 group-hover:border-transparent flex items-center gap-2 group cursor-pointer"
          >
            <span>View More / Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5C00] group-hover:text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
