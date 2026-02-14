
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
  PenTool,
  Monitor,
  Flame,
  Zap
} from 'lucide-react';
import { Service, Skill, Project } from './types';

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Development",
    description: "Building high-performance web applications using modern stacks like React, Node.js, and specialized 3D libraries.",
    icon: <Code2 className="w-8 h-8 text-black" />
  },
  {
    title: "Immersive 3D Web",
    description: "Creating interactive 3D experiences that live in the browser, using Three.js and WebGL for maximum engagement.",
    icon: <Box className="w-8 h-8 text-black" />
  },
  {
    title: "UI/UX Architecture",
    description: "Designing data-driven, user-centric interfaces that focus on conversion, usability, and aesthetic brutalism.",
    icon: <Layout className="w-8 h-8 text-black" />
  },
  {
    title: "Brand Digitalization",
    description: "Transforming traditional brand identities into dynamic digital experiences that stand out in a crowded market.",
    icon: <Flame className="w-8 h-8 text-black" />
  },
  {
    title: "Performance Optimization",
    description: "Auditing and optimizing existing web platforms for lightning-fast speeds and top-tier SEO performance.",
    icon: <Zap className="w-8 h-8 text-black" />
  }
];

export const SKILLS: Skill[] = [
  // Design
  { name: "Interface Design", category: "design", icon: <Layout size={24} /> },
  { name: "Visual Systems", category: "design", icon: <Layers size={24} /> },
  { name: "Prototyping", category: "design", icon: <Smartphone size={24} /> },
  { name: "Branding", category: "design", icon: <PenTool size={24} /> },
  { name: "3D Graphics", category: "design", icon: <Box size={24} /> },
  // Dev
  { name: "React Ecosystem", category: "development", icon: <Globe size={24} /> },
  { name: "Next.js", category: "development", icon: <Monitor size={24} /> },
  { name: "Three.js / WebGL", category: "development", icon: <Cpu size={24} /> },
  { name: "TypeScript", category: "development", icon: <Code2 size={24} /> },
  { name: "Backend APIs", category: "development", icon: <Database size={24} /> },
  // Tools
  { name: "Figma Professional", category: "tools", icon: <Figma size={24} /> },
  { name: "Git Workflow", category: "tools", icon: <Github size={24} /> },
  { name: "CI/CD Pipelines", category: "tools", icon: <Terminal size={24} /> },
  { name: "Modern SEO", category: "tools", icon: <Search size={24} /> },
  { name: "Cloud Hosting", category: "tools", icon: <Settings size={24} /> }
];

export const PROJECTS: Project[] = [
  {
    title: "VIRTUAL ATELIER",
    category: "3D Experience",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    description: "A fully immersive 3D fashion showroom built with React-Three-Fiber."
  },
  {
    title: "NEO-FINANCE DASHBOARD",
    category: "Web App / UI",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop",
    description: "Complex data visualization for high-frequency trading platforms."
  },
  {
    title: "BRUTALIST ARCHIVE",
    category: "Design / CMS",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "A content-heavy repository for architectural photography and studies."
  },
  {
    title: "FLUID MOTION",
    category: "Creative Dev",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    description: "Experimental interaction design project exploring mouse-driven fluid dynamics."
  }
];
