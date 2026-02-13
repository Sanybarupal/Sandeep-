
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ExternalLink,
  Github, 
  Linkedin, 
  Twitter,
  MoveUpRight
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
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded-full border-2 border-orange-400 bg-transparent"></div>
            <div className="w-5 h-5 rounded-full border-2 border-orange-400 bg-transparent"></div>
          </div>
          <a href="#home" className="text-2xl font-display font-black tracking-tighter text-black">SK.</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-display font-bold text-zinc-500 hover:text-black transition-colors tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:hello@sandeep.com" 
            className="bg-black text-white px-6 py-2.5 rounded-lg text-xs font-display font-bold hover:bg-orange-500 transition-all shadow-[4px_4px_0px_#fb923c]"
          >
            GET IN TOUCH
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black p-2 border-2 border-black rounded-lg">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-[60]">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-black"><X size={32} /></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display font-black text-black tracking-widest">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Marquee = () => (
  <div className="bg-black py-4 overflow-hidden flex whitespace-nowrap border-y-2 border-black">
    <div className="flex animate-marquee items-center">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white font-display font-black text-2xl mx-10 flex items-center gap-4">
            3D ARTIST <span className="w-2 h-2 bg-orange-500 rounded-full"></span> 
            DEVELOPER <span className="w-2 h-2 bg-white rounded-full"></span> 
            UI/UX DESIGNER <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const FooterShapes = () => (
  <div className="flex flex-wrap gap-4 mt-8">
    <div className="w-16 h-16 bg-[#8A5CF6] flex items-center justify-center rounded-2xl rotate-12">
      <div className="relative w-10 h-10">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2 -rotate-45"></div>
      </div>
    </div>
    <div className="w-16 h-16 bg-[#C1FF72] grid grid-cols-3 gap-1 p-3 rounded-2xl">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
      ))}
    </div>
    <div className="w-32 h-16 bg-[#8A5CF6] rounded-full"></div>
    <div className="w-16 h-16 bg-[#3B82F6] rounded-t-full mt-auto"></div>
    <div className="w-16 h-16 bg-[#FFDD00] rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Cleaned up and Animated */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="mb-12 flex items-center gap-2 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.1s]">
          <span className="text-2xl">👋</span>
          <p className="text-lg md:text-xl font-medium text-zinc-600">
            , my name is Sandeep and I am a freelance
          </p>
        </div>

        <div className="relative w-full max-w-7xl">
          <div className="relative z-0 text-center select-none flex flex-col items-center">
            <div className="reveal-container mb-2">
              <h1 className="text-[10vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter text-black animate-reveal opacity-0">
                3D Artist
              </h1>
            </div>
            <div className="reveal-container">
              <h2 className="text-[10vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter outlined-text-black animate-reveal delay-200 opacity-0">
                & Developer
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          <div className="text-left opacity-0 animate-[revealUp_0.8s_ease_forwards_0.4s]">
            <p className="text-xl md:text-2xl font-medium text-zinc-500">
              based in India.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center z-20 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.6s]">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-zinc-800 transition-all w-full md:w-auto shadow-[4px_4px_0px_#C1FF72]">
              3D Design Inquiries
            </button>
            <button className="bg-white text-black border-2 border-black px-8 py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-zinc-50 transition-all w-full md:w-auto shadow-[4px_4px_0px_#fb923c]">
              Development Projects
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 opacity-20 grayscale pointer-events-none animate-[revealUp_0.8s_ease_forwards_0.8s]">
            <span className="font-bold text-lg tracking-tighter">React</span>
            <span className="font-bold text-lg tracking-tighter">Three.js</span>
            <span className="font-bold text-lg tracking-tighter">Blender</span>
            <span className="font-bold text-lg tracking-tighter">Figma</span>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Improved About Section */}
      <section id="about" className="py-40 relative bg-black text-white overflow-hidden px-6">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 text-[30vw] font-display font-black text-white/5 leading-none select-none pointer-events-none">
          ABOUT
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-orange-400 font-display font-bold text-sm tracking-[0.3em] uppercase block mb-6">Introduction</span>
              <h2 className="text-6xl md:text-[7vw] font-display font-black mb-12 leading-[0.9] tracking-tighter">
                BEYOND THE <br /> 
                <span className="text-white italic relative inline-block">
                  PIXELS
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-400 -z-10"></span>
                </span> 
                <br /> & POLYGONS.
              </h2>
              <div className="max-w-2xl">
                <p className="text-2xl md:text-3xl text-zinc-400 font-medium leading-tight mb-8">
                  I'm Sandeep Kumar, a multidisciplinary creator bridging the gap between <span className="text-white">high-fidelity 3D modeling</span> and <span className="text-white">advanced web architecture</span>.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed mb-12 border-l-4 border-orange-400 pl-8 italic">
                  "My goal is to craft digital experiences that aren't just seen, but felt. From the precision of a 3D mesh to the performance of a React component, every detail matters."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24">
              {[
                { label: 'EXPERIENCE', value: '4+ YEARS', color: 'border-orange-400', shadow: 'shadow-orange-400/20' },
                { label: '3D PROJECTS', value: '25+', color: 'border-purple-400', shadow: 'shadow-purple-400/20' },
                { label: 'SATISFACTION', value: '100%', color: 'border-[#C1FF72]', shadow: 'shadow-[#C1FF72]/20' },
                { label: 'PASSION', value: 'INFINITE', color: 'border-blue-400', shadow: 'shadow-blue-400/20' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`group p-8 border-2 ${stat.color} bg-zinc-900 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none cursor-default`}
                >
                  <div className="text-[10px] font-display font-bold text-zinc-500 mb-4 tracking-widest uppercase">{stat.label}</div>
                  <div className="text-3xl font-display font-black uppercase text-white group-hover:text-white transition-colors flex items-end justify-between">
                    {stat.value}
                    <MoveUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Restored Grid Style */}
      <section id="skills" className="py-40 bg-white text-black px-6 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-[10vw] font-display font-black tracking-tighter uppercase italic leading-none mb-24 border-b-8 border-black inline-block">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {SKILLS.map((skill, idx) => (
              <div 
                key={idx} 
                className="group p-6 border-2 border-black bg-white aspect-square flex flex-col justify-between hover:bg-black hover:text-white transition-all cursor-default shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <span className="text-[10px] font-display font-black tracking-widest uppercase opacity-40 group-hover:opacity-100">0{idx + 1}</span>
                <h3 className="text-xl font-display font-black tracking-tighter leading-none break-words uppercase">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Restored Brutalist List */}
      <section id="services" className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-7xl md:text-[8vw] font-display font-black tracking-tighter uppercase leading-none">OFFERINGS</h2>
            <p className="max-w-sm text-zinc-500 font-bold uppercase tracking-widest text-xs">High performance design and development solutions for modern brands.</p>
          </div>
          <div className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group border-t border-zinc-800 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white hover:text-black transition-all px-6">
                <div className="flex items-center gap-10">
                  <span className="text-2xl font-display font-black opacity-20 group-hover:opacity-100">0{idx + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter">{service.title}</h3>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                   <p className="hidden md:block max-w-xs text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity">{service.description}</p>
                   <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
                      <ArrowUpRight size={32} />
                   </div>
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-800"></div>
          </div>
        </div>
      </section>

      {/* Contact Section - Restored Brutalist style */}
      <section id="contact" className="py-40 bg-white text-black px-6 md:px-12 border-t-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-7xl md:text-[8vw] font-display font-black tracking-tighter leading-[0.8] uppercase">
                LET'S <br /> GET IN <br /> TOUCH
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center h-full">
              <a 
                href="mailto:hello@sandeep.com" 
                className="text-2xl md:text-5xl font-display font-black border-b-8 border-black hover:text-orange-400 hover:border-orange-400 transition-all break-all leading-tight uppercase underline decoration-4 underline-offset-12"
              >
                hello@sandeep.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Brutalist Footer */}
      <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-20">
            <div className="flex-1">
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none mb-8">
                SANDEEP <br /> KUMAR
              </h2>
              <FooterShapes />
            </div>

            <div className="flex flex-col md:flex-row gap-20 md:gap-32">
              <div>
                <h3 className="text-[10px] font-display font-black text-zinc-500 tracking-widest uppercase mb-10">SOCIAL</h3>
                <ul className="space-y-4 font-display font-bold text-sm tracking-[0.1em] uppercase">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Artstation</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] font-display font-black text-zinc-500 tracking-widest uppercase mb-10">CONTACT</h3>
                <div className="space-y-4 font-display font-bold text-sm tracking-[0.1em] uppercase leading-loose">
                  <p>hello@sandeep.com</p>
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
