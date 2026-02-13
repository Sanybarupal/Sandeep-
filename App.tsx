
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight,
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Palette,
  Code2,
  Wrench,
  ExternalLink
} from 'lucide-react';
import { SERVICES, SKILLS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter">SK.</a>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-display font-bold text-zinc-400 hover:text-white transition-colors tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-[60]">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold tracking-widest">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const FooterShapes = () => (
  <div className="flex flex-wrap gap-4 mt-8">
    {/* X Shape */}
    <div className="w-16 h-16 bg-[#8A5CF6] flex items-center justify-center rounded-2xl rotate-12">
      <div className="relative w-10 h-10">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2 -rotate-45"></div>
      </div>
    </div>
    {/* Dot Grid */}
    <div className="w-16 h-16 bg-[#C1FF72] grid grid-cols-3 gap-1 p-3 rounded-2xl">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
      ))}
    </div>
    {/* Pill Shape */}
    <div className="w-32 h-16 bg-[#8A5CF6] rounded-full"></div>
    {/* Semi-Circle */}
    <div className="w-16 h-16 bg-[#3B82F6] rounded-t-full mt-auto"></div>
    {/* Circle */}
    <div className="w-16 h-16 bg-[#FFDD00] rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const PROJECTS_3D = [
    {
      title: "G-FIELD COLLECTIBLE",
      category: "3D AIGC / DESIGN",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7uS3H7sH7S7S7S7S7S7S7S7S7S.png",
      description: "Custom 3D character design for a high-end digital toy collection."
    },
    {
      title: "LUFFY GEAR VISTA",
      category: "RENDER / UI",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8uS8H8S8H8S8H8S8H8S8H8S8H.png",
      description: "Interactive 3D web experience with high-fidelity anime rendering."
    },
    {
      title: "SPACE DORAEMON",
      category: "CONCEPT / ANIMATION",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9uS9H9S9H9S9H9S9H9S9H9S9H.png",
      description: "A futuristic rethink of a classic character using modern shading."
    },
    {
      title: "NEO TOY SERIES",
      category: "PRODUCT DESIGN",
      image: "https://picsum.photos/seed/neo3d/800/600",
      description: "Packaging and digital assets for upcoming vinyl toy releases."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="text-center relative z-20">
            <h1 className="text-[14vw] md:text-[12vw] font-display font-black leading-[0.75] mb-8 hero-gradient-text tracking-tighter">
              HI, I'M <br /> SANDEEP
            </h1>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg pointer-events-none z-10 flex justify-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8uS8H8S8H8S8H8S8H8S8H8S8H.png" 
              alt="3D Character" 
              className="w-full max-w-sm md:max-w-md drop-shadow-[0_40px_100px_rgba(255,255,255,0.15)] animate-float"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-12 gap-8 relative z-30">
            <div className="max-w-xs text-left">
              <p className="text-xs font-display font-bold text-zinc-500 mb-4 tracking-widest uppercase leading-relaxed">
                3D AIGC ARTIST & <br /> FRONT-END DEVELOPER ⚡️
              </p>
            </div>
            <div className="flex flex-col items-end">
              <a href="#portfolio" className="group flex items-center gap-4 text-xs font-display font-black tracking-widest text-white uppercase border-b-2 border-white pb-2 hover:text-indigo-400 hover:border-indigo-400 transition-all">
                EXPLORE PROJECTS <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 relative bg-zinc-950 overflow-hidden px-4 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-6xl md:text-8xl font-display font-black mb-10 leading-none tracking-tighter">
                CRAFTING <br /> <span className="text-indigo-500 italic">DIGITAL</span> <br /> REALMS.
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
                I specialize in bridging the gap between high-fidelity 3D modeling and cutting-edge web development. My work focuses on creating bold, memorable digital experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'EXPERIENCE', value: '4+ YEARS' },
                  { label: '3D PROJECTS', value: '25+' },
                  { label: 'TOOLS', value: 'MODERN' },
                  { label: 'PASSION', value: 'INFINITE' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 border border-zinc-800 rounded-2xl bg-black/40">
                    <div className="text-[10px] font-display font-bold text-zinc-500 mb-2 tracking-widest uppercase">{stat.label}</div>
                    <div className="text-2xl font-display font-black uppercase text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Skills Section (Compact) */}
      <section id="services" className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl md:text-8xl font-display font-black mb-12 tracking-tighter uppercase italic leading-none border-b-8 border-black inline-block">
                OFFERINGS
              </h2>
              <div className="space-y-6 mt-12">
                {SERVICES.slice(0, 3).map((service, idx) => (
                  <div key={idx} className="group border-b border-zinc-200 py-8 flex justify-between items-center transition-all hover:pl-4">
                    <h3 className="text-2xl font-display font-black uppercase">{service.title}</h3>
                    <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-6xl md:text-8xl font-display font-black mb-12 tracking-tighter uppercase italic leading-none border-b-8 border-black inline-block">
                TOOLS
              </h2>
              <div className="flex flex-wrap gap-3 mt-12">
                {SKILLS.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="px-5 py-3 border-2 border-black bg-white text-[10px] font-display font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all cursor-default shadow-[4px_4px_0px_#000]"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-[10vw] font-display font-black tracking-tighter uppercase italic leading-none mb-24">WORKS</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {PROJECTS_3D.map((project, idx) => (
              <div key={idx} className="group flex flex-col gap-8 cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white/5 border border-zinc-800/50 shadow-2xl transition-colors">
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black">
                       <ExternalLink size={32} />
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-3xl font-display font-black uppercase text-white">{project.title}</h3>
                  <p className="text-zinc-500 text-xs font-display tracking-widest uppercase mt-2">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED Contact Section to match the reference image */}
      <section id="contact" className="py-32 bg-white text-black px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-7xl md:text-[8vw] font-display font-black tracking-tighter leading-[0.8] uppercase">
                LET'S <br /> GET IN <br /> TOUCH
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center h-full">
              <a 
                href="mailto:sandeep@3dturner.com" 
                className="text-2xl md:text-4xl font-display font-black border-b-4 border-black hover:text-indigo-600 transition-colors break-all leading-tight uppercase underline decoration-2 underline-offset-8"
              >
                sandeep@3dturner.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with the Signature Brutalist shapes */}
      <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-20">
            {/* Left Column: Name and Shapes */}
            <div className="flex-1">
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none mb-8">
                SANDEEP <br /> KUMAR
              </h2>
              <FooterShapes />
            </div>

            {/* Right Column: Links */}
            <div className="flex flex-col md:flex-row gap-20 md:gap-32">
              <div>
                <h3 className="text-[10px] font-display font-black text-zinc-500 tracking-widest uppercase mb-10">SOCIAL</h3>
                <ul className="space-y-4 font-display font-bold text-sm tracking-[0.1em] uppercase">
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Artstation</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Behance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] font-display font-black text-zinc-500 tracking-widest uppercase mb-10">CONTACT</h3>
                <div className="space-y-4 font-display font-bold text-sm tracking-[0.1em] uppercase leading-loose">
                  <p>sandeep@3dturner.com</p>
                  <p>+91 (0) 000-000-0000</p>
                  <p className="text-zinc-500">
                    238 Creative Lane, Suite 4B<br />
                    Orange City, IN 440210
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-40 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-display font-bold tracking-[0.3em] text-zinc-600 uppercase">
             <div>© {new Date().getFullYear()} SANDEEP KUMAR DESIGN STUDIO</div>
             <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
                <a href="#" className="hover:text-white transition-colors">TERMS</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
