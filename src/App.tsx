/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { Sparkles, Terminal, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header overlap

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0a0a0a] font-sans antialiased text-neutral-200 selection:bg-white selection:text-black scroll-smooth">
      {/* Scrollable Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Hero / About section */}
      <Hero />

      {/* Skills Showcase Section */}
      <Skills />

      {/* Case Studies / Projects grid section */}
      <Projects />

      {/* Academic Milestones & Timeline Section */}
      <Education />

      {/* Get In Touch Panel */}
      <Contact />

      {/* Pristine Site Footer Section with declaration statement */}
      <footer id="portfolio-footer" className="bg-[#050505] text-white/40 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Branding Column - 5 Columns */}
            <div className="lg:col-span-5 text-left">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black text-xs font-bold font-mono">
                  K
                </span>
                <span className="font-serif font-light text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed max-w-sm mb-6 font-sans">
                Pre-final year B.Tech student specializing in Artificial Intelligence and Data Science. Engineering streamlined math calculations and descriptive visual workflows to solve problems.
              </p>
              
              {/* Copyright message */}
              <div className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em] mt-2">
                © {new Date().getFullYear()} Karuppiah R. All Rights Reserved.
              </div>
            </div>

            {/* Declaration & Affirmation statement – 7 Columns */}
            <div className="lg:col-span-7 bg-white/2 rounded-2xl p-6 border border-white/5 text-left" id="footer-declaration-card">
              <div className="flex items-center gap-2 mb-3.5">
                <CheckCircle2 size={14} className="text-white/80 shrink-0" />
                <h5 className="font-mono text-[9px] font-bold text-white/40 uppercase tracking-[0.15em]">
                  Official Affirmation
                </h5>
              </div>
              <p className="text-xs text-white/55 leading-relaxed italic mb-4 font-serif">
                "I hereby declare that all the information stated in this resume and portfolio is true to the best of my knowledge."
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-white/50" />
                  <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
                    SIVAGANGAI, TN, INDIA
                  </span>
                </div>
                <button
                  onClick={() => window.print()}
                  id="print-footer-btn"
                  className="font-mono text-[9px] text-white hover:text-white/80 font-bold uppercase tracking-[0.15em] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <FileText size={11} /> Print Resume Layout
                </button>
              </div>
            </div>

          </div>

          {/* Direct site-credit row */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-white/20 uppercase tracking-widest">
            <div>
              Designed with Georgia & Inter
            </div>
            <div>
              Portfolio Sandbox System v1.2.0 • Sivagangai
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
