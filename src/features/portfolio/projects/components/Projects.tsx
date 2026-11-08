'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/projects.data';
import { useProjectDialog } from '../hooks/useProjectDialog';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';

export function Projects() {
  const { selectedProject, openProject, closeProject } = useProjectDialog();

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
              <span className="font-mono text-xs text-[#FF5C00] font-bold tracking-[0.25em] uppercase">
                04 / CREATIONS
              </span>
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
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={openProject}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Project Details Page (Overlay Drawer) */}
      <ProjectDetailDrawer project={selectedProject} onClose={closeProject} />
    </section>
  );
}

export default Projects;
