
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MoveUpRight,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  ChevronUp,
  Globe,
  MessageSquare
} from 'lucide-react';
import { SERVICES, SKILLS } from './constants';

const useIntersectionObserver = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

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
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded-full border-2 border-orange-400 bg-transparent animate-pulse"></div>
            <div className="w-5 h-5 rounded-full border-2 border-orange-400 bg-transparent animate-pulse delay-75"></div>
          </div>
          <a href="#home" className="text-2xl font-display font-black tracking-tighter text-black uppercase">S.B</a>
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
            href="#contact" 
            className="bg-black text-white px-6 py-2.5 rounded-lg text-xs font-display font-bold hover:bg-orange-500 transition-all shadow-[4px_4px_0px_#fb923c] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            HIRE ME
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
  <div className="bg-black py-6 overflow-hidden flex whitespace-nowrap border-y-4 border-black relative z-20">
    <div className="flex animate-marquee items-center">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-white font-display font-black text-3xl mx-12 flex items-center gap-6">
            3D ARTIST <span className="w-3 h-3 bg-orange-500 rounded-full"></span> 
            DEVELOPER <span className="w-3 h-3 bg-white rounded-full"></span> 
            DESIGNER <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const FooterShapes = () => (
  <div className="flex flex-wrap gap-4 mt-12">
    <div className="w-16 h-16 bg-[#8A5CF6] flex items-center justify-center rounded-2xl rotate-12 transition-transform hover:rotate-0 hover:scale-110 cursor-pointer">
      <div className="relative w-10 h-10">
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-black -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-black -translate-y-1/2 -rotate-45"></div>
      </div>
    </div>
    <div className="w-16 h-16 bg-[#C1FF72] grid grid-cols-3 gap-1 p-3 rounded-2xl transition-transform hover:scale-110 cursor-pointer">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-full h-full bg-black rounded-full"></div>
      ))}
    </div>
    <div className="w-28 h-16 bg-[#FFDD00] rounded-full flex items-center justify-center transition-transform hover:-rotate-6 hover:scale-105 cursor-pointer">
      <div className="w-20 h-3 bg-black rounded-full"></div>
    </div>
    <div className="w-16 h-16 bg-white rounded-full border-4 border-black flex items-center justify-center group cursor-pointer transition-transform hover:rotate-180">
      <div className="w-6 h-6 bg-orange-500 rounded-full group-hover:bg-purple-500 transition-colors"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  useIntersectionObserver();

  const SKILL_COLORS = [
    'bg-[#FFDD00]', // Yellow
    'bg-[#C1FF72]', // Lime
    'bg-[#8A5CF6]', // Purple
    'bg-[#fb923c]', // Orange
    'bg-[#3B82F6]', // Blue
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-transparent overflow-hidden">
        <div className="mb-12 flex items-center gap-2 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.1s]">
          <span className="text-2xl">👋</span>
          <p className="text-lg md:text-xl font-medium text-zinc-600 uppercase tracking-widest font-display">
            Sandeep Barupal
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

        <div className="w-full max-w-7xl mt-16 flex flex-col items-center gap-12">
          <div className="opacity-0 animate-[revealUp_0.8s_ease_forwards_0.4s]">
            <p className="text-xl md:text-2xl font-medium text-zinc-500 font-display text-center">
              BASED IN INDIA.
            </p>
          </div>
          
          <div className="opacity-0 animate-[revealUp_0.8s_ease_forwards_0.6s]">
            <a 
              href="#contact"
              className="group relative bg-black text-white px-16 py-6 rounded-2xl font-display font-black text-xl tracking-tighter hover:bg-orange-500 transition-all shadow-[8px_8px_0px_#C1FF72] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none inline-block active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              HIRE ME
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-20 grayscale pointer-events-none animate-[revealUp_0.8s_ease_forwards_0.8s]">
            <span className="font-bold text-lg tracking-tighter uppercase font-display">React</span>
            <span className="font-bold text-lg tracking-tighter uppercase font-display">Three.js</span>
            <span className="font-bold text-lg tracking-tighter uppercase font-display">Blender</span>
            <span className="font-bold text-lg tracking-tighter uppercase font-display">Figma</span>
          </div>
        </div>
      </section>

      <Marquee />

      {/* About Section */}
      <section id="about" className="py-40 relative bg-black text-white overflow-hidden px-6">
        {/* Background text class will be scaled down to 17vw via CSS injection in index.html */}
        <div className="absolute top-0 right-0 text-[30vw] font-display font-black text-white/5 leading-none select-none pointer-events-none">
          ABOUT
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 reveal-scroll">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-orange-400 font-display font-bold text-sm tracking-[0.3em] uppercase block mb-6">Introduction</span>
              <h2 className="text-5xl md:text-[6vw] font-display font-black mb-8 leading-[0.85] tracking-tighter uppercase">
                BEYOND THE <br /> 
                <span className="text-white italic relative inline-block">
                  PIXELS
                  <span className="absolute bottom-1 left-0 w-full h-1 md:h-2 bg-orange-400 -z-10"></span>
                </span> 
                <br /> & POLYGONS.
              </h2>
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-tight mb-8">
                  I'm Sandeep Barupal, a multidisciplinary creator bridging the gap between <span className="text-white">high-fidelity 3D modeling</span> and <span className="text-white">advanced web architecture</span>.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed mb-12 border-l-4 border-orange-400 pl-8 italic">
                  "My goal is to craft digital experiences that aren't just seen, but felt. From the precision of a 3D mesh to the performance of a React component, every detail matters."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24">
              {[
                { label: 'EXPERIENCE', value: '4+ YEARS', color: 'border-orange-400' },
                { label: '3D PROJECTS', value: '25+', color: 'border-purple-400' },
                { label: 'SATISFACTION', value: '100%', color: 'border-[#C1FF72]' },
                { label: 'PASSION', value: 'INFINITE', color: 'border-blue-400' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`group p-8 border-2 ${stat.color} bg-zinc-900 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none cursor-default reveal-scroll`}
                  style={{ transitionDelay: `${i * 100}ms` }}
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

      {/* Modern High-Impact Skills Section */}
      <section id="skills" className="py-40 bg-white text-black px-6 border-y-4 border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12 reveal-scroll">
            <div>
              <span className="text-orange-500 font-display font-bold text-sm tracking-[0.4em] uppercase block mb-4">My Arsenal</span>
              <h2 className="text-7xl md:text-[9vw] font-display font-black tracking-tighter uppercase italic leading-[0.8]">
                SKILLS <br /> <span className="text-zinc-200">& TOOLS</span>
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs leading-loose">
                Mastering the balance between aesthetics and functionality using industry-leading technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SKILLS.map((skill, idx) => {
              const cardColor = SKILL_COLORS[idx % SKILL_COLORS.length];
              return (
                <div 
                  key={idx} 
                  className={`group relative p-6 border-4 border-black ${cardColor} transition-all hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#000] cursor-default reveal-scroll min-h-[200px] flex flex-col justify-between overflow-hidden shadow-[6px_6px_0px_#000]`}
                  style={{ transitionDelay: `${(idx % 5) * 50}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-white border-2 border-black rounded-xl group-hover:rotate-12 transition-transform shadow-sm">
                        {skill.icon}
                     </div>
                     <span className="text-[10px] font-display font-black tracking-widest uppercase opacity-30 group-hover:opacity-100">
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                     </span>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base lg:text-lg font-display font-black tracking-tighter leading-tight uppercase break-words transition-all group-hover:scale-105 origin-left">
                      {skill.name}
                    </h3>
                    <div className="w-full h-1 bg-black/10 group-hover:bg-black/100 transition-colors mt-3"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal-scroll">
            <h2 className="text-7xl md:text-[8vw] font-display font-black tracking-tighter uppercase leading-none">OFFERINGS</h2>
            <p className="max-w-sm text-zinc-500 font-bold uppercase tracking-widest text-xs">High performance design and development solutions for modern brands.</p>
          </div>
          <div className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group border-t border-zinc-800 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white hover:text-black transition-all px-6 reveal-scroll"
              >
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

      {/* Redesigned Contact Section */}
      <section id="contact" className="py-40 bg-[#FFDD00] text-black px-6 md:px-12 border-t-8 border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto reveal-scroll relative z-10">
          <div className="flex flex-col gap-12 mb-24">
            <div className="relative">
              <h2 className="text-[15vw] md:text-[12vw] font-display font-black tracking-tighter leading-[0.75] uppercase mb-4">
                LET'S <br /> 
                <span className="outlined-text-black">GET IN</span> <br /> 
                TOUCH
              </h2>
              <div className="absolute top-1/2 right-0 hidden lg:block rotate-12 -translate-y-1/2">
                <div className="w-72 h-72 bg-black rounded-full flex items-center justify-center text-[#FFDD00] font-display font-black text-center p-10 leading-tight text-2xl shadow-[20px_20px_0px_rgba(0,0,0,0.2)] animate-float">
                  SAY HELLO!
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <a 
                href="https://instagram.com/itz_sandeep_97" 
                target="_blank" 
                rel="noreferrer"
                className="group p-10 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0px_#8A5CF6] flex flex-col gap-8 h-full active:shadow-none"
              >
                <Instagram size={48} className="group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-display font-black text-xs tracking-widest uppercase mb-4 opacity-50">Instagram</div>
                  <div className="text-2xl font-display font-black tracking-tighter uppercase italic break-all">itz_sandeep_97</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/Sandeep-Barupal" 
                target="_blank" 
                rel="noreferrer"
                className="group p-10 bg-white text-black border-4 border-black hover:bg-black hover:text-white transition-all shadow-[12px_12px_0px_#3B82F6] flex flex-col gap-8 h-full active:shadow-none"
              >
                <Linkedin size={48} className="group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-display font-black text-xs tracking-widest uppercase mb-4 opacity-50">LinkedIn</div>
                  <div className="text-2xl font-display font-black tracking-tighter uppercase italic break-all">Sandeep Barupal</div>
                </div>
              </a>

              <div className="group p-10 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0px_#C1FF72] flex flex-col gap-8 h-full active:shadow-none">
                <Phone size={48} className="group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-display font-black text-xs tracking-widest uppercase mb-4 opacity-50">Phone</div>
                  <div className="text-2xl font-display font-black tracking-tighter uppercase italic">+91 7878142323</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Refined Footer */}
      <footer className="bg-zinc-950 text-white pt-40 pb-20 px-6 md:px-12 border-t-8 border-black relative overflow-hidden">
        {/* Background Decorative Large Text - Class text-[30vw] is targeted in CSS to be 17vw */}
        <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 text-[30vw] font-display font-black text-white/[0.03] pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap">
          BARUPAL
        </div>

        <div className="max-w-7xl mx-auto relative z-10 reveal-scroll">
          <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase">SANDEEP BARUPAL</h2>
              </div>
              <p className="text-2xl text-zinc-500 font-medium max-w-xl leading-snug mb-12">
                Engineering digital marvels at the intersection of <span className="text-white italic">design precision</span> and <span className="text-white italic">computational power</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#contact" className="px-10 py-5 bg-white text-black font-display font-black text-sm uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  START A PROJECT
                </a>
                <FooterShapes />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24">
              <div className="flex flex-col gap-8">
                <h3 className="text-[10px] font-display font-black text-zinc-600 tracking-[0.5em] uppercase">NAVIGATION</h3>
                <ul className="space-y-5 font-display font-bold text-xs tracking-[0.2em] uppercase">
                  <li><a href="#home" className="hover:text-orange-500 transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-3 h-0.5 bg-orange-500 transition-all"></span> HOME</a></li>
                  <li><a href="#about" className="hover:text-purple-500 transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-3 h-0.5 bg-purple-500 transition-all"></span> ABOUT</a></li>
                  <li><a href="#services" className="hover:text-[#C1FF72] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-3 h-0.5 bg-[#C1FF72] transition-all"></span> SERVICES</a></li>
                  <li><a href="#skills" className="hover:text-blue-500 transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-3 h-0.5 bg-blue-500 transition-all"></span> SKILLS</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-8">
                <h3 className="text-[10px] font-display font-black text-zinc-600 tracking-[0.5em] uppercase">SOCIALS</h3>
                <ul className="space-y-5 font-display font-bold text-xs tracking-[0.2em] uppercase">
                  <li><a href="https://instagram.com/itz_sandeep_97" target="_blank" className="hover:text-orange-500 transition-colors flex items-center gap-3 group"><Instagram size={14} className="group-hover:rotate-12 transition-transform" /> INSTAGRAM</a></li>
                  <li><a href="https://linkedin.com/in/Sandeep-Barupal" target="_blank" className="hover:text-blue-500 transition-colors flex items-center gap-3 group"><Linkedin size={14} className="group-hover:rotate-12 transition-transform" /> LINKEDIN</a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3 group"><Globe size={14} className="group-hover:rotate-12 transition-transform" /> ARTSTATION</a></li>
                  <li><a href="mailto:hello@sandeep.com" className="hover:text-purple-500 transition-colors flex items-center gap-3 group"><Mail size={14} className="group-hover:rotate-12 transition-transform" /> EMAIL ME</a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-8 col-span-2 md:col-span-1">
                <h3 className="text-[10px] font-display font-black text-zinc-600 tracking-[0.5em] uppercase">OFFICE</h3>
                <div className="font-display font-bold text-[10px] tracking-[0.2em] uppercase leading-relaxed text-zinc-500">
                  <p className="mb-4">RAJASTHAN, IN<br />PIN: 335512</p>
                  <p className="flex items-center gap-2 mb-2 text-white"><Phone size={10} /> +91 7878142323</p>
                  <p className="flex items-center gap-2 text-white"><MessageSquare size={10} /> @itz_sandeep_97</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="text-[9px] font-display font-bold tracking-[0.5em] text-zinc-700 uppercase">
               © {new Date().getFullYear()} SANDEEP BARUPAL DESIGN STUDIO. BUILT WITH PASSION.
            </div>
            
            <div className="flex items-center gap-12">
               <div className="hidden lg:flex gap-8 text-[9px] font-display font-bold text-zinc-700 tracking-[0.3em] uppercase">
                  <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                  <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
               </div>
               <button 
                onClick={scrollToTop}
                className="group w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center overflow-hidden border-2 border-black hover:bg-orange-500 transition-all active:scale-95 shadow-[4px_4px_0px_rgba(255,255,255,0.05)]"
              >
                <div className="group-hover:-translate-y-20 transition-transform duration-500 flex flex-col items-center gap-20">
                  <ChevronUp className="text-black" size={20} />
                  <ChevronUp className="text-white" size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
