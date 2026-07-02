'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Radio, Sparkles, Send } from 'lucide-react';

export default function EducationAndExperience() {
  const education = [
    {
      institution: "North Western University",
      degree: "B.Sc. in Computer Science & Engineering",
      period: "2024 — Expected 2028",
      details: "Rigorous focus on advanced algorithms, neural network design, spatial databases, and automated software architectures. Actively exploring research in agentic workflows."
    },
    {
      institution: "Govt BL College",
      degree: "Higher Secondary Certificate (HSC) — Science",
      period: "2020 — 2022",
      details: "Completed standard higher science curriculum centering theoretical mathematics, computational physics, and basic engineering algorithms."
    }
  ];

  return (
    <section 
      id="education-experience" 
      className="relative min-h-screen bg-[#050505] py-24 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background radial soft lightings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] sunset-glow opacity-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Editorial Title */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2.5 mb-4"
          >
            <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full" />
            <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">03 / TRACKS</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-6xl text-white tracking-tight uppercase"
          >
            ACADEMIA & <br />
            <span className="text-stroke text-stroke-hover">OPPORTUNITIES</span>
          </motion.h2>
        </div>

        {/* Two-Column split editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center space-x-4 mb-4">
              <GraduationCap className="w-5 h-5 text-[#FF5C00]" />
              <h3 className="font-display font-black text-xl text-white tracking-wider uppercase">
                EDUCATIONAL FOUNDATION
              </h3>
            </div>

            <div className="relative pl-6 border-l border-white/8 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline point indicator */}
                  <div className="absolute top-1.5 left-[-31px] w-2.5 h-2.5 bg-[#050505] border-2 border-white/25 rounded-full group-hover:border-[#FF5C00] group-hover:scale-125 transition-all duration-300" />

                  {/* Period Tag */}
                  <span className="block font-mono text-[10px] text-[#FF8A1D] font-bold tracking-widest uppercase mb-2">
                    {edu.period}
                  </span>

                  {/* Degree Name */}
                  <h4 className="font-display font-extrabold text-base md:text-lg text-white uppercase tracking-wide mb-1 group-hover:text-[#FF5C00] transition-colors">
                    {edu.degree}
                  </h4>

                  {/* Institution */}
                  <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                    {edu.institution}
                  </span>

                  {/* Details paragraph */}
                  <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-md">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: "Open for Opportunities" Luxury Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#0F1115] border border-white/5 rounded-2xl p-8 md:p-10 relative overflow-hidden group shadow-2xl shadow-black/50"
          >
            {/* Top-right subtle lighting flare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FF5C00]/10 to-transparent blur-xl pointer-events-none" />

            <div className="flex items-center space-x-3 mb-6 relative z-10">
              <Briefcase className="w-5 h-5 text-[#FF5C00]" />
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-white/50">
                EXPERIENCE PIPELINE
              </h3>
            </div>

            {/* Simulated active signal beacon */}
            <div className="flex items-center space-x-4 mb-8 bg-black/40 border border-white/5 p-4 rounded-xl relative z-10">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5C00]"></span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-[#8A8A8A] tracking-wider uppercase">SIGNAL_STATUS: RUNNING</span>
                <span className="block font-display font-extrabold text-sm text-white tracking-wide uppercase">OPEN FOR OPPORTUNITIES</span>
              </div>
            </div>

            {/* High-end invitation copy */}
            <div className="space-y-6 text-[#8A8A8A] text-xs md:text-sm leading-relaxed mb-8 relative z-10">
              <p>
                As a fast-growing Software & AI Engineer, I maintain a strict daily commitment to open-source contributions, technical write-ups, and architectural experimentation.
              </p>
              
              <p>
                I am actively seeking <span className="text-white font-medium">engineering internships, full-time positions, or deep collaborative technical assignments</span> where I can apply machine intelligence, build high-throughput backend services, or optimize customer-facing frontend delivery pipelines.
              </p>

              {/* Bullet indicators */}
              <ul className="space-y-3.5 pt-4 border-t border-white/5">
                <li className="flex items-start space-x-3 text-xs">
                  <span className="font-mono text-[#FF5C00] font-bold mt-0.5">&gt;</span>
                  <span><strong>AI Architecture:</strong> Building scalable pipelines combining models with custom systems.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs">
                  <span className="font-mono text-[#FF5C00] font-bold mt-0.5">&gt;</span>
                  <span><strong>Engineering Rigor:</strong> Robust, type-safe clean-coding in Next.js 15, React 19, and Postgres.</span>
                </li>
                <li className="flex items-start space-x-3 text-xs">
                  <span className="font-mono text-[#FF5C00] font-bold mt-0.5">&gt;</span>
                  <span><strong>Active Availability:</strong> Flexible timezone configurations ready to synchronize.</span>
                </li>
              </ul>
            </div>

            {/* Quick-action contact trigger */}
            <button
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: elementPosition - 100, behavior: 'smooth' });
                }
              }}
              className="w-full py-4 rounded-xl bg-white/5 hover:bg-[#FF5C00]/10 border border-white/8 hover:border-[#FF5C00]/30 text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#FF5C00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>TRANSMIT SIGNAL</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
