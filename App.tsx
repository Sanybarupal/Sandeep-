
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Share2, 
  Grid, 
  Smile,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

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
  const roles = [
    "Web Designer",
    "UI / UX Designer",
    "Frontend Developer",
    "Web Developer",
    "UI Component Engineer",
    "JavaScript Developer",
    "PHP Developer",
    "React Developer",
    "Backend Developer (Basic)",
    "WordPress Developer",
    "Content Writer",
    "Technical Content Writer",
    "Project Manager",
    "Team Lead",
    "Trainer / Mentor",
    "Freelancer",
    "Agency Builder"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate roles every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500);
    }, 3500);

    return () => clearInterval(timer);
  }, [roles.length]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setRoleIndex((prev) => (prev - 1 + roles.length) % roles.length);
      setIsAnimating(false);
    }, 500);
  };

  const currentRole = roles[roleIndex];

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col font-display relative select-none">
      
      {/* HUD Background Frame */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 m-8 z-0"></div>
      
      {/* Top Header Navigation */}
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

      {/* Side HUD Elements */}
      <HUDInfo side="left" text={`© ${new Date().getFullYear()} SANDEEP BARUPAL • DIGITAL ARCHITECT`} />
      <HUDInfo side="right" text="VERSION 18.8.6.20.27.28" />

      {/* Rotating Badge */}
      <RotatingCircularBadge text="66 DAYS • 20 HOURS • 27 MINUTES • 28 SECONDS • " />

      {/* Main Presentation Content */}
      <main className="flex-1 relative flex items-center justify-center px-6">
        
        {/* Constant Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] opacity-10 bg-blue-500 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl w-full justify-center">
          
          {/* Static Wing: The Brand Icon & Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center text-blue-500">
               <span className="text-8xl md:text-[10rem] font-light tracking-tighter">&lt;</span>
               <span className="text-8xl md:text-[10rem] font-light -mx-2">/</span>
               <span className="text-8xl md:text-[10rem] font-light tracking-tighter">&gt;</span>
            </div>
            <div className="text-center md:text-left">
                <div className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.8] text-white/90 uppercase">SANDEEP</div>
                <div className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.8] text-white/90 uppercase">BARUPAL</div>
            </div>
          </div>

          {/* Dynamic Wing: Rotating Roles */}
          <div className="flex flex-col text-center md:text-left min-w-[300px] md:min-w-[650px]">
            <h1 
              className={`text-4xl md:text-[8vw] font-bold text-white tracking-tighter leading-none transition-all duration-700 transform ${
                isAnimating ? 'opacity-0 translate-x-12 blur-xl' : 'opacity-100 translate-x-0 blur-0'
              }`}
            >
              {currentRole}
            </h1>
          </div>
        </div>

        {/* Narrative Description Block (Fixed) */}
        <div className="absolute bottom-32 left-16 z-30 max-w-sm hidden lg:block">
           <div className="w-full h-[1px] bg-white/10 mb-6"></div>
           <p className="text-[10px] font-bold text-white/30 tracking-[0.25em] uppercase leading-relaxed font-mono">
             ARCHITECTING HIGH-PERFORMANCE DIGITAL EXPERIENCES WITH PRECISION AND CREATIVITY.
           </p>
        </div>
      </main>

      {/* Navigation & Controls */}
      <footer className="fixed bottom-12 left-12 right-12 flex justify-between items-center z-[100]">
        
        {/* Pagination Dots (Representing groups of roles) */}
        <div className="flex items-center gap-2">
          {roles.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setRoleIndex(i);
                    setIsAnimating(false);
                  }, 500);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === roleIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Action Button */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <button className="bg-white text-black text-[9px] font-black px-8 py-2.5 rounded uppercase tracking-[0.3em] hover:bg-[#C1FF72] transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Explore
          </button>
        </div>

        {/* Prev/Next Navigation */}
        <div className="flex gap-2">
           <button 
             onClick={handlePrev}
             className="bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg border border-white/5 transition-all active:scale-90"
           >
             <span className="text-white text-[9px] font-black tracking-widest uppercase opacity-60">Prev</span>
           </button>
           <button 
             onClick={handleNext}
             className="bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg border border-white/5 transition-all active:scale-90"
           >
             <span className="text-white text-[9px] font-black tracking-widest uppercase opacity-60">Next</span>
           </button>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
