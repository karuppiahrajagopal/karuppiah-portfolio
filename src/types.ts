/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: 'languages' | 'ml' | 'visualization' | 'tools' | 'soft';
  level: number; // percentage (e.g. 90) representing proficiency or confidence
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  stats?: { label: string; value: string }[];
  duration: string;
  category: 'data-science' | 'predictive-analytics' | 'dashboards';
}

export interface TimelineNode {
  id: string;
  type: 'education' | 'role' | 'achievement';
  title: string;
  subtitle: string;
  institution: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
