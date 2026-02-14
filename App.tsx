
import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  Grid, 
  Smile,
  Palette,
  Figma,
  Code2,
  Globe,
  Layers,
  Terminal,
  Database,
  Cpu,
  Server,
  Layout,
  PenTool,
  FileText,
  Briefcase,
  Users,
  Zap,
  Rocket,
  X,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface RoleData {
  title: string;
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

const App: React.FC = () => {
  const roles: RoleData[] = [
    { title: "Web Designer", icon: <Palette size={140} />, color: "#EC4899" },
    { title: "UI / UX Designer", icon: <Figma size={140} />, color: "#A855F7" },
    { title: "Frontend Developer", icon: <Code2 size={140} />, color: "#3B82F6" },
    { title: "Web Developer", icon: <Globe size={140} />, color: "#0EA5E9" },
    { title: "UI Component Engineer", icon: <Layers size={140} />, color: "#14B8A6" },
    { title: "JavaScript Developer", icon: <Terminal size={140} />, color: "#F59E0B" },
    { title: "PHP Developer", icon: <Database size={140} />, color: "#6366F1" },
    { title: "React Developer", icon: <Cpu size={140} />, color: "#06B6D4" },
    { title: "Backend Developer", icon: <Server size={140} />, color: "#F43F5E" },
    { title: "WordPress Developer", icon: <Layout size={140} />, color: "#22C55E" },
    { title: "Content Writer", icon: <PenTool size={140} />, color: "#F97316" },
    { title: "Technical Writer", icon: <FileText size={140} />, color: "#94A3B8" },
    { title: "Project Manager", icon: <Briefcase size={140} />, color: "#8B5CF6" },
    { title: "Team Lead", icon: <Users size={140} />, color: "#3B82F6" },
    { title: "Trainer / Mentor", icon: <Smile size={140} />, color: "#EAB308" },
    { title: "Freelancer", icon: <Zap size={140} />, color: "#D946EF" },
    { title: "Agency Builder", icon: <Rocket size={140} />, color: "#C1FF72" }
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isContactOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [roleIndex, isContactOpen]);

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

  const current = roles[roleIndex];

  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex flex-col font-display relative select-none">
      
      {/* HUD Background Frame */}
      <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 m-8 z-0"></div>
      
      {/* Top Header Navigation */}
      <header className="fixed top-12 left-12 flex items-center gap-4 z-[100]">
        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all group">
          <Grid className="text-white/60 group-hover:text-white transition-colors" size={20} />
        </button>
        <button className="w-10 h-10 bg-[#EC4899] rounded-lg flex items-center justify-center transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]">
          <Smile className="text-black" size={20} />
        </button>
      </header>

      <div className="fixed top-12 right-12 z-[100]">
        <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all group">
          <Share2 className="text-white/60 group-hover:text-white transition-colors" size={18} />
        </button>
      </div>

      {/* Rotating Badge */}
      <RotatingCircularBadge text="66 DAYS • 20 HOURS • 27 MINUTES • 28 SECONDS • " />

      {/* Main Presentation Content */}
      <main className="flex-1 relative flex items-center justify-center px-6">
        
        {/* Dynamic Glow Background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[180px] opacity-[0.07] transition-all duration-1000 pointer-events-none"
          style={{ backgroundColor: current.color }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-7xl w-full justify-center">
          
          {/* Left Wing: Dynamic Icon & Name */}
          <div className={`flex flex-col items-center md:items-start transition-all duration-700 transform ${isAnimating ? 'opacity-0 translate-y-8 blur-sm' : 'opacity-100 translate-y-0'}`}>
            <div 
              className="mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-colors duration-1000"
              style={{ color: current.color }}
            >
              {current.icon}
            </div>
            <div className="text-center md:text-left">
                <div className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.75] text-white uppercase">SANDEEP</div>
                <div className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.75] text-white uppercase">BARUPAL</div>
            </div>
          </div>

          {/* Right Wing: Dynamic Title Text */}
          <div className="flex flex-col text-center md:text-left min-w-[300px] md:min-w-[650px]">
            <h1 
              className={`text-5xl md:text-[9vw] font-bold text-white tracking-tighter leading-none transition-all duration-700 transform ${
                isAnimating ? 'opacity-0 translate-x-16 blur-2xl' : 'opacity-100 translate-x-0 blur-0'
              }`}
            >
              {current.title}
            </h1>
          </div>
        </div>
      </main>

      {/* Contact Section Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
            
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white mb-2 uppercase">GET IN TOUCH</h2>
              <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-12">AVAILABLE FOR WORLDWIDE COLLABORATION</p>
              
              <div className="space-y-8">
                <a href="tel:+91XXXXXXXXXX" className="group flex items-center gap-6 p-4 -ml-4 hover:bg-white/5 transition-all rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Phone size={20} className="text-blue-500 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-1">CALL DIRECT</p>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">+91 999 999 9999</p>
                  </div>
                  <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-blue-500" />
                </a>

                <a href="mailto:hello@sandeepbarupal.com" className="group flex items-center gap-6 p-4 -ml-4 hover:bg-white/5 transition-all rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-black transition-all">
                    <Mail size={20} className="text-pink-500 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-1">EMAIL ADDRESS</p>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight italic">hello@sandeepbarupal.com</p>
                  </div>
                  <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-pink-500" />
                </a>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
                <span>INSTAGRAM / @SANDEEP</span>
                <span>LINKEDIN / SANDEEPBARUPAL</span>
                <span>TWITTER / @SANDEEP_DEV</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation & Controls */}
      <footer className="fixed bottom-12 left-12 right-12 flex justify-between items-center z-[100]">
        
        {/* Pagination Dots */}
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
                i === roleIndex ? 'w-10 bg-white' : 'w-1.5 bg-white/10 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Center Hire Me Button */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <button 
            onClick={() => setIsContactOpen(true)}
            className="bg-white text-black text-[10px] font-black px-10 py-3 rounded uppercase tracking-[0.4em] hover:bg-[#C1FF72] transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2"
          >
            Hire Me
          </button>
        </div>

        {/* Prev/Next Controls */}
        <div className="flex gap-2">
           <button 
             onClick={handlePrev}
             className="group bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/5 transition-all active:scale-90"
           >
             <span className="text-white text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">Prev</span>
           </button>
           <button 
             onClick={handleNext}
             className="group bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/5 transition-all active:scale-90"
           >
             <span className="text-white text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">Next</span>
           </button>
        </div>
      </footer>
      
    </div>
  );
};

export default App;
