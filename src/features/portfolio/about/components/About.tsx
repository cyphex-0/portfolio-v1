'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Coffee } from 'lucide-react';
import { ABOUT_DATA } from '../data/about.data';
import { AboutTimeline } from './AboutTimeline';

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#050505] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background glow and subtle grids */}
      <div className="absolute top-1/2 left-[-10%] w-[50vw] h-[50vw] sunset-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] sunset-glow opacity-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
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
              01 / ABOUT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase"
          >
            WHERE SOFTWARE <br />
            MEETS{' '}
            <span className="text-stroke text-stroke-hover">INTELLIGENCE</span>
          </motion.h2>
        </div>

        {/* Editorial Layout: Split Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Big Statement & Detailed Bio */}
          <div className="lg:col-span-6 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="font-display font-light text-2xl md:text-3xl lg:text-4xl leading-snug text-white/90"
            >
              {ABOUT_DATA.leadStatement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6 text-[#8A8A8A] text-sm md:text-base leading-relaxed"
            >
              {ABOUT_DATA.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High-End Interactive Timeline */}
          <div className="lg:col-span-6 relative pl-4 md:pl-8 border-l border-white/8 py-2">
            <span className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-[#FF5C00] z-10" />
            <span className="absolute bottom-0 left-[-4px] w-2 h-2 rounded-full bg-white/20 z-10" />

            <h3 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-white/50 mb-12">
              EDUCATIONAL QUALIFICATION
            </h3>

            <AboutTimeline timeline={ABOUT_DATA.timeline} />

            {/* Side Stories: Travel & Food */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-8 border-t border-white/10 relative"
            >
              {/* Section Marker Dot */}
              <span className="absolute top-[36px] left-[-20px] md:left-[-36px] w-2 h-2 rounded-full bg-[#FF5C00] z-10 shadow-[0_0_10px_rgba(255,92,0,0.5)]" />

              <h3 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-white/50 mb-8">
                OFFLINE PURSUITS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-white">
                    <Compass className="w-4 h-4 text-[#FF5C00]" />
                    <span className="font-display font-bold text-xs uppercase tracking-widest">
                      {ABOUT_DATA.offlinePursuits[0].title}
                    </span>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {ABOUT_DATA.offlinePursuits[0].description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-white">
                    <Coffee className="w-4 h-4 text-[#FF5C00]" />
                    <span className="font-display font-bold text-xs uppercase tracking-widest">
                      {ABOUT_DATA.offlinePursuits[1].title}
                    </span>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {ABOUT_DATA.offlinePursuits[1].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
