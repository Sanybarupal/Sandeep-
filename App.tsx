
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight,
  ExternalLink,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';
import { SERVICES, SKILLS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-1">
          <div className="w-5 h-5 rounded-full border-2 border-orange-400 bg-transparent"></div>
          <div className="w-5 h-5 rounded-full border-2 border-orange-400 bg-transparent"></div>
        </div>
        <a href="#home" className="text-3xl font-display font-black tracking-tight text-black">Sandeep<span className="text-pink-500">.</span></a>
      </div>
      
      <div className="hidden md:flex items-center space-x-10">
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            {item}
          </a>
        ))}
        <div className="flex items-center gap-2 ml-4">
          <span className="text-xs text-zinc-400">IN</span>
          <span className="text-xs text-black border-b-2 border-black font-bold">EN</span>
        </div>
        <a 
          href="mailto:hello@sandeep.com" 
          className="bg-zinc-900 text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-black transition-all shadow-lg"
        >
          hello@sandeep.com
        </a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-[60]">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-black"><X size={32} /></button>
          {['Work', 'Services', 'About', 'Contact'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-display font-black text-black">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Intro text */}
      <div className="mb-8 flex items-center gap-2">
        <span className="text-2xl">👋</span>
        <p className="text-lg md:text-xl font-medium text-zinc-600">
          , my name is Sandeep and I am a freelance
        </p>
      </div>

      <div className="relative w-full max-w-7xl">
        {/* Large Typography Layout */}
        <div className="relative z-0 text-center select-none">
          <h1 className="text-[14vw] md:text-[11vw] font-display font-black leading-[0.85] tracking-tighter text-zinc-900 mb-2">
            3D Artist
          </h1>
          <h2 className="text-[14vw] md:text-[11vw] font-display font-bold leading-[0.85] tracking-tighter outlined-text-black">
            & Developer
          </h2>
        </div>

        {/* Central Character Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-2xl pointer-events-none z-10 flex justify-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8uS8H8S8H8S8H8S8H8S8H8S8H.png" 
            alt="Central character" 
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 animate-float"
          />
        </div>
      </div>

      {/* Bottom Row: Location, Buttons, and Logos */}
      <div className="w-full max-w-7xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
        {/* Location */}
        <div className="text-left">
          <p className="text-xl md:text-2xl font-medium text-zinc-500">
            based in India.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center z-20">
          <button className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-black transition-all w-full md:w-auto">
            You need a 3D artist
          </button>
          <button className="bg-white text-zinc-900 border-2 border-zinc-900 px-8 py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-zinc-100 transition-all w-full md:w-auto">
            You need a developer
          </button>
        </div>

        {/* Tool Logos / Trust Badges */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 opacity-40 grayscale pointer-events-none">
          <span className="font-bold text-lg tracking-tighter">React</span>
          <span className="font-bold text-lg tracking-tighter">Three.js</span>
          <span className="font-bold text-lg tracking-tighter">Blender</span>
          <span className="font-bold text-lg tracking-tighter">Figma</span>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-orange-400 selection:text-white">
      <Navbar />
      <Hero />

      {/* Projects Section - Clean Grid */}
      <section id="work" className="py-32 px-6 md:px-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-6xl font-display font-black tracking-tighter italic">LATEST WORK</h2>
            <a href="#" className="font-bold text-sm border-b-2 border-black pb-1 hover:text-zinc-600 hover:border-zinc-400 transition-all">SEE ALL PROJECTS</a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Neo Toys", category: "3D Design", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7uS3H7sH7S7S7S7S7S7S7S7S7S.png" },
              { title: "Space Explorer", category: "AIGC Animation", img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9uS9H9S9H9S9H9S9H9S9H9S9H.png" }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden mb-6 border border-zinc-200">
                  <img src={project.img} alt={project.title} className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-display font-black tracking-tight">{project.title}</h3>
                <p className="text-zinc-400 font-bold text-sm uppercase tracking-widest">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-20 px-6 md:px-12 bg-white border-t border-zinc-100 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12">LET'S BUILD SOMETHING GREAT</h2>
          <div className="flex justify-center gap-10 mb-12">
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-all"><Github /></a>
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-all"><Twitter /></a>
            <a href="#" className="p-3 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-all"><Linkedin /></a>
          </div>
          <p className="text-zinc-400 text-sm font-medium">© {new Date().getFullYear()} SANDEEP KUMAR STUDIO. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
