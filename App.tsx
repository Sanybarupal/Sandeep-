
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
  Twitter
} from 'lucide-react';
import { SERVICES, SKILLS } from './constants';

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
              className="text-sm font-medium text-zinc-500 hover:text-black transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:hello@sandeep.in" 
            className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
          >
            Get in touch
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-10 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-black"><X size={32} /></button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-display text-black tracking-tighter hover:italic transition-all">{link.name}</a>
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 px-8 overflow-hidden bg-white">
        <div className="max-w-[1400px] w-full flex flex-col items-center text-center relative">
          
          <div className="mb-10 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.1s]">
            <p className="text-xl md:text-2xl font-medium text-zinc-500 tracking-tight">
              👋 , my name is Sandeep and I am a freelance
            </p>
          </div>

          <div className="relative w-full flex flex-col items-center justify-center pointer-events-none select-none">
            <h1 className="text-[15vw] md:text-[13vw] font-display tracking-tighter leading-[0.85] text-zinc-950 uppercase z-0">
              3D Artist
            </h1>
            
            <h2 className="text-[15vw] md:text-[13vw] font-display tracking-tighter leading-[0.75] outlined-text-black uppercase z-20 -mt-[1vw]">
              & Developer
            </h2>

            {/* Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32vw] max-w-[380px] aspect-[4/5] z-10 opacity-0 animate-[revealUp_1.5s_ease_forwards_0.4s]">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                alt="Sandeep Barupal"
                className="w-full h-full object-cover grayscale brightness-105 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          <div className="mt-10 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.8s]">
            <p className="text-xl md:text-2xl text-zinc-400 font-medium">
              based in Rajasthan, India.
            </p>
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-0 animate-[revealUp_0.8s_ease_forwards_1.1s]">
            {['Three.js', 'React.js', 'Blender', 'Figma'].map(tool => (
              <span key={tool} className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-300 hover:text-black transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-zinc-50 text-black px-8 overflow-hidden border-y border-zinc-100">
        <div className="max-w-[1400px] mx-auto reveal-scroll">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-zinc-400 font-bold text-xs tracking-[0.4em] uppercase block mb-8">Creative Studio</span>
              <h2 className="text-5xl md:text-8xl font-display mb-10 leading-[0.9] tracking-tighter uppercase">
                ENGINEERING <br /> 
                <span className="text-zinc-300 italic">IMMERISVE</span> <br /> 
                REALITIES.
              </h2>
              <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed max-w-xl">
                I help forward-thinking brands build <span className="text-black">bespoke digital experiences</span> by merging 3D artistry with performance-driven code.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'EXPERIENCE', value: '04+', sub: 'Years' },
                { label: 'PROJECTS', value: '32', sub: 'Completed' },
                { label: 'CUPS OF CHAI', value: '∞', sub: 'Brewed' },
                { label: 'SATISFACTION', value: '100%', sub: 'Guaranteed' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 border border-zinc-100 hover:border-black transition-colors reveal-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-[10px] font-bold text-zinc-400 mb-6 tracking-widest uppercase">{stat.label}</div>
                  <div className="text-4xl font-display text-black mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 bg-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24 reveal-scroll">
            <h2 className="text-7xl md:text-9xl font-display tracking-tighter uppercase leading-none opacity-5 mb-[-0.2em] select-none">TOOLKIT</h2>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter uppercase relative z-10">THE ARSENAL</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, idx) => (
              <div 
                key={idx} 
                className="group p-10 border border-zinc-100 bg-white hover:bg-black hover:text-white transition-all duration-500 reveal-scroll"
                style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-12">
                   <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-zinc-800 transition-colors text-black group-hover:text-white">
                      {skill.icon}
                   </div>
                   <span className="text-[10px] font-bold tracking-[0.3em] opacity-20 uppercase">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                   </span>
                </div>
                <h3 className="text-lg font-display tracking-tight uppercase group-hover:italic transition-all">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-black text-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10 reveal-scroll">
             <h2 className="text-6xl md:text-8xl font-display tracking-tighter uppercase">OFFERINGS</h2>
             <p className="max-w-xs text-zinc-500 text-sm font-medium leading-relaxed">High performance design and development solutions tailored for modern digital standards.</p>
          </div>
          
          <div className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group border-t border-zinc-800 py-16 flex flex-col md:flex-row justify-between items-start md:items-center hover:px-8 transition-all duration-500 cursor-default reveal-scroll"
              >
                <div className="flex items-center gap-10">
                  <span className="text-xl font-display text-zinc-700 group-hover:text-zinc-100 transition-colors">0{idx + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter group-hover:italic transition-all">{service.title}</h3>
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
          <span className="text-zinc-400 font-bold text-xs tracking-[0.4em] uppercase block mb-10">Collaboration</span>
          <h2 className="text-[12vw] font-display tracking-tighter leading-none uppercase mb-16">
            Let's <span className="italic">BUILD</span>
          </h2>
          <a 
            href="mailto:hello@sandeep.in" 
            className="text-3xl md:text-6xl font-display hover:text-zinc-400 transition-all underline decoration-1 underline-offset-[16px] decoration-zinc-200 hover:decoration-black"
          >
            hello@sandeep.in
          </a>
        </div>
      </section>

      {/* Redesigned High-End Footer */}
      <footer className="bg-zinc-950 text-zinc-100 pt-40 pb-20 px-8 relative overflow-hidden">
        {/* Subtle Background Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-display text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap">
          BARUPAL
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            
            {/* Column 1: Intro */}
            <div className="lg:col-span-5 reveal-scroll">
              <h2 className="text-3xl font-display tracking-tighter uppercase mb-8">
                Sandeep <span className="text-zinc-600">Barupal</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-12 max-w-md">
                Bridging the gap between the <span className="text-white">imaginary</span> and the <span className="text-white">interactive</span>. Based in India, working globally.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, href: '#' },
                  { icon: <Linkedin size={20} />, href: '#' },
                  { icon: <Github size={20} />, href: '#' },
                  { icon: <Dribbble size={20} />, href: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-3 reveal-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-10">NAVIGATION</h3>
              <ul className="space-y-6">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="lg:col-span-4 reveal-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-10">SAY HELLO</h3>
              <div className="space-y-8">
                <a href="mailto:hello@sandeep.in" className="block text-2xl font-display hover:text-zinc-400 transition-colors uppercase tracking-tighter">hello@sandeep.in</a>
                <div className="text-sm font-bold text-zinc-400 tracking-widest leading-loose">
                  RAJASTHAN, INDIA<br />
                  +91 7878142323
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 reveal-scroll">
            <div className="flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
              <span>© {new Date().getFullYear()} Sandeep Barupal</span>
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-xs font-bold tracking-[0.4em] text-zinc-400 hover:text-white transition-all uppercase"
            >
              <span>Back to Top</span>
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
