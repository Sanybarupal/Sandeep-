
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
  Mail
} from 'lucide-react';

const SKILLS_LIST = [
  { id: '01', title: 'UI/UX DESIGN', icon: <Layout />, color: 'bg-[#fde047]' },
  { id: '02', title: 'WEBSITE LAYOUT', icon: <Layers />, color: 'bg-[#bef264]' },
  { id: '03', title: 'RESPONSIVE DESIGN', icon: <Smartphone />, color: 'bg-[#a78bfa]' },
  { id: '04', title: 'WIREFRAMING', icon: <PenTool />, color: 'bg-[#fb923c]' },
  { id: '05', title: '3D MODELING', icon: <Box />, color: 'bg-[#3b82f6]' },
  { id: '06', title: 'REACT JS', icon: <Globe />, color: 'bg-[#fde047]' },
  { id: '07', title: 'TAILWIND CSS', icon: <Palette />, color: 'bg-[#bef264]' },
  { id: '08', title: 'THREE.JS', icon: <Cpu />, color: 'bg-[#a78bfa]' },
  { id: '09', title: 'JAVASCRIPT', icon: <Code2 />, color: 'bg-[#fb923c]' },
  { id: '10', title: 'WORDPRESS', icon: <Settings />, color: 'bg-[#3b82f6]' },
];

function Palette(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1s-.5-.8-.5-1.2c0-.9.7-1.6 1.6-1.6H17c2.8 0 5-2.2 5-5 0-5.5-4.5-10-10-10z" />
    </svg>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-white border-b-4 border-black' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#fb923c] bg-white/20"></div>
            <div className="w-8 h-8 rounded-full border-2 border-black bg-white/20"></div>
          </div>
          <span className="text-3xl font-display uppercase tracking-tighter">SK.</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-12">
          {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm font-bold tracking-[0.2em] text-zinc-600 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contact" 
            className="hire-me-btn bg-black text-white px-10 py-3 rounded-xl font-display text-sm uppercase tracking-widest"
          >
            HIRE ME
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8"><X size={40} /></button>
        {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-display uppercase tracking-tighter">{link}</a>
        ))}
      </div>
    </nav>
  );
};

const SkillCard = ({ skill }: { skill: typeof SKILLS_LIST[0] }) => (
  <div className={`brutalist-card ${skill.color} p-8 relative flex flex-col justify-between aspect-square group`}>
    <div className="flex justify-between items-start w-full">
      <div className="bg-white border-[3px] border-black p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all">
        {skill.icon}
      </div>
      <span className="text-sm font-display text-black/40">{skill.id}</span>
    </div>
    
    <div className="mt-auto">
      <h3 className="text-3xl font-display uppercase leading-tight tracking-tighter mb-4 pr-4">
        {skill.title}
      </h3>
      <div className="h-2 w-full bg-black/10 relative overflow-hidden rounded-full">
        <div className="h-full w-24 bg-black rounded-full transition-all group-hover:w-full"></div>
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
      <section id="services" className="pt-40 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-20 reveal-scroll">
            <h1 className="text-6xl md:text-9xl font-display tracking-tighter uppercase mb-6 leading-[0.8]">
              DESIGN <span className="text-zinc-300">&</span> <br /> DEVELOPMENT
            </h1>
            <p className="max-w-md text-zinc-500 font-bold uppercase tracking-widest text-xs">
              Transforming complex ideas into bold, functional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SKILLS_LIST.map((skill) => (
              <div key={skill.id} className="reveal-scroll">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple About Section */}
      <section id="about" className="py-32 px-8 bg-black text-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal-scroll">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-12">
              CREATIVE <br /> AT HEART.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed mb-8">
              I’m Sandeep Barupal, a designer and developer based in India. I specialize in building products that don't just work—they make a statement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 rounded-full border-2 border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full border-2 border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full border-2 border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="reveal-scroll relative group">
            <div className="absolute inset-0 bg-[#fb923c] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
              alt="Creative workspace"
              className="relative w-full aspect-square object-cover rounded-3xl border-4 border-black"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-8 border-t-4 border-black bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 mb-4 block">GET IN TOUCH</span>
            <a href="mailto:hello@sandeep.in" className="text-4xl md:text-6xl font-display uppercase tracking-tighter hover:text-zinc-500 transition-colors">
              hello@sandeep.in
            </a>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">© 2024 SANDEEP BARUPAL</p>
            <div className="flex justify-end gap-6 text-xs font-bold uppercase tracking-widest">
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
