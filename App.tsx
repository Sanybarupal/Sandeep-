
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
  ArrowRight,
  MapPin,
  Bitcoin,
  QrCode,
  ExternalLink,
  Instagram,
  Linkedin
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

      {/* Bento Contact Section Overlay */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-3xl overflow-y-auto p-4 md:p-12 animate-in fade-in zoom-in duration-500">
          <button 
            onClick={() => setIsContactOpen(false)}
            className="fixed top-8 right-8 z-[210] w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all active:scale-90"
          >
            <X size={28} />
          </button>

          {/* Bento Grid Container */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-6 gap-3 md:h-[80vh]">
            
            {/* 1. Avatar Card */}
            <div className="md:col-span-1 md:row-span-3 bg-indigo-500 rounded-3xl p-6 flex items-center justify-center overflow-hidden group">
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                <Smile size={120} className="text-white drop-shadow-2xl relative z-10 group-hover:rotate-12 transition-transform" />
              </div>
            </div>

            {/* 2. Rotating Text Card */}
            <div className="md:col-span-1 md:row-span-2 bg-[#141414] rounded-3xl p-6 flex flex-col items-center justify-center relative border border-white/5 overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center">
                 <svg className="w-40 h-40 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                   <path id="contactPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                   <text className="text-[6px] font-bold uppercase tracking-[0.4em] fill-white/20">
                     <textPath xlinkHref="#contactPath">HIRE ME NOW • CONTACT SANDEEP • </textPath>
                   </text>
                 </svg>
               </div>
               <Layers size={32} className="text-white/40 relative z-10" />
            </div>

            {/* 3. Menu/Links Card */}
            <div className="md:col-span-1 md:row-span-4 bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between border border-white/10">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">DIRECTORY</span>
                <nav className="flex flex-col gap-4">
                  {[
                    { name: 'PHONE', link: 'tel:7878142323' },
                    { name: 'EMAIL', link: 'mailto:itz_sandeep_97@gmail.com' },
                    { name: 'INSTAGRAM', link: 'https://instagram.com/itz_sandeep_97' },
                    { name: 'LINKEDIN', link: 'https://www.linkedin.com/in/sandeep-barupal-a5b323321/' },
                    { name: 'TWITTER', link: '#' }
                  ].map(item => (
                    <a 
                      key={item.name} 
                      href={item.link}
                      target={item.link.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-left group flex items-center justify-between text-lg font-bold text-white/70 hover:text-white transition-all"
                    >
                      <span>{item.name}</span>
                      <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  ))}
                </nav>
              </div>
              <button className="mt-8 text-left group">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">STATUS</span>
                <p className="text-white font-bold group-hover:text-indigo-400 transition-colors">AVAILABLE NOW</p>
              </button>
            </div>

            {/* 4. Exclusive Badge Card */}
            <div className="md:col-span-1 md:row-span-1 bg-purple-500 rounded-3xl p-4 flex items-center gap-4 group">
               <div className="bg-white rounded-full p-2 text-black group-hover:scale-110 transition-transform">
                 <Zap size={18} />
               </div>
               <div className="text-[9px] font-bold text-white uppercase leading-tight tracking-widest">
                 HIGH END<br/>SOLUTIONS
               </div>
            </div>

            {/* 5. Main Title Card */}
            <div className="md:col-span-1 md:row-span-3 bg-white rounded-3xl p-8 flex flex-col justify-center border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <ArrowRight size={24} className="text-black -rotate-45" />
               </div>
               <h3 className="text-6xl md:text-8xl font-black text-black italic tracking-tighter leading-none">ID</h3>
               <p className="text-black/40 text-[10px] font-black uppercase mt-4 tracking-widest break-all">itz_sandeep_97</p>
            </div>

            {/* 6. Location Card */}
            <div className="md:col-span-1 md:row-span-2 bg-[#141414] rounded-3xl p-8 flex flex-col justify-between border border-white/5">
              <div className="flex items-center gap-2 text-lime-400">
                <MapPin size={16} />
                <span className="text-[9px] font-bold tracking-widest uppercase">RAJASTHAN, IN</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight uppercase text-lg tracking-tighter">WORKING<br/>REMOTE WORLDWIDE</p>
                <p className="text-white/20 text-[9px] font-bold uppercase mt-2">UTC +5:30</p>
              </div>
            </div>

            {/* 7. Large Illustration Card */}
            <div className="md:col-span-1 md:row-span-4 bg-lime-400 rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden group relative">
               <div className="flex flex-col items-center justify-center gap-4">
                 <Smile size={140} className="text-black group-hover:scale-110 transition-transform duration-700" />
                 <div className="flex gap-4">
                    <a href="https://instagram.com/itz_sandeep_97" target="_blank" rel="noopener noreferrer" className="bg-black/10 p-3 rounded-full hover:bg-black hover:text-white transition-all"><Instagram size={20} /></a>
                    <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/" target="_blank" rel="noopener noreferrer" className="bg-black/10 p-3 rounded-full hover:bg-black hover:text-white transition-all"><Linkedin size={20} /></a>
                 </div>
               </div>
               <div className="absolute bottom-6 right-6 opacity-40">
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-black"></div>
                   <div className="w-2 h-2 rounded-full bg-black"></div>
                 </div>
               </div>
            </div>

            {/* 8. Bitcoin/Info Card */}
            <div className="md:col-span-1 md:row-span-2 bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 flex flex-col justify-between group">
              <div className="bg-lime-400 w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:rotate-12 transition-transform">
                <Bitcoin size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1">PAYMENT OPTIONS</p>
                <p className="text-white text-xs font-bold leading-relaxed uppercase">WE ACCEPT CRYPTO & TRADITIONAL BANK TRANSFERS</p>
              </div>
            </div>

            {/* 9. Walk Icons Card */}
            <div className="md:col-span-1 md:row-span-1 bg-[#141414] rounded-3xl p-4 flex items-center justify-around border border-white/5">
               <Users size={24} className="text-white/20" />
               <Rocket size={24} className="text-white/40" />
               <Code2 size={24} className="text-white/20" />
            </div>

            {/* 10. QR App Card */}
            <div className="md:col-span-1 md:row-span-1 bg-lime-400 rounded-3xl p-4 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors">
               <div className="flex items-center gap-3">
                 <QrCode size={24} className="text-black" />
                 <div className="text-[8px] font-black text-black uppercase leading-none tracking-tighter">
                   VCARD<br/>CONNECT
                 </div>
               </div>
               <ExternalLink size={16} className="text-black" />
            </div>

            {/* 11. Final CTA Card */}
            <a href="tel:7878142323" className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-indigo-500 transition-all duration-500">
               <div className="flex justify-between items-start">
                 <div>
                   <h4 className="text-black group-hover:text-white text-3xl font-black italic tracking-tighter uppercase leading-none">BOOK A CALL</h4>
                   <p className="text-black/40 group-hover:text-white/40 text-[10px] font-black uppercase mt-2 tracking-widest">+91 7878 142 323</p>
                 </div>
                 <div className="text-5xl md:text-7xl font-black text-black group-hover:text-white tracking-tighter italic">4.97</div>
               </div>
               <div className="flex items-center justify-between">
                 <p className="text-black/40 group-hover:text-white/40 text-[10px] font-black uppercase tracking-widest">100+ CLIENTS SATISFIED</p>
                 <button className="bg-indigo-500 group-hover:bg-white text-white group-hover:text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                   CALL NOW
                 </button>
               </div>
            </a>

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
