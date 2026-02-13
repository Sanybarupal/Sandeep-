
import React from 'react';
import { 
  Layout, 
  Code2, 
  Settings, 
  Palette, 
  Github, 
  Figma, 
  Cpu,
  Layers,
  Smartphone,
  Box,
  Globe,
  Database,
  Terminal,
  Search,
  PenTool
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
    icon: <Globe className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Custom Web Solutions",
    description: "Developing custom features and complex functionalities aligned with your specific business goals.",
    icon: <Settings className="w-8 h-8 text-teal-500" />
  }
];

export const SKILLS: Skill[] = [
  // Design
  { name: "UI/UX Design", category: "design", icon: <Layout size={24} /> },
  { name: "Website Layout", category: "design", icon: <Layers size={24} /> },
  { name: "Responsive Design", category: "design", icon: <Smartphone size={24} /> },
  { name: "Wireframing", category: "design", icon: <PenTool size={24} /> },
  { name: "3D Modeling", category: "design", icon: <Box size={24} /> },
  // Dev
  { name: "React JS", category: "development", icon: <Globe size={24} /> },
  { name: "Tailwind CSS", category: "development", icon: <Palette size={24} /> },
  { name: "Three.js", category: "development", icon: <Cpu size={24} /> },
  { name: "JavaScript", category: "development", icon: <Code2 size={24} /> },
  { name: "WordPress", category: "development", icon: <Settings size={24} /> },
  // Tools
  { name: "Figma", category: "tools", icon: <Figma size={24} /> },
  { name: "GitHub", category: "tools", icon: <Github size={24} /> },
  { name: "VS Code", category: "tools", icon: <Terminal size={24} /> },
  { name: "SEO", category: "tools", icon: <Search size={24} /> },
  { name: "Database", category: "tools", icon: <Database size={24} /> }
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
