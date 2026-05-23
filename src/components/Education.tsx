/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Award, CheckCircle2, MapPin, Calendar, BookOpen } from 'lucide-react';
import { TIMELINE } from '../data';
import { TimelineNode } from '../types';

export default function Education() {
  const [activeNode, setActiveNode] = useState<string>('degree');

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={18} className="text-white" />;
      case 'role':
        return <Briefcase size={18} className="text-white" />;
      case 'achievement':
        return <Award size={18} className="text-white" />;
      default:
        return <BookOpen size={18} className="text-white" />;
    }
  };

  const getNodeBg = (type: string, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-white/20 ring-2 ring-white/10';
    } else {
      return 'bg-white/5 border border-white/10';
    }
  };

  return (
    <section id="education" className="py-24 bg-[#0a0a0a] border-t border-white/10 relative text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="education-section-header">
          <h2 className="font-mono text-xs font-bold text-white/40 tracking-[0.25em] uppercase mb-3">
            Academic Track
          </h2>
          <h3 className="font-serif font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug">
            Education & Milestones
          </h3>
          <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xl mx-auto">
            Tracing theoretical benchmarks and practical milestones supporting a specialized degree in Artificial Intelligence & Data Science.
          </p>
        </div>

        {/* Layout: Interactive Panel (Left Selection / Right Expanded Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch" id="education-interactive-layout text-left">
          
          {/* Timeline Nodes Selector Stream (7 Columns) */}
          <div className="lg:col-span-6 flex flex-col gap-6 relative" id="timeline-node-list">
            
            {/* Visual Timeline connector line */}
            <div className="absolute left-10 top-6 bottom-6 w-0.5 bg-white/10 hidden sm:block -z-10" />

            {TIMELINE.map((node: TimelineNode) => {
              const isSelected = activeNode === node.id;
              
              return (
                <motion.div
                  key={node.id}
                  whileHover={{ y: -2 }}
                  onClick={() => setActiveNode(node.id)}
                  id={`timeline-node-${node.id}`}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative flex flex-col sm:flex-row gap-4 items-start ${
                    isSelected 
                      ? 'bg-white/5 border-white/20' 
                      : 'bg-white/2 border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Selector Icon Box representation */}
                  <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-all ${getNodeBg(node.type, isSelected)}`} id={`icon-box-${node.id}`}>
                    {getNodeIcon(node.type)}
                  </div>

                  {/* High Level Node Text */}
                  <div className="flex-1 w-full text-left">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1.5">
                      <span className="font-mono text-[10px] text-white/40 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <Calendar size={11} />
                        {node.period}
                      </span>
                      <span className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-0.5 rounded-full capitalize">
                        {node.type}
                      </span>
                    </div>

                    <h4 className="font-serif font-light text-white text-lg leading-tight transition-colors">
                      {node.title}
                    </h4>
                    <p className="text-xs text-white/40 font-medium font-mono mt-1">
                      {node.subtitle}
                    </p>
                    <p className="text-xs text-white/40 font-medium mt-1 uppercase tracking-tight">
                      {node.institution}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline Expanded Detailed Reader View (5 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between" id="timeline-detail-panel">
            <AnimatePresence mode="wait">
              {TIMELINE.map((node: TimelineNode) => {
                if (node.id !== activeNode) return null;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-white/3 border border-white/10 p-8 rounded-3xl flex flex-col justify-between text-left"
                    id={`timeline-detail-${node.id}`}
                  >
                    <div>
                      {/* Detailed Panel Header */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          {getNodeIcon(node.type)}
                        </div>
                        <h4 className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest">
                          Academic Context
                        </h4>
                      </div>

                      {/* Primary Text Content */}
                      <h3 className="font-serif font-light text-xl text-white tracking-tight leading-snug mb-1">
                        {node.title}
                      </h3>
                      <p className="font-mono text-xs text-white/60 font-semibold mb-2">
                        {node.subtitle}
                      </p>
                      <p className="text-xs text-white/40 font-semibold uppercase mb-4 flex items-center gap-1">
                        <MapPin size={12} className="text-white/40" />
                        {node.institution}
                      </p>

                      <p className="text-sm text-white/50 leading-relaxed mb-6 border-l-2 border-white/20 pl-4 py-1 italic font-sans text-left">
                        {node.description}
                      </p>

                      {/* Highlight bullet lists representing course outcomes */}
                      <div className="space-y-4 text-left">
                        <h5 className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest block">
                          Core Milestones & Focus Areas
                        </h5>
                        <ul className="space-y-3">
                          {node.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 size={13} className="text-white/80 shrink-0 mt-0.5" />
                              <span className="text-xs text-white/50 leading-normal font-sans">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Educational Tip/Highlight banner */}
                    <div className="mt-8 bg-white/2 border border-white/5 p-4 rounded-2xl flex items-center gap-3 text-left">
                      <GraduationCap className="text-white/40 flex-shrink-0" size={24} />
                      <p className="text-[11px] text-white/55 font-sans leading-relaxed">
                        Expected graduation targets May 2027 under rigorous AI/ML and Statistical modules at Dhanalakshmi Srinivasan Engineering College.
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
