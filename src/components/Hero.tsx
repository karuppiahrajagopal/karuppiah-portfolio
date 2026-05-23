/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Check, Copy, ArrowRight, Sparkles, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-neutral-900/40 blur-3xl -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] rounded-full bg-zinc-900/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Main Hero Copy - 7 Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
            id="hero-content-wrapper"
          >
            {/* Status Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
              id="hero-status-pill"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              <span className="text-[10px] font-bold text-white/80 font-mono tracking-[0.2em] uppercase">
                Active Seeking Interns • May 2026
              </span>
            </motion.div>

            {/* Display Headings with Georgia styled names */}
            <motion.h2
              variants={itemVariants}
              className="font-mono text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-3"
              id="hero-pretitle"
            >
              Portfolio / Data Analyst
            </motion.h2>

            <motion.h1
              variants={itemVariants}
              className="font-serif font-light text-6xl sm:text-7xl text-white tracking-tighter leading-[0.95] mb-6"
              id="hero-name"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.h3
              variants={itemVariants}
              className="font-serif italic text-xl sm:text-2xl text-white/70 tracking-wide font-normal mb-6 flex items-center gap-2"
              id="hero-title"
            >
              <Sparkles size={18} className="text-white/40" />
              {PERSONAL_INFO.title}
            </motion.h3>

            {/* Objective Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-white/50 tracking-wide leading-relaxed max-w-xl mb-8"
              id="hero-objective"
            >
              {PERSONAL_INFO.objective}
            </motion.p>

            {/* Micro Details (Pills) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
              id="hero-contact-rows"
            >
              {/* Location */}
              <div 
                id="hero-loc"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 font-medium font-sans"
              >
                <MapPin size={13} className="text-white/40" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Email Copier */}
              <button
                id="copy-email-btn"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-xs text-white/80 hover:text-white font-medium cursor-pointer transition-colors font-sans"
                title="Click to copy email address"
              >
                <Mail size={13} className="text-white/40" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedText === 'email' ? (
                  <Check size={12} className="text-green-400" />
                ) : (
                  <Copy size={12} className="text-white/40" />
                )}
              </button>

              {/* Phone Copier */}
              <button
                id="copy-phone-btn"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-xs text-white/80 hover:text-white font-medium cursor-pointer transition-colors font-sans"
                title="Click to copy phone number"
              >
                <Phone size={13} className="text-white/40" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedText === 'phone' ? (
                  <Check size={12} className="text-green-400" />
                ) : (
                  <Copy size={12} className="text-white/40" />
                )}
              </button>
            </motion.div>

            {/* Quick Links & Core Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
              id="hero-action-buttons"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                id="hero-view-work-btn"
                className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-[0.15em] uppercase transition-all cursor-pointer flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => window.print()}
                id="hero-download-resume-btn"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-[0.15em] uppercase border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center gap-2"
                title="Trigger browser print view for the CV"
              >
                <FileText size={14} className="text-white/50" />
                Print CV
              </button>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2.5 sm:ml-4" id="hero-socials">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer"
                  id="hero-linkedin-icon"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer"
                  id="hero-github-icon"
                  title="Visit GitHub Profile"
                >
                  <Github size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Canvas Artwork - 5 Columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
            id="hero-graphic-wrapper"
          >
            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-linear-to-br from-neutral-900 to-[#121212] border border-white/10 p-8 flex flex-col justify-between overflow-hidden group">
              {/* Abs grid inside card */}
              <div className="absolute inset-0 bg-radial from-transparent to-black/40 -z-10" />
              
              {/* Network Node Pattern Drawing */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <circle cx="20" cy="20" r="4" />
                  <circle cx="80" cy="30" r="3" />
                  <circle cx="50" cy="70" r="5" />
                  <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="1" />
                  <line x1="80" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="70" x2="20" y2="20" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Grid representation */}
              <div className="w-full h-full flex flex-col justify-between relative z-10 text-left">
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono font-medium text-white/60 flex items-center gap-1.5">
                    <Database size={11} className="text-white/40" />
                    <span>data_matrix.py</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">v1.2.4</span>
                </div>

                {/* Mathematical visual card middle */}
                <div className="my-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white mb-4">
                    <Sparkles size={20} className="text-white/80" />
                  </div>
                  <h4 className="font-serif font-light text-white text-xl mb-1 leading-snug">
                    AI & Analytics
                  </h4>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                    Sivagangai, TN
                  </p>
                </div>

                {/* Quick stats items */}
                <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 bg-white/2 p-3 rounded-2xl">
                  <div>
                    <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.1em] leading-none">
                      Graduation Target
                    </p>
                    <p className="font-serif text-lg font-light text-white mt-1">
                      2027
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.1em] leading-none font-sans">
                      Current Degree
                    </p>
                    <p className="font-serif text-xs font-light text-white truncate mt-1.5 italic">
                      B.Tech AI & DS
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
