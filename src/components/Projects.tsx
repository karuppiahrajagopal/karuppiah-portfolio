/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Calendar, Target, ChevronRight, X, ExternalLink, Database, Activity, BarChart2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'data-science':
        return <Database size={15} className="text-white/60" />;
      case 'predictive-analytics':
        return <Activity size={15} className="text-white/60" />;
      case 'dashboards':
        return <BarChart2 size={15} className="text-white/60" />;
      default:
        return <FolderGit2 size={15} className="text-white/60" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    return 'bg-white/5 text-white border-white/10';
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-white/10 text-white relative">
      {/* Dynamic blurred backdrop nodes in section */}
      <div className="absolute top-[30%] left-[80%] w-72 h-72 rounded-full bg-neutral-900/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" id="projects-section-header">
          <div className="max-w-xl text-left">
            <h2 className="font-mono text-xs font-bold text-white/40 tracking-[0.25em] uppercase mb-3">
              Hands-on Works
            </h2>
            <h3 className="font-serif font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug">
              Explaining Logic Behind Data
            </h3>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              Applying predictive algorithms and visualization tools to discover trends and address issues in diverse domains from academic analytics to historical ship survivability.
            </p>
          </div>
          <span className="font-mono text-[10px] text-white/40 mt-4 md:mt-0 tracking-[0.1em] uppercase">
            Total Projects: {PROJECTS.length}
          </span>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-cards-grid">
          {PROJECTS.map((project: Project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-3xl bg-white/3 border border-white/5 p-6 shadow-xs hover:bg-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Header Info */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${getCategoryTheme(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    <span>{project.category.replace('-', ' ')}</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/40 flex items-center gap-1">
                    <Calendar size={11} />
                    {project.duration}
                  </span>
                </div>

                {/* Card Title & Copy */}
                <h4 className="font-serif font-light text-xl text-white group-hover:text-white transition-colors mb-2 tracking-tight text-left">
                  {project.title}
                </h4>
                <p className="text-[11px] text-white/40 font-serif mb-4 leading-relaxed italic text-left">
                  "{project.tagline}"
                </p>
                <p className="text-xs text-white/50 line-clamp-3 leading-relaxed mb-6 text-left">
                  {project.description}
                </p>

                {/* Mini Stats list */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 bg-white/2 p-2.5 rounded-xl border border-white/5 mb-6">
                    {project.stats.map((st) => (
                      <div key={st.label} className="text-center">
                        <p className="text-[8px] font-mono font-medium text-white/40 uppercase tracking-wider block">
                          {st.label}
                        </p>
                        <p className="font-serif text-sm font-light text-white mt-1">
                          {st.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom footer bar of card */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-white/60 border border-white/5">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span key="more" className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-white/60 border border-white/5">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Learn more btn trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`learn-more-${project.id}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/80 hover:text-white tracking-[0.1em] uppercase transition-colors cursor-pointer"
                >
                  Details <ChevronRight size={13} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Detailed Info Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
              id="projects-modal-backdrop"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-[#0e0e0e] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-white/10 relative text-left"
                onClick={(e) => e.stopPropagation()}
                id="projects-detail-modal"
              >
                {/* Modal Header Visual Background */}
                <div className="bg-white/2 p-8 border-b border-white/5 block relative">
                  {/* Close btn card option */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    id="close-modal-btn"
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all cursor-pointer"
                  >
                    <X size={16} />
                  </button>

                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-widest mb-4 ${getCategoryTheme(selectedProject.category)}`}>
                    {getCategoryIcon(selectedProject.category)}
                    <span>{selectedProject.category.replace('-', ' ')}</span>
                  </div>

                  <h3 className="font-serif font-light text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-[10px] text-white/40 mt-2 flex items-center gap-1.5 uppercase tracking-wide">
                    <Calendar size={13} />
                    Duration: {selectedProject.duration}
                  </p>
                </div>

                {/* Modal Content Scrollable Area */}
                <div className="p-8 max-h-[60vh] overflow-y-auto">
                  
                  {/* Summary/Description */}
                  <div className="mb-8">
                    <h5 className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">
                      Overview & Intent
                    </h5>
                    <p className="text-sm text-white/60 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Quantitative Stats Grid */}
                  {selectedProject.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-8 bg-white/2 p-4 rounded-2xl border border-white/5">
                      {selectedProject.stats.map((st) => (
                        <div key={st.label} className="text-center">
                          <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                            {st.label}
                          </p>
                          <p className="font-serif text-lg font-light text-white mt-1">
                            {st.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights/Bullets */}
                  <div className="mb-8">
                    <h5 className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                      Technical Highlights
                    </h5>
                    <ul className="space-y-3.5">
                      {selectedProject.highlights.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Target size={11} className="stroke-[2.5]" />
                          </span>
                          <span className="text-sm text-white/60 leading-normal font-sans">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Applied */}
                  <div>
                    <h5 className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">
                      Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((technology) => (
                        <span 
                          key={technology} 
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 font-mono text-xs font-medium"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Modal Footer Controls */}
                <div className="p-6 bg-white/1 border-t border-white/5 flex justify-end gap-3 items-center">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="https://github.com/karuppiah-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-bold tracking-[0.1em] uppercase transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    GitHub Repository <ExternalLink size={13} />
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
