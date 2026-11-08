'use client';

import React from 'react';
import { motion } from 'motion/react';
import type { EducationItem } from '@/types/portfolio.types';

export interface AboutTimelineProps {
  timeline: EducationItem[];
}

export function AboutTimeline({ timeline }: AboutTimelineProps) {
  return (
    <div className="space-y-12">
      {timeline.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group pl-6"
        >
          {/* Timeline point hover glowing ring */}
          <div className="absolute top-1.5 left-[-29px] w-3 h-3 rounded-full bg-[#050505] border border-[#8A8A8A] group-hover:border-[#FF5C00] group-hover:bg-[#FF5C00]/10 transition-all duration-300 z-10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#8A8A8A] group-hover:bg-[#FF5C00] rounded-full transition-colors" />
          </div>

          {/* Year Tag */}
          <span className="inline-block font-mono text-xs font-bold text-[#FF5C00] mb-2 tracking-widest bg-[#FF5C00]/5 px-2 py-0.5 rounded border border-[#FF5C00]/10">
            {item.year}
          </span>

          {/* Text details */}
          <h4 className="font-display font-extrabold text-base text-white tracking-wide uppercase mb-1.5 transition-colors group-hover:text-[#FF8A1D]">
            {item.title}
          </h4>
          <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-md">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutTimeline;
