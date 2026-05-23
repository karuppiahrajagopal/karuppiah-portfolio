/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Clock, Trash2, MailOpen, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  // Inbox states
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  
  // Form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  
  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'send' | 'inbox'>('send');

  // Load simulated messages cached in browser
  useEffect(() => {
    const cached = localStorage.getItem('karuppiah_portfolio_messages');
    if (cached) {
      try {
        setMessages(JSON.parse(cached));
      } catch (e) {
        setMessages([]);
      }
    } else {
      // Setup mock message from a recruiter to show off the system immediately
      const defaultMock: ContactMessage[] = [
        {
          id: 'mock-1',
          name: 'Sarah Jenkins (Recruiter)',
          email: 'sarah.j@analyticsgroup.org',
          subject: 'Data Science Intern Opening',
          message: 'Hi Karuppiah! I noticed your predictive analytics student modeling projects. Your B.Tech track fits our summer 2026 internship specifications. Submit your official transcripts!',
          timestamp: new Date(Date.now() - 3600000 * 2).toLocaleString(),
          isRead: false
        }
      ];
      localStorage.setItem('karuppiah_portfolio_messages', JSON.stringify(defaultMock));
      setMessages(defaultMock);
    }
  }, []);

  // Save messages helper
  const saveMessages = (updated: ContactMessage[]) => {
    setMessages(updated);
    localStorage.setItem('karuppiah_portfolio_messages', JSON.stringify(updated));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);

    // Simulate short network latency to make interaction feel authentic
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: formName,
        email: formEmail,
        subject: formSubject || 'General Inquiry',
        message: formMessage,
        timestamp: new Date().toLocaleString(),
        isRead: false
      };

      const updated = [newMessage, ...messages];
      saveMessages(updated);

      // Reset form fields
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Auto-switch to inbox after 2.5 seconds to show them the message appeared!
      setTimeout(() => {
        setSubmitSuccess(false);
        setActiveTab('inbox');
      }, 2500);

    }, 800);
  };

  const deleteMessage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = messages.filter((msg) => msg.id !== id);
    saveMessages(filtered);
  };

  const toggleReadStatus = (id: string) => {
    const updated = messages.map((msg) => {
      if (msg.id === id) {
        return { ...msg, isRead: !msg.isRead };
      }
      return msg;
    });
    saveMessages(updated);
  };

  const unreadCount = messages.filter((msg) => !msg.isRead).length;

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/10 relative text-white">
      
      {/* Decorative Orbs */}
      <div className="absolute bottom-[-100px] right-[20%] w-[350px] h-[350px] rounded-full bg-neutral-900/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-section-header">
          <h2 className="font-mono text-xs font-bold text-white/40 tracking-[0.25em] uppercase mb-3">
            Inquiries
          </h2>
          <h3 className="font-serif font-light text-3xl sm:text-4xl text-white tracking-tight leading-snug">
            Get In Touch
          </h3>
          <p className="text-sm text-white/50 mt-4 leading-relaxed">
            Collaborate on data-science pipelines, academic internships, or ML integrations. Leave a simulated dashboard message or email me directly.
          </p>
        </div>

        {/* Contact Info & Interactive Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start" id="contact-content-grid">
          
          {/* Column A: Contact Details Cards (4 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="contact-details-col text-left">
            
            <h4 className="font-serif font-light text-white text-lg mb-2 text-left">
              Primary Channels
            </h4>

            {/* Email Card clickable */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="contact-email-card"
              className="p-5 bg-white/3 border border-white/5 rounded-2xl flex items-start gap-4 hover:border-white/15 hover:bg-white/5 transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={16} />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-semibold leading-none">
                  Write Me At
                </p>
                <p className="font-sans text-sm font-semibold text-white/90 group-hover:text-white transition-colors mt-2 break-all">
                  {PERSONAL_INFO.email}
                </p>
                <p className="text-xs text-white/40 mt-1 font-sans">
                  Replies within 2 hours.
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              id="contact-phone-card"
              className="p-5 bg-white/3 border border-white/5 rounded-2xl flex items-start gap-4 hover:border-white/15 hover:bg-white/5 transition-all duration-300 group cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-semibold leading-none">
                  Call/WhatsApp
                </p>
                <p className="font-sans text-sm font-semibold text-white/90 mt-2">
                  {PERSONAL_INFO.phone}
                </p>
                <p className="text-xs text-white/40 mt-1 font-sans">
                  Direct mobile inquiries from hiring teams.
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div
              id="contact-loc-card"
              className="p-5 bg-white/3 border border-white/5 rounded-2xl flex items-start gap-4 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center shrink-0 border border-white/10">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-semibold leading-none">
                  Location Matrix
                </p>
                <p className="font-sans text-sm font-semibold text-white/90 mt-2">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-white/40 mt-1 font-sans">
                  Available for remote work or placements within India.
                </p>
              </div>
            </div>

          </div>

          {/* Column B: Interactive Dual-Tab Panel (7 Columns) */}
          <div className="lg:col-span-7 bg-[#0e0e0e] rounded-3xl border border-white/10 shadow-xs overflow-hidden text-left" id="contact-interactive-panel">
            
            {/* Interactive Panel Tab Bar */}
            <div className="flex border-b border-white/5 bg-white/2 p-2.5 gap-2" id="contact-tab-selector">
              <button
                onClick={() => setActiveTab('send')}
                id="contact-tab-btn-send"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all uppercase cursor-pointer ${
                  activeTab === 'send'
                    ? 'bg-white text-black font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Send size={13} />
                <span>Submit Message</span>
              </button>
              
              <button
                onClick={() => setActiveTab('inbox')}
                id="contact-tab-btn-inbox"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all uppercase relative cursor-pointer ${
                  activeTab === 'inbox'
                    ? 'bg-white text-black font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <MessageSquare size={13} />
                <span>Simulated Inbox</span>
                {unreadCount > 0 && (
                  <span className="absolute right-4 bg-white text-black font-mono text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>

            {/* Panel Body: Mode Switch */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                
                {/* MODE A: Submit Message Form */}
                {activeTab === 'send' && (
                  <motion.div
                    key="send-form-wrapper"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    id="message-send-form-mode"
                  >
                    {submitSuccess ? (
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-12"
                        id="form-success-banner"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                          <CheckCircle size={28} className="stroke-[2.5]" />
                        </div>
                        <h4 className="font-serif font-light text-white text-xl tracking-tight mb-2">
                          Message Sent & Logged!
                        </h4>
                        <p className="text-sm text-white/50 max-w-md mx-auto mb-6 leading-relaxed">
                          Your response has been saved locally. Switching to the **Simulated Inbox** viewer now to witness the deliverable.
                        </p>
                        <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest animate-pulse">
                          Auto-routing client logs...
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-5" id="portfolio-form text-left">
                        
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="text-left">
                            <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                              Your Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formName}
                              onChange={(e) => setFormName(e.target.value)}
                              placeholder="e.g. Rachel Roy"
                              id="input-form-name"
                              className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 bg-white/3 hover:bg-white/5 transition-all font-sans text-sm text-white"
                            />
                          </div>

                          <div className="text-left">
                            <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                              Your Email <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formEmail}
                              onChange={(e) => setFormEmail(e.target.value)}
                              placeholder="rachel@company.com"
                              id="input-form-email"
                              className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 bg-white/3 hover:bg-white/5 transition-all font-sans text-sm text-white"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="text-left">
                          <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                            Message Subject
                          </label>
                          <input
                            type="text"
                            value={formSubject}
                            onChange={(e) => setFormSubject(e.target.value)}
                            placeholder="Data science internship inquiries"
                            id="input-form-subject"
                            className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 bg-white/3 hover:bg-white/5 transition-all font-sans text-sm text-white"
                          />
                        </div>

                        {/* Text Message */}
                        <div className="text-left">
                          <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                            Message Body <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.target.value)}
                            placeholder="How can we help clean and analyze data together?"
                            id="input-form-body"
                            className="w-full px-4 py-3 rounded-xl border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20 bg-white/3 hover:bg-white/5 transition-all font-sans text-sm text-white"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          id="submit-form-button"
                          className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-bold tracking-[0.15em] uppercase transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                              <span>Delivering metrics...</span>
                            </>
                          ) : (
                            <>
                              <Send size={14} />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>

                      </form>
                    )}
                  </motion.div>
                )}

                {/* MODE B: Simulated Local Inbox Previewer */}
                {activeTab === 'inbox' && (
                  <motion.div
                    key="inbox-list-wrapper"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    id="simulated-inbox-preview-mode"
                  >
                    
                    {/* Inbox Header Controls */}
                    <div className="flex justify-between items-center bg-white/3 px-4 py-3 border border-white/5 rounded-2xl mb-6 text-left">
                      <span className="font-mono text-[9px] text-white/60 font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                        <Terminal size={14} className="text-white/40" />
                        Local Cache Database
                      </span>
                      <button
                        onClick={() => {
                          const conf = window.confirm('Clear all local demo messages?');
                          if (conf) saveMessages([]);
                        }}
                        id="clear-inbox-btn"
                        className="text-[9px] text-white/40 hover:text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        title="Reset clean cache"
                      >
                        Wipe Cache
                      </button>
                    </div>

                    {messages.length === 0 ? (
                      <div className="text-center py-16" id="empty-inbox-placeholder">
                        <MessageSquare className="text-white/20 mx-auto mb-4" size={32} />
                        <h5 className="font-serif font-light text-white text-sm">
                          Simulated Cache Database Empty
                        </h5>
                        <p className="text-xs text-white/45 max-w-xs mx-auto mt-2 leading-relaxed font-sans">
                          No messages saved. Switch to the **Submit Message** tab to write a live request and test the system!
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1 text-left" id="inbox-rows-container">
                        {messages.map((msg: ContactMessage) => (
                          <div
                            key={msg.id}
                            onClick={() => toggleReadStatus(msg.id)}
                            id={`inbox-msg-${msg.id}`}
                            className={`p-4 rounded-2xl text-left border cursor-pointer transition-all ${
                              msg.isRead 
                                ? 'bg-white/2 border-white/5 opacity-70' 
                                : 'bg-white/5 border-white/15'
                            }`}
                          >
                            <div className="flex justify-between items-start gap-4 mb-2">
                              <div>
                                <h5 className="font-serif font-light text-white text-sm flex items-center gap-2">
                                  {msg.name}
                                  {!msg.isRead && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-white block shrink-0" title="Unread Response" />
                                  )}
                                </h5>
                                <span className="text-[10px] font-mono text-white/40 block break-all mt-0.5">
                                  {msg.email}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[9px] text-white/45 flex items-center gap-1">
                                  <Clock size={10} />
                                  {msg.timestamp.split(',')[1] || msg.timestamp}
                                </span>
                                <button
                                  onClick={(e) => deleteMessage(msg.id, e)}
                                  id={`delete-msg-btn-${msg.id}`}
                                  className="p-1 rounded-md text-white/40 hover:text-white transition-colors cursor-pointer"
                                  title="Delete cached msg"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>

                            <p className="text-[10px] font-mono font-semibold text-white/60 uppercase tracking-widest mb-2 mt-2">
                              Sub: {msg.subject}
                            </p>
                            <p className="text-xs text-white/50 italic leading-relaxed whitespace-pre-wrap pl-3 border-l border-white/10 font-sans text-left">
                              "{msg.message}"
                            </p>

                            <div className="mt-3 text-right">
                              <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center justify-end gap-1 select-none">
                                <MailOpen size={10} />
                                Click to mark unread
                              </span>
                            </div>

                          </div>
                        ))}
                      </div>
                    )}

                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Simulated Database footer disclaimer */}
            <div className="bg-white/2 border-t border-white/5 p-4 shrink-0 flex items-center gap-2">
              <Sparkles className="text-white/40 shrink-0" size={15} />
              <p className="text-[10px] text-white/50 mt-0.5 leading-relaxed font-sans text-left">
                <strong>Local sandbox verification helper active</strong>: Messages stored here do not dispatch external network requests. They simulate local variables so you can safely audit delivery states.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
