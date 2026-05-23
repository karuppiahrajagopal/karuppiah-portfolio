/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project, TimelineNode } from './types';

export const PERSONAL_INFO = {
  name: 'Karuppiah R',
  title: 'Data Analyst & AI Practitioner',
  email: 'karuppiahrajagopal17@gmail.com',
  phone: '+91 90257 61251',
  location: 'Sivagangai, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/karuppiah-r', // Professional representative slug
  github: 'https://github.com/karuppiah-r',
  objective:
    'Motivated pre-final year engineering student with strong foundations in Python, machine learning, and data visualization. Seeking a Data Science / Analyst Internship to apply academic knowledge, contribute to real-world projects, and grow into a skilled AI professional. Eager to learn, adapt, and bring value through analytical thinking and problem-solving.',
};

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'languages', level: 88, description: 'Core programming language for data wrangling, analytics, and modeling.' },
  { name: 'Java', category: 'languages', level: 75, description: 'Object-oriented programming and standard algorithmic problem solving.' },

  // Data Science & ML
  { name: 'Pandas', category: 'ml', level: 85, description: 'Data structures and manipulation tools for structured tabular data.' },
  { name: 'NumPy', category: 'ml', level: 80, description: 'Numerical computing, matrix operations, and mathematical foundations.' },
  { name: 'Scikit-learn', category: 'ml', level: 78, description: 'Predictive data analysis, regression, classification, and clustering clustering algorithms.' },
  { name: 'Machine Learning', category: 'ml', level: 72, description: 'Supervised and unsupervised learning basics, model tuning, and evaluation metrics.' },

  // Data Visualization
  { name: 'Matplotlib', category: 'visualization', level: 85, description: 'Static, animated, and interactive plotting foundations in Python.' },
  { name: 'Seaborn', category: 'visualization', level: 88, description: 'Statistical data visualization built on high-level styling and aesthetic defaults.' },
  { name: 'Plotly', category: 'visualization', level: 70, description: 'Interactive graphing libraries for dynamic web-ready plots.' },

  // Tools & Platforms
  { name: 'Jupyter Notebook', category: 'tools', level: 90, description: 'Interactive computing environment for coding, documenting, and conveying data flows.' },
  { name: 'GitHub', category: 'tools', level: 80, description: 'Version control, cloud collaboration, and repository management.' },
  { name: 'Microsoft Excel', category: 'tools', level: 82, description: 'Advanced formulas, pivot tables, and elementary business analytics.' },
  { name: 'Power Point & Word', category: 'tools', level: 85, description: 'Professional research documentation, slideshow deliverables, and stakeholder messaging.' },

  // Soft Skills
  { name: 'Problem Solving', category: 'soft', level: 92, description: 'Structured analytical thinking to break down complex business and numeric problems.' },
  { name: 'Disciplined Learning', category: 'soft', level: 95, description: 'Proactive and methodical approach to acquiring new technical frameworks and APIs.' },
  { name: 'Team Player', category: 'soft', level: 90, description: 'Collaborative communicator who thrives in peer code-reviews and agile project pairings.' },
  { name: 'Active Listening', category: 'soft', level: 88, description: 'Focused comprehension of project specifications and business requirements.' },
];

export const PROJECTS: Project[] = [
  {
    id: 'titanic-analysis',
    title: 'Exploratory Data Analysis on Titanic Dataset',
    tagline: 'Unlocking demographics and survivability insights using Pandas and Seaborn.',
    description:
      'A thorough analytical project focusing on cleaning, structuring, and inspecting the famous Titanic passenger manifest. Developed deep exploratory insights regarding survival rates across socioeconomic factors, passenger classes, and age distributions.',
    highlights: [
      'Cleaned raw datasets by imputing missing age averages and cabin records in Pandas.',
      'Designed high-fidelity heatmaps and factor plots using Seaborn representing correlation elements.',
      'Identified key survival predictors: gender, class-ranking, and ticket grouping ratios.'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    stats: [
      { label: 'Data Cleaned', value: '891 rows' },
      { label: 'Key Predictors', value: '3 identified' },
      { label: 'Charts Generated', value: '12 interactive' }
    ],
    duration: '2 Weeks (Academic)',
    category: 'data-science',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics for Student Academics',
    tagline: 'Regression-modelling to predict and optimize student performance scores.',
    description:
      'Engineered an objective predictive framework to study Student Academic Performance based on weekly study schedules, test logs, and attendance ratios. Built with Scikit-learn to validate regression techniques.',
    highlights: [
      'Pre-processed features by scaling metric vectors and transforming categorical descriptors.',
      'Trained a lightweight regression model to forecast student scores with high statistical accuracy.',
      'Validated regression assumptions by plotting residuals and testing variance thresholds.'
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    stats: [
      { label: 'Algorithm', value: 'Linear Regression' },
      { label: 'Feature Count', value: '6 Metrics' },
      { label: 'Performance Metric', value: 'Mean Squared Error' }
    ],
    duration: '3 Weeks (Self-initiated)',
    category: 'predictive-analytics',
  },
  {
    id: 'vis-dashboard',
    title: 'Dynamic Data Analytics Dashboard',
    tagline: 'Custom analysis workflows mapping distributions and trend metrics.',
    description:
      'Developed an interactive python-based dashboard designed to load random sample datasets and render real-time statistical breakdowns instantly. Enables direct exploration of distributions, skewness, and trend outlines.',
    highlights: [
      'Built interactive plots allowing dynamic selection of pivot matrices.',
      'Visualized trend lines, confidence intervals, and density contour metrics.',
      'Optimized matrix calculations reducing render delays across large numerical tables.'
    ],
    tech: ['Python', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter Notebook'],
    stats: [
      { label: 'Plot Libraries', value: 'Seaborn / Plotly' },
      { label: 'Controls', value: 'Filter Matricies' },
      { label: 'Data Rendering', value: '<50ms latency' }
    ],
    duration: '2 Weeks (Coursework)',
    category: 'dashboards',
  },
];

export const TIMELINE: TimelineNode[] = [
  {
    id: 'degree',
    type: 'education',
    title: 'Bachelor of Technology (B.Tech.)',
    subtitle: 'Artificial Intelligence & Data Science',
    institution: 'Dhanalakshmi Srinivasan Engineering College, Tamil Nadu',
    period: '2023 – 2027',
    description:
      'Pioneering coursework combining database engines, algorithmic computational theory, statistical modeling, and hands-on laboratory experiments with PyTorch and Scikit-learn tools.',
    bullets: [
      'Maintained consistent pre-final year academic excellence with intensive training in mathematical probability.',
      'Active researcher in student analytics circles, leading exploratory data analysis workshops for peers.',
      'Expected Graduation: May 2027.'
    ],
  },
  {
    id: 'intern',
    type: 'role',
    title: 'Data Analyst / Academic Intern',
    subtitle: 'Seeking Core Internship Placement',
    institution: 'AI & Data Science Labs',
    period: 'Summer 2026 (Present)',
    description:
      'Eagerly exploring practical pipelines for standard business questions. Dedicated to transforming raw transactional logs into high-impact visual narratives.',
    bullets: [
      'Engineered numerical pipelines to clean tabular values with highly structured Pandas code.',
      'Developed interactive visual templates to present data trends under strict deadlines.',
      'Actively practicing supervised ML classifications and neural network foundations.'
    ],
  },
  {
    id: 'milestone',
    type: 'achievement',
    title: 'Technical Milestones & Certifications',
    subtitle: 'Data Science & Algorithm Competencies',
    institution: 'Self-Directed & College Chapters',
    period: '2024 - 2025',
    description:
      'Supplemented academic studies with extensive self-education and local hackathon involvement.',
    bullets: [
      'Completed multiple self-paced certifications in Python for Data Science and Machine Learning models.',
      'Designed and coded three real-world projects analyzing open-source tabular repos.',
      'Consistent contributor to cooperative peer review and documentation projects.'
    ],
  },
];
