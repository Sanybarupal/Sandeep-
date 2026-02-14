
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MoveUpRight,
  Instagram,
  Linkedin,
  Github,
  Layout,
  Layers,
  Smartphone,
  PenTool,
  Box,
  Globe,
  Monitor,
  Cpu,
  Code2,
  Database,
  Settings,
  Palette as PaletteIcon
} from 'lucide-react';

const SKILLS_LIST = [
  { id: '01', title: 'UI/UX DESIGN', icon: <Layout size={20} />, color: 'bg-[#fde047]' },
  { id: '02', title: 'WEBSITE LAYOUT', icon: <Layers size={20} />, color: 'bg-[#bef264]' },
  { id: '03', title: 'RESPONSIVE DESIGN', icon: <Smartphone size={20} />, color: 'bg-[#a78bfa]' },
  { id: '04', title: 'WIREFRAMING', icon: <PenTool size={20} />, color: 'bg-[#fb923c]' },
  { id: '05', title: '3D MODELING', icon: <Box size={20} />, color: 'bg-[#3b82f6]' },
  { id: '06', title: 'REACT JS', icon: <Globe size={20} />, color: 'bg-[#fde047]' },
  { id: '07', title: 'TAILWIND CSS', icon: <PaletteIcon size={20} />, color: 'bg-[#bef264]' },
  { id: '08', title: 'THREE.JS', icon: <Cpu size={20} />, color: 'bg-[#a78bfa]' },
  { id: '09', title: 'JAVASCRIPT', icon: <Code2 size={20} />, color: 'bg-[#fb923c]' },
  { id: '10', title: 'WORDPRESS', icon: <Settings size={20} />, color: 'bg-[#3b82f6]' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'bg-white border-b-2 md:border-b-4 border-black' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#fb923c] bg-white/20"></div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black bg-white/20"></div>
          </div>
          <span className="text-xl md:text-3xl font-display uppercase tracking-tighter">SK.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-xs font-bold tracking-[0.2em] text-zinc-600 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contact" 
            className="hire-me-btn bg-black text-white px-8 py-2.5 rounded-lg md:rounded-xl font-display text-xs uppercase tracking-widest"
          >
            HIRE ME
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6"><X size={32} /></button>
        {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-3xl font-display uppercase tracking-tighter hover:text-[#fb923c] transition-colors">{link}</a>
        ))}
        <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-10 py-4 rounded-xl font-display text-lg uppercase tracking-widest mt-4"
          >
            HIRE ME
          </a>
      </div>
    </nav>
  );
};

const SkillCard = ({ skill }: { skill: typeof SKILLS_LIST[0] }) => (
  <div className={`brutalist-card ${skill.color} p-4 md:p-8 relative flex flex-col justify-between aspect-square group`}>
    <div className="flex justify-between items-start w-full">
      <div className="bg-white border-2 md:border-[3px] border-black p-2 md:p-3 rounded-lg md:rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all">
        {skill.icon}
      </div>
      <span className="text-[10px] md:text-sm font-display text-black/40">{skill.id}</span>
    </div>
    
    <div className="mt-auto">
      <h3 className="text-lg md:text-3xl font-display uppercase leading-none md:leading-tight tracking-tighter mb-2 md:mb-4 pr-2 md:pr-4">
        {skill.title}
      </h3>
      <div className="h-1.5 md:h-2 w-full bg-black/10 relative overflow-hidden rounded-full">
        <div className="h-full w-12 md:w-24 bg-black rounded-full transition-all group-hover:w-full"></div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero / Skills Grid Section */}
      <section id="services" className="pt-28 md:pt-40 pb-12 md:pb-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-10 md:mb-20 reveal-scroll">
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-display tracking-tighter uppercase mb-4 md:mb-6 leading-[0.9] md:leading-[0.8]">
              DESIGN <span className="text-zinc-300">&</span> <br /> DEVELOPMENT
            </h1>
            <p className="max-w-[280px] md:max-w-md text-zinc-500 font-bold uppercase tracking-[0.2em] md:tracking-widest text-[10px] md:text-xs">
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

      {/* Simple About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-black text-white no-grid">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal-scroll">
            <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-6 md:mb-12">
              CREATIVE <br /> AT HEART.
            </h2>
            <p className="text-base md:text-2xl text-zinc-400 font-medium leading-relaxed mb-8">
              I’m Sandeep Barupal, a designer and developer based in India. I specialize in building products that don't just work—they make a statement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="reveal-scroll relative group px-2 md:px-0">
            <div className="absolute inset-0 bg-[#fb923c] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all rounded-2xl md:rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
              alt="Creative workspace"
              className="relative w-full aspect-square object-cover rounded-2xl md:rounded-3xl border-2 md:border-4 border-black"
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 md:py-20 px-4 md:px-8 border-t-2 md:border-t-4 border-black bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-2 md:mb-4 block">GET IN TOUCH</span>
            <a href="mailto:hello@sandeep.in" className="text-2xl md:text-6xl font-display uppercase tracking-tighter hover:text-zinc-500 transition-colors break-all">
              hello@sandeep.in
            </a>
          </div>
          
          <div className="w-full md:w-auto text-left md:text-right">
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">© 2024 SANDEEP BARUPAL</p>
            <div className="flex gap-4 md:gap-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:underline">DRIBBBLE</a>
              <a href="#" className="hover:underline">TWITTER</a>
              <a href="#" className="hover:underline">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
