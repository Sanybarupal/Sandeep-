
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
  Zap
} from 'lucide-react';

// --- Types ---
interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

// --- Components ---

const RotatingCircularBadge = ({ text }: { text: string }) => (
  <div className="fixed top-12 right-12 z-50 pointer-events-none hidden md:block">
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
        <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
        <text className="text-[5px] font-display font-bold uppercase tracking-[0.4em] fill-white/40">
          <textPath xlinkHref="#badgePath">{text} • {text} • </textPath>
        </text>
      </svg>
      <div className="bg-white/5 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center border border-white/10">
        <span className="text-[8px] font-display font-black text-white tracking-widest uppercase opacity-60">Sandeep</span>
      </div>
    </div>
  </div>
);

const SidebarText = ({ side, text }: { side: 'left' | 'right', text: string }) => (
  <div className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${side === 'left' ? 'left-8 origin-top-left -rotate-90' : 'right-8 origin-bottom-right rotate-90'}`}>
    <span className="text-[10px] font-display font-bold tracking-[0.6em] text-white/30 uppercase whitespace-nowrap">
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
      subtitle: 'Sandeep Barupal',
      description: 'Architecting high-performance digital experiences with precision and creativity.',
      icon: <Code2 className="w-full h-full" />,
      color: '#3B82F6'
    },
    {
      id: 'designer',
      title: 'Designer',
      subtitle: 'UI/UX Specialist',
      description: 'Creating intuitive user journeys and pixel-perfect interfaces that prioritize the end-user.',
      icon: <Palette className="w-full h-full" />,
      color: '#EC4899'
    },
    {
      id: 'creative',
      title: 'Creative',
      subtitle: 'Web Architect',
      description: 'Pushing the boundaries of the web with immersive 3D environments and interactions.',
      icon: <Zap className="w-full h-full" />,
      color: '#F59E0B'
    },
    {
      id: 'security',
      title: 'Security',
      subtitle: 'Safety Learner',
      description: 'Understanding core security protocols to ensure digital assets are protected and robust.',
      icon: <ShieldCheck className="w-full h-full" />,
      color: '#10B981'
    },
    {
      id: 'architect',
      title: 'Architect',
      subtitle: 'System Design',
      description: 'Engineering specialized features and robust infrastructures that grow seamlessly.',
      icon: <Layers className="w-full h-full" />,
      color: '#8B5CF6'
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
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col font-display relative">
      
      {/* Top Header UI */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-[100]">
        <div className="flex items-center gap-6">
          <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all group">
            <Grid className="text-white group-hover:scale-110" size={24} />
          </button>
          <div className="w-8 h-8 flex items-center justify-center bg-[#EC4899] rounded-lg">
            <Smile className="text-black" size={18} />
          </div>
        </div>
        <button className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all">
          <Share2 className="text-white" size={20} />
        </button>
      </header>

      {/* Side HUD info */}
      <SidebarText side="left" text={`© ${new Date().getFullYear()} SANDEEP BARUPAL • DIGITAL ARCHITECT`} />
      <SidebarText side="right" text="VERSION 18.8.6.20.27.28" />

      {/* Circular Badge */}
      <RotatingCircularBadge text="6 DAYS • 20 HOURS • 27 MINUTES • 28 SECONDS • " />

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center px-6">
        
        {/* Decorative Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]"></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] transition-all duration-1000 blur-[150px] opacity-20"
            style={{ backgroundColor: currentSlide.color }}
          ></div>
        </div>

        {/* The Slide Content */}
        <div className="relative z-10 flex flex-col items-center md:flex-row gap-8 md:gap-16 max-w-7xl w-full justify-center">
          
          {/* Main Icon - Styled after the screenshot logo */}
          <div 
            className={`w-32 h-32 md:w-64 md:h-64 flex-shrink-0 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform ${
              isAnimating ? 'opacity-0 scale-75 rotate-[30deg]' : 'opacity-100 scale-100 rotate-0'
            }`}
            style={{ color: currentSlide.color }}
          >
            {currentSlide.icon}
          </div>

          {/* Large Title Text */}
          <div className="flex flex-col text-center md:text-left">
            <h1 
              className={`text-6xl md:text-[14vw] font-bold text-white tracking-tighter leading-none transition-all duration-700 delay-100 transform ${
                isAnimating ? 'opacity-0 translate-x-12 blur-xl' : 'opacity-100 translate-x-0 blur-0'
              }`}
            >
              {currentSlide.title}
            </h1>
          </div>
        </div>

        {/* Subtitle & Description (Positioned Bottom Left like screenshot) */}
        <div className="absolute bottom-24 left-10 md:left-24 z-30 max-w-sm md:max-w-md">
           <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-tight italic uppercase opacity-90">
             {currentSlide.subtitle}
           </h2>
           <div className="w-16 h-[2px] bg-white/20 my-4"></div>
           <p className="text-[10px] md:text-xs font-bold text-white/40 tracking-[0.3em] uppercase leading-relaxed">
             {currentSlide.description}
           </p>
        </div>
      </main>

      {/* Pagination HUD (Bottom) */}
      <footer className="fixed bottom-12 left-0 w-full px-8 flex flex-col md:flex-row justify-between items-center gap-6 z-50">
        <div className="flex items-center gap-1 md:gap-2">
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
              className={`h-2 md:h-3 rounded-full transition-all duration-500 ${
                i === activeIndex ? 'w-8 md:w-16 bg-white' : 'w-2 md:w-3 bg-white/10 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
           <button 
             onClick={handlePrev}
             className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center border border-white/5 transition-all active:scale-90"
           >
             <span className="text-white text-xs font-bold -translate-x-0.5">PREV</span>
           </button>
           <button 
             onClick={handleNext}
             className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center border border-white/5 transition-all active:scale-90"
           >
             <span className="text-white text-xs font-bold translate-x-0.5">NEXT</span>
           </button>
        </div>
      </footer>

      {/* Decorative HUD lines */}
      <div className="fixed top-0 left-12 w-[1px] h-full bg-white/[0.03] z-0 pointer-events-none"></div>
      <div className="fixed top-0 right-12 w-[1px] h-full bg-white/[0.03] z-0 pointer-events-none"></div>
      <div className="fixed bottom-32 left-0 w-full h-[1px] bg-white/[0.03] z-0 pointer-events-none"></div>
      
    </div>
  );
};

export default App;
