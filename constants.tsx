
import React from 'react';
import { 
  Layout, 
  Code2, 
  UserCircle2, 
  Briefcase, 
  Settings, 
  Palette, 
  MonitorSmartphone, 
  Database, 
  Github, 
  Figma, 
  Cpu,
  Layers
} from 'lucide-react';
import { Service, Skill, Project } from './types';

export const SERVICES: Service[] = [
  {
    title: "Website Design",
    description: "Modern, clean, and user-focused website designs that attract and retain users effectively.",
    icon: <Palette className="w-8 h-8 text-indigo-500" />
  },
  {
    title: "Web Development",
    description: "Fast, responsive, and secure websites built with clean code and industry best practices.",
    icon: <Code2 className="w-8 h-8 text-purple-500" />
  },
  {
    title: "UI/UX Design",
    description: "User-friendly interfaces with better usability and a core focus on conversion optimization.",
    icon: <Layout className="w-8 h-8 text-pink-500" />
  },
  {
    title: "Portfolio & Business",
    description: "Tailored agency, startup, and company websites designed to showcase your unique value.",
    icon: <Briefcase className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Custom Web Solutions",
    description: "Developing custom features and complex functionalities aligned with your specific business goals.",
    icon: <Settings className="w-8 h-8 text-teal-500" />
  }
];

export const SKILLS: Skill[] = [
  // Design
  { name: "UI/UX Design", category: "design" },
  { name: "Website Layout", category: "design" },
  { name: "Responsive Design", category: "design" },
  { name: "Wireframing", category: "design" },
  { name: "Prototyping", category: "design" },
  // Dev
  { name: "HTML5/CSS3", category: "development" },
  { name: "JavaScript (ES6+)", category: "development" },
  { name: "React JS", category: "development" },
  { name: "Tailwind CSS", category: "development" },
  { name: "PHP & MySQL", category: "development" },
  { name: "WordPress", category: "development" },
  // Tools
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Browser DevTools", category: "tools" }
];

export const PROJECTS: Project[] = [
  {
    title: "Business Platform",
    category: "Web Development",
    image: "https://picsum.photos/seed/biz/800/600",
    description: "A full-scale enterprise solution with interactive analytics."
  },
  {
    title: "Creative Portfolio",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/port/800/600",
    description: "Clean aesthetic for a leading architecture firm."
  },
  {
    title: "E-commerce App",
    category: "Full Stack",
    image: "https://picsum.photos/seed/shop/800/600",
    description: "Secure payment integration and inventory management."
  },
  {
    title: "SaaS Dashboard",
    category: "UI Design",
    image: "https://picsum.photos/seed/dash/800/600",
    description: "Complex data visualization with a minimal UI."
  }
];
