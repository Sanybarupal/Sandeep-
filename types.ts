
// Fix: Imported React to provide the React namespace for ReactNode
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  category: 'design' | 'development' | 'tools';
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}
