import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Instagram,
  Linkedin,
  Github,
  Layout,
  Layers,
  Smartphone,
  PenTool,
  Box,
  Globe,
  Cpu,
  Code2,
  Settings,
  Palette as PaletteIcon,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';

const SKILLS_LIST = [
  { id: '01', title: 'UI/UX DESIGN', icon: <Layout size={18} />, color: 'bg-[#fde047]' },
  { id: '02', title: 'WEBSITE LAYOUT', icon: <Layers size={18} />, color: 'bg-[#bef264]' },
  { id: '03', title: 'RESPONSIVE DESIGN', icon: <Smartphone size={18} />, color: 'bg-[#a78bfa]' },
  { id: '04', title: 'WIREFRAMING', icon: <PenTool size={18} />, color: 'bg-[#fb923c]' },
  { id: '05', title: '3D MODELING', icon: <Box size={18} />, color: 'bg-[#3b82f6]' },
  { id: '06', title: 'REACT JS', icon: <Globe size={18} />, color: 'bg-[#fde047]' },
  { id: '07', title: 'TAILWIND CSS', icon: <PaletteIcon size={18} />, color: 'bg-[#bef264]' },
  { id: '08', title: 'THREE.JS', icon: <Cpu size={18} />, color: 'bg-[#a78bfa]' },
  { id: '09', title: 'JAVASCRIPT', icon: <Code2 size={18} />, color: 'bg-[#fb923c]' },
  { id: '10', title: 'WORDPRESS', icon: <Settings size={18} />, color: 'bg-[#3b82f6]' },
];

const vibrate = (pattern = 10) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    vibrate(15);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-3 md:py-6 transition-all duration-300 ${scrolled ? 'bg-white border-b-2 md:border-b-4 border-black' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => vibrate(5)}>
          <div className="flex -space-x-1.5 md:-space-x-2">
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-[1.5px] md:border-2 border-[#fb923c] bg-white"></div>
            <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-[1.5px] md:border-2 border-black bg-white"></div>
          </div>
          <span className="text-xl md:text-3xl font-display uppercase tracking-tighter">SK.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={handleClick}
              className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => vibrate(30)}
            className="hire-me-btn bg-black text-white px-7 py-2 md:px-10 md:py-3 rounded-lg md:rounded-xl font-display text-[10px] md:text-xs uppercase tracking-widest"
          >
            HIRE ME
          </a>
        </div>

        <button onClick={() => { setIsOpen(!isOpen); vibrate(20); }} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => { setIsOpen(false); vibrate(20); }} className="absolute top-4 right-4"><X size={32} /></button>
        {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => { setIsOpen(false); vibrate(15); }} className="text-3xl font-display uppercase tracking-tighter">{link}</a>
        ))}
        <a href="#contact" onClick={() => { setIsOpen(false); vibrate(30); }} className="bg-black text-white px-10 py-4 rounded-xl font-display text-lg uppercase tracking-widest mt-4">HIRE ME</a>
      </div>
    </nav>
  );
};

const SkillCard = ({ skill }: { skill: typeof SKILLS_LIST[0] }) => (
  <div 
    onClick={() => vibrate(15)}
    className={`brutalist-card ${skill.color} p-4 md:p-8 relative flex flex-col justify-between aspect-square group cursor-pointer`}
  >
    <div className="flex justify-between items-start w-full">
      <div className="bg-white border-2 border-black p-1.5 md:p-3 rounded-lg md:rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all">
        {skill.icon}
      </div>
      <span className="text-[10px] md:text-sm font-display text-black/40">{skill.id}</span>
    </div>
    
    <div className="mt-auto">
      <h3 className="text-base md:text-3xl font-display uppercase leading-tight tracking-tighter mb-2 md:mb-4 pr-1 md:pr-4">
        {skill.title}
      </h3>
      <div className="h-1 md:h-2 w-full bg-black/10 relative overflow-hidden rounded-full">
        <div className="h-full w-12 md:w-24 bg-black rounded-full transition-all group-hover:w-full duration-500"></div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleStart = () => {
    setStarted(true);
    vibrate(40);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleMusic = () => {
    vibrate(20);
    if (audioRef.current) {
      if (isMuted) audioRef.current.play();
      else audioRef.current.pause();
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen">
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" style={{ display: 'none' }} />

      {!started && (
        <div id="enter-overlay" className="px-6 text-center">
          <div className="dot-loader mb-10"></div>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter mb-8 leading-none">
            Sandeep <span className="text-[#fb923c]">Barupal</span> <br/> Portfolio
          </h2>
          <button 
            onClick={handleStart}
            className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl font-display text-lg uppercase tracking-widest shadow-[6px_6px_0px_#fb923c] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={20} fill="currentColor" />
            START
          </button>
          <p className="mt-8 text-zinc-400 text-[10px] font-bold tracking-[0.3em]">IMMERSIVE EXPERIENCE READY</p>
        </div>
      )}

      {started && (
        <>
          <Navbar />
          
          <button 
            onClick={toggleMusic}
            className="fixed bottom-4 right-4 z-50 w-10 h-10 md:w-14 md:h-14 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_black] hover:shadow-none transition-all"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse" />}
          </button>

          {/* Hero / Skills Grid */}
          <section id="services" className="pt-24 md:pt-40 pb-10 md:pb-20 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="mb-8 md:mb-16 reveal-scroll">
                <h1 className="text-3xl sm:text-5xl md:text-8xl font-display tracking-tighter uppercase mb-3 md:mb-6 leading-[1] md:leading-[0.8]">
                  DESIGN <span className="text-zinc-300">&</span> <br /> DEVELOPMENT
                </h1>
                <p className="max-w-[240px] md:max-w-md text-zinc-500 font-bold uppercase tracking-[0.2em] text-[8px] md:text-xs">
                  Transforming complex ideas into bold, functional digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
                {SKILLS_LIST.map((skill) => (
                  <div key={skill.id} className="reveal-scroll">
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="py-16 md:py-32 px-4 md:px-8 bg-black text-white">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="reveal-scroll">
                <h2 className="text-3xl md:text-6xl font-display uppercase tracking-tighter mb-6 md:mb-10 leading-none">
                  CREATIVE <br /> AT HEART.
                </h2>
                <p className="text-sm md:text-xl text-zinc-400 font-medium leading-relaxed mb-8">
                  I’m Sandeep Barupal, a designer and developer based in India. I specialize in building products that don't just work—they make a statement.
                </p>
                <div className="flex gap-4">
                  {[Github, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" onClick={() => vibrate(10)} className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="reveal-scroll relative group">
                <div className="absolute inset-0 bg-[#fb923c] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-xl md:rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                  className="relative w-full aspect-square object-cover rounded-xl md:rounded-3xl border-2 border-black"
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="py-10 md:py-20 px-4 md:px-8 border-t-2 border-black bg-white">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
              <div className="reveal-scroll">
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-2 md:mb-4 block">GET IN TOUCH</span>
                <a href="mailto:hello@sandeep.in" onClick={() => vibrate(25)} className="text-xl md:text-6xl font-display uppercase tracking-tighter hover:text-zinc-400 transition-colors break-all">
                  hello@sandeep.in
                </a>
              </div>
              
              <div className="reveal-scroll text-left md:text-right w-full md:w-auto">
                <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">© 2024 SANDEEP BARUPAL</p>
                <div className="flex gap-4 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                  <a href="#" className="hover:underline">DRIBBBLE</a>
                  <a href="#" className="hover:underline">TWITTER</a>
                  <a href="#" className="hover:underline">LINKEDIN</a>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;