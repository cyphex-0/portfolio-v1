'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Code, Server, Cpu, Wrench, Terminal } from 'lucide-react';
import type { SkillCategory } from '@/types/portfolio.types';

export interface SkillCategoryAccordionProps {
  category: SkillCategory;
  index: number;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

function renderCategoryIcon(iconType?: string) {
  switch (iconType) {
    case 'cpu':
      return <Cpu className="w-5 h-5 text-[#FF5C00]" />;
    case 'server':
      return <Server className="w-5 h-5 text-[#FF5C00]" />;
    case 'code':
      return <Code className="w-5 h-5 text-[#FF5C00]" />;
    case 'wrench':
      return <Wrench className="w-5 h-5 text-[#FF5C00]" />;
    default:
      return <Code className="w-5 h-5 text-[#FF5C00]" />;
  }
}

export function SkillCategoryAccordion({
  category,
  index,
  isExpanded,
  onToggle,
}: SkillCategoryAccordionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
        isExpanded
          ? 'bg-black/50 border-[#FF5C00]/30 shadow-xl shadow-black/40'
          : 'bg-black/10 border-white/5 hover:border-white/10 hover:bg-black/20'
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={() => onToggle(category.id)}
        className="w-full px-6 md:px-8 py-7 flex items-center justify-between text-left cursor-pointer select-none"
      >
        <div className="flex items-center space-x-6 md:space-x-8">
          {/* Index */}
          <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-widest block">
            {category.index}
          </span>

          {/* Icon & Title */}
          <div className="flex items-center space-x-4">
            {renderCategoryIcon(category.iconType)}
            <h3 className="font-display font-extrabold text-lg md:text-xl lg:text-2xl text-white tracking-wide uppercase">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Right side helper info */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline-block font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
            {isExpanded ? 'ACTIVE_INDEX' : 'COLLAPSED'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ChevronDown className={`w-5 h-5 ${isExpanded ? 'text-[#FF5C00]' : 'text-[#8A8A8A]'}`} />
          </motion.div>
        </div>
      </button>

      {/* Accordion Body Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
              {/* Summary description */}
              <p className="text-xs md:text-sm text-[#8A8A8A] leading-relaxed max-w-xl mb-8 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                <span>{category.summary}</span>
              </p>

              {/* List of Skills inside category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    {/* Name and percentage */}
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-display font-bold text-xs uppercase text-white/90 group-hover/skill:text-[#FF8A1D] transition-colors tracking-wide">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#FF5C00] font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Custom progress lines */}
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A1D] absolute top-0 left-0"
                      />
                    </div>

                    {/* Tech detailed description */}
                    <p className="text-[10px] text-[#8A8A8A] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SkillCategoryAccordion;
