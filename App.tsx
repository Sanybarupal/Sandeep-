
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Share2, 
  Grid, 
  Code2, 
  Palette, 
  Layout, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Settings, 
  Figma,
  Globe,
  Smile,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface SlideContent {
  id: string;
  title: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

// --- Components ---

const RotatingCircularBadge = ({ text }: { text: string }) => (
  <div className="fixed top-12 right-12 z-50 pointer-events-none hidden md:block">
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
        <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
        <text className="text-[5px] font-display font-bold uppercase tracking-[0.4em] fill-white/30">
          <textPath xlinkHref="#badgePath">{text} • {text} • </textPath>
        </text>
      </svg>
      <div className="bg-white/5 backdrop-blur-md rounded-full w-24 h-24 flex items-center justify-center border border-white/10">
        <span className="text-[8px] font-display font-black text-white tracking-[0.4em] uppercase opacity-40">SANDEEP</span>
      </div>
    </div>
  </div>
);

const HUDInfo = ({ side, text }: { side: 'left' | 'right', text: string }) => (
  <div className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${side === 'left' ? 'left-6 origin-top-left -rotate-90' : 'right-6 origin-bottom-right rotate-90'}`}>
    <span className="text-[9px] font-display font-bold tracking-[0.6em] text-white/20 uppercase whitespace-nowrap">
      {text}
    </span>
  </div>
);

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: SlideContent[] = [
    {
      id: 'home',
      title: 'Developer',
      name: 'SANDEEP BARUPAL',
      description: 'ARCHITECTING HIGH-PERFORMANCE DIGITAL EXPERIENCES WITH PRECISION AND CREATIVITY.',
      icon: <div className="flex items-center text-blue-500"><span className="text-8xl md:text-[12rem] font-light">&lt;</span><span className="text-8xl md:text-[12rem] font-light -mx-2">/</span><span className="text-8xl md:text-[12rem] font-light">&gt;</span></div>,
      color: '#3B82F6'
    },
    {
      id: 'designer',
      title: 'Designer',
      name: 'CREATIVE UI/UX',
      description: 'CRAFTING INTUITIVE USER JOURNEYS AND PIXEL-PERFECT INTERFACES THAT PRIORITIZE THE END-USER.',
      icon: <Palette className="w-32 h-32 md:w-48 md:h-48 text-pink-500" />,
      color: '#EC4899'
    },
    {
      id: 'creative',
      title: 'Architect',
      name: 'WEB ENGINEER',
      description: 'PUSHING THE BOUNDARIES OF THE WEB WITH IMMERSIVE 3D ENVIRONMENTS AND INTERACTIONS.',
      icon: <Zap className="w-32 h-32 md:w-48 md:h-48 text-yellow-500" />,
      color: '#F59E0B'
    }
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const currentSlide = slides[activeIndex];

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col font-display relative select-none">
      
      {/* HUD Lines Decoration */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 m-8 z-0"></div>
      
      {/* Top Header */}
      <header className="fixed top-12 left-12 flex items-center gap-4 z-[100]">
        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
          <Grid className="text-white/60" size={20} />
        </button>
        <button className="w-10 h-10 bg-[#EC4899] rounded-lg flex items-center justify-center transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)]">
          <Smile className="text-black" size={20} />
        </button>
      </header>

      <div className="fixed top-12 right-12 z-[100]">
        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
          <Share2 className="text-white/60" size={18} />
        </button>
      </div>

      {/* Side HUD */}
      <HUDInfo side="left" text={`© ${new Date().getFullYear()} SANDEEP BARUPAL • DIGITAL ARCHITECT`} />
      <HUDInfo side="right" text="VERSION 18.8.6.20.27.28" />

      {/* Circular Badge */}
      <RotatingCircularBadge text="66 DAYS • 20 HOURS • 27 MINUTES • 28 SECONDS • " />

      {/* Main Content */}
      <main className="flex-1 relative flex items-center justify-center px-6">
        
        {/* Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[140px] opacity-10 transition-colors duration-1000"
          style={{ backgroundColor: currentSlide.color }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-7xl w-full justify-center">
          
          {/* Left Block: Icon + Name */}
          <div className={`flex flex-col items-center md:items-start transition-all duration-700 transform ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            <div className="mb-4">
              {currentSlide.icon}
            </div>
            <div className="text-center md:text-left">
              {currentSlide.name.split(' ').map((line, i) => (
                <div key={i} className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.85] text-white uppercase">{line}</div>
              ))}
            </div>
          </div>

          {/* Right Block: Main Title */}
          <div className="flex flex-col text-center md:text-left">
            <h1 
              className={`text-6xl md:text-[11vw] font-bold text-white tracking-tighter leading-none transition-all duration-700 delay-100 transform ${
                isAnimating ? 'opacity-0 translate-x-12 blur-xl' : 'opacity-100 translate-x-0 blur-0'
              }`}
            >
              {currentSlide.title}
            </h1>
          </div>
        </div>

        {/* Bottom Left Info */}
        <div className="absolute bottom-32 left-16 z-30 max-w-xs hidden md:block">
           <div className="w-full h-[1px] bg-white/10 mb-6"></div>
           <p className="text-[10px] font-bold text-white/30 tracking-[0.25em] uppercase leading-relaxed font-mono">
             {currentSlide.description}
           </p>
        </div>
      </main>

      {/* Bottom Bar Controls */}
      <footer className="fixed bottom-12 left-12 right-12 flex justify-between items-center z-50">
        
        {/* Pagination (Bottom Left) */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(i);
                  setTimeout(() => setIsAnimating(false), 800);
                }
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? 'w-12 bg-white' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Start Button (Centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <button className="bg-white text-black text-[10px] font-bold px-6 py-2 rounded uppercase tracking-widest hover:bg-white/90 transition-all">
            Start
          </button>
        </div>

        {/* Navigation (Bottom Right) */}
        <div className="flex gap-3">
           <button 
             onClick={handlePrev}
             className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded flex items-center gap-2 border border-white/5 transition-all"
           >
             <span className="text-white text-[9px] font-bold tracking-widest uppercase">Prev</span>
           </button>
           <button 
             onClick={handleNext}
             className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded flex items-center gap-2 border border-white/5 transition-all"
           >
             <span className="text-white text-[9px] font-bold tracking-widest uppercase">Next</span>
           </button>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
