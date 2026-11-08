'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/skills.data';
import { useSkillAccordion } from '../hooks/useSkillAccordion';
import { SkillCategoryAccordion } from './SkillCategoryAccordion';

export function Skills() {
  const { expandedId, toggleCategory } = useSkillAccordion();

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#0F1115] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden border-y border-white/5"
    >
      {/* Background neon rim overlay */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] sunset-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] sunset-glow opacity-10 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
            <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">
              02 / CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-white tracking-tight uppercase"
          >
            ENGINEERING <br />
            <span className="text-stroke text-stroke-hover">CAPABILITIES</span>
          </motion.h2>
        </div>

        {/* Accordion Categories Container */}
        <div className="space-y-4">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <SkillCategoryAccordion
              key={category.id}
              category={category}
              index={catIndex}
              isExpanded={expandedId === category.id}
              onToggle={toggleCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
