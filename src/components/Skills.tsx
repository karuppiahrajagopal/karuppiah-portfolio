/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Brain, BarChart3, Wrench, Sparkles, SlidersHorizontal } from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: SlidersHorizontal },
    { id: 'languages', label: 'Languages', icon: Brain },
    { id: 'ml', label: 'Data Science & ML', icon: Award },
    { id: 'visualization', label: 'Data Vis', icon: BarChart3 },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'soft', label: 'Soft Skills', icon: Sparkles },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="skills-section-header">
          <h2 className="font-mono text-xs font-bold text-white/40 tracking-[0.25em] uppercase mb-3">
            Core Competencies
          </h2>
          <h3 className="font-serif font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug">
            Technical Arsenal
          </h3>
          <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xl mx-auto">
            A comprehensive overview of programming frameworks, modeling tools, and engineering workflows calibrated for modern data analysis and AI research.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div 
          className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-white/5 p-2 rounded-2xl border border-white/10 max-w-4xl mx-auto"
          id="skills-tabs-container"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`skill-tab-${cat.id}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-[0.05em] uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'text-black bg-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Icon size={13} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Display of Skills */}
        <div id="skills-grid-wrapper">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill: Skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-5 rounded-2xl bg-white/3 hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Skill and Percentage */}
                    <div className="flex items-center justify-between mb-2 text-left">
                      <h4 className="font-sans font-medium text-white transition-colors group-hover:text-white">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-[10px] font-semibold text-white/60 bg-white/5 px-2 py-0.5 rounded-md group-hover:bg-white/10 group-hover:text-white transition-all">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Short usage description from our database */}
                    <p className="text-xs text-white/45 group-hover:text-white/65 mb-4 leading-relaxed font-sans text-left">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level percentage bar */}
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-linear-to-r from-neutral-600 to-white/80 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
