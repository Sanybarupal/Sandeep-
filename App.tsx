
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
  ArrowRight,
  Dribbble,
  Github,
  Twitter,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { SERVICES, SKILLS, PROJECTS } from './constants';

const useIntersectionObserver = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
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
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-8 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-4 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display tracking-tighter text-black uppercase group">
          Sandeep <span className="text-zinc-300 group-hover:text-black transition-colors">Barupal</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:hello@sandeep.in" 
            className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
          >
            Work with me
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-10 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-black"><X size={32} /></button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-display text-black tracking-tighter hover:italic transition-all uppercase">{link.name}</a>
        ))}
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  useIntersectionObserver();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 px-8 overflow-hidden bg-white">
        <div className="max-w-[1400px] w-full flex flex-col items-center text-center relative">
          
          <div className="mb-10 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.1s]">
            <p className="text-sm md:text-lg font-bold text-zinc-400 tracking-[0.4em] uppercase">
              Independent Digital Architect
            </p>
          </div>

          <div className="relative w-full flex flex-col items-center justify-center pointer-events-none select-none">
            <h1 className="text-[18vw] md:text-[14vw] font-display tracking-tighter leading-[0.8] text-zinc-950 uppercase z-0">
              CREATIVE
            </h1>
            
            <h2 className="text-[18vw] md:text-[14vw] font-display tracking-tighter leading-[0.8] outlined-text-black uppercase z-20">
              DEVELOPER
            </h2>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] max-w-[400px] aspect-[4/5] z-10 opacity-0 animate-[revealUp_1.5s_ease_forwards_0.4s]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Sandeep Barupal Profile"
                className="w-full h-full object-cover grayscale brightness-90 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border-8 border-white"
              />
            </div>
          </div>

          <div className="mt-12 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.8s] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-zinc-200"></span>
            <p className="text-lg md:text-xl text-zinc-500 font-medium tracking-tight">
              Based in Rajasthan — crafting for the world.
            </p>
            <span className="w-12 h-[1px] bg-zinc-200"></span>
          </div>

          {/* Scrolling Marquee Tooltip */}
          <div className="mt-20 w-full overflow-hidden whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity">
            <div className="inline-block animate-[marquee_30s_linear_infinite]">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-xs font-bold tracking-[0.5em] uppercase mx-10">
                  THREE.JS • REACT.JS • NEXT.JS • BLENDER • FIGMA • WEBGL • TYPESCRIPT • GSAP •
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-white text-black px-8 overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start relative">
            
            <div className="lg:w-1/2 sticky top-40 reveal-scroll">
              <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-200 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-zinc-500">
                01. Identity
              </span>
              <h2 className="text-6xl md:text-8xl font-display leading-[0.85] tracking-tighter uppercase mb-12">
                Digital <span className="text-zinc-300 italic">Evolution</span> Specialist.
              </h2>
              <div className="space-y-8 max-w-lg">
                <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed">
                  I bridge the gap between <span className="text-black">complex code</span> and <span className="text-black">intuitive design</span>. 
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                  With over 4 years of experience, I've helped brands transcend the standard web grid into immersive territories. My approach is rooted in technical precision and aesthetic courage.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-scroll">
                {[
                  { icon: <Zap size={20} />, label: 'Experience', value: '4+ Years', desc: 'Crafting digital experiences' },
                  { icon: <Sparkles size={20} />, label: 'Projects', value: '50+', desc: 'High-end deliverables' },
                  { icon: <Globe size={20} />, label: 'Reach', value: 'Global', desc: 'Remote-first philosophy' },
                  { icon: <Target size={20} />, label: 'Core', value: 'Fullstack', desc: 'Design to deployment' }
                ].map((item, i) => (
                  <div key={i} className="group p-10 border border-zinc-100 hover:border-black transition-all duration-500 bg-zinc-50/50">
                    <div className="mb-6 p-3 bg-white w-fit shadow-sm group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-3xl font-display text-black mb-2">{item.value}</div>
                    <div className="text-xs font-medium text-zinc-500">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-black text-white p-12 md:p-16 reveal-scroll relative overflow-hidden group">
                 <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={200} />
                 </div>
                 <h3 className="text-2xl font-display tracking-tight uppercase mb-8 leading-none">Philosophy</h3>
                 <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-10 italic">
                  "Good design is obvious. Great design is transparent. I build interfaces that feel natural but look like they're from the future."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-zinc-800"></div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-600">Sandeep Barupal</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 bg-zinc-50 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal-scroll">
            <div className="relative">
              <span className="text-zinc-200 font-bold text-[10vw] absolute -top-[0.6em] left-0 pointer-events-none select-none font-display leading-none">SELECTED</span>
              <h2 className="text-6xl md:text-8xl font-display tracking-tighter uppercase relative z-10">WORKS</h2>
            </div>
            <p className="max-w-xs text-zinc-400 text-sm font-bold uppercase tracking-widest leading-relaxed border-l border-zinc-200 pl-6">
              A curated selection of my most impactful digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group reveal-scroll overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-zinc-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <MoveUpRight size={32} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 tracking-[0.3em] uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-display uppercase tracking-tighter mb-4 group-hover:italic transition-all">{project.title}</h3>
                    <p className="text-zinc-500 max-w-md font-medium">{project.description}</p>
                  </div>
                  <span className="text-zinc-300 font-display text-4xl">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 bg-white px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal-scroll">
             <div className="relative">
                <span className="text-zinc-300 font-bold text-[10vw] absolute -top-[0.6em] left-0 pointer-events-none opacity-20 select-none font-display leading-none">TOOLKIT</span>
                <h2 className="text-5xl md:text-7xl font-display tracking-tighter uppercase relative z-10">THE ARSENAL</h2>
             </div>
             <p className="max-w-xs text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed border-l border-zinc-100 pl-6">
                Technical stack refined through hundreds of hours of production.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-100 border border-zinc-100 overflow-hidden">
            <div className="md:col-span-8 bg-white p-12 md:p-20 reveal-scroll">
              <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase mb-12">Development & Core</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                {SKILLS.slice(5, 11).map((skill, idx) => (
                  <div key={idx} className="group flex flex-col gap-6">
                    <div className="p-4 bg-zinc-50 w-fit group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-display uppercase tracking-tight mb-2 group-hover:italic transition-all">{skill.name}</h4>
                      <div className="w-8 h-[2px] bg-zinc-100 group-hover:w-full group-hover:bg-black transition-all duration-700"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-zinc-50 p-12 md:p-20 reveal-scroll">
               <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase mb-12">Creative Engine</h3>
               <div className="space-y-12">
                  {SKILLS.slice(0, 5).map((skill, idx) => (
                    <div key={idx} className="flex justify-between items-center group cursor-default">
                       <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold text-zinc-300">0{idx + 1}</span>
                          <span className="text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform">{skill.name}</span>
                       </div>
                       <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight size={14} className="text-zinc-400" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="md:col-span-12 bg-white p-12 reveal-scroll border-t border-zinc-100">
               <div className="flex flex-wrap gap-x-16 gap-y-10 items-center justify-center">
                  {SKILLS.slice(11).map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4 group hover:grayscale-0 grayscale transition-all">
                       <span className="text-black">{skill.icon}</span>
                       <span className="text-[10px] font-bold tracking-widest uppercase">{skill.name}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-black text-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10 reveal-scroll">
             <h2 className="text-6xl md:text-8xl font-display tracking-tighter uppercase">SERVICES</h2>
             <p className="max-w-xs text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase leading-loose">
               Tailored solutions for high-growth ventures and established brands.
             </p>
          </div>
          
          <div className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group border-t border-zinc-800 py-16 flex flex-col md:flex-row justify-between items-start md:items-center hover:px-8 transition-all duration-500 cursor-default reveal-scroll"
              >
                <div className="flex items-center gap-10">
                  <span className="text-xl font-display text-zinc-700 group-hover:text-zinc-100 transition-colors">0{idx + 1}</span>
                  <div className="flex flex-col">
                    <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter group-hover:italic transition-all">{service.title}</h3>
                    <p className="text-zinc-500 text-sm max-w-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{service.description}</p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 opacity-0 group-hover:opacity-100 transition-all translate-x-10 group-hover:translate-x-0">
                   <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <MoveUpRight size={24} />
                   </div>
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-800"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-white text-black px-8">
        <div className="max-w-[1400px] mx-auto text-center reveal-scroll">
          <span className="text-zinc-400 font-bold text-[10px] tracking-[0.5em] uppercase block mb-10">READY FOR THE NEXT MOVE?</span>
          <h2 className="text-[12vw] font-display tracking-tighter leading-none uppercase mb-16">
            Let's <span className="italic">BUILD</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <a 
              href="mailto:hello@sandeep.in" 
              className="text-3xl md:text-7xl font-display hover:text-zinc-400 transition-all underline decoration-1 underline-offset-[24px] decoration-zinc-200 hover:decoration-black"
            >
              hello@sandeep.in
            </a>
            <p className="text-zinc-400 font-bold tracking-widest text-xs uppercase mt-12">+91 78781 42323</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-100 pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[25vw] font-display text-white/[0.02] pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap uppercase">
          BARUPAL
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            
            <div className="lg:col-span-5 reveal-scroll">
              <h2 className="text-3xl font-display tracking-tighter uppercase mb-8">
                Sandeep <span className="text-zinc-600">Barupal</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-12 max-w-md">
                Defining the <span className="text-white">standard</span> of the modern web through technical excellence and visual bravery.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, href: '#' },
                  { icon: <Linkedin size={20} />, href: '#' },
                  { icon: <Github size={20} />, href: '#' },
                  { icon: <Twitter size={20} />, href: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 reveal-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase mb-10">DIRECTORY</h3>
              <ul className="space-y-6">
                {['Home', 'About', 'Projects', 'Services', 'Skills', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-xs font-bold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 reveal-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase mb-10">LOCATION</h3>
              <div className="space-y-8">
                <div className="text-xs font-bold text-zinc-400 tracking-[0.2em] leading-loose">
                  Udaipur, Rajasthan<br />
                  India, 313001
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 reveal-scroll">
            <div className="flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
              <span>© {new Date().getFullYear()} SANDEEP BARUPAL</span>
              <a href="#" className="hover:text-zinc-400 transition-colors">Digital Studio</a>
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-xs font-bold tracking-[0.4em] text-zinc-500 hover:text-white transition-all uppercase"
            >
              <span>Elevate</span>
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white group-hover:-translate-y-1 transition-all">
                <ChevronUp size={20} />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
