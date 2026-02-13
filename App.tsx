
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
  MessageSquare,
  ArrowRight
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
            href="mailto:hello@sandeep.com" 
            className="bg-black text-white px-6 py-2.5 rounded-lg text-xs font-display font-bold hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_#fb923c]"
          >
            hello@sandeep.in
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

const App: React.FC = () => {
  useIntersectionObserver();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Bazil Inspired */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="max-w-7xl w-full flex flex-col items-center text-center relative">
          
          {/* Top Intro */}
          <div className="mb-8 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.1s]">
            <p className="text-xl md:text-2xl font-medium text-zinc-800 tracking-tight">
              👋 , my name is Sandeep and I am a freelance
            </p>
          </div>

          {/* Main Layered Typography */}
          <div className="relative w-full flex flex-col items-center justify-center pointer-events-none">
            <h1 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-none text-zinc-950 uppercase select-none z-0">
              3D Artist
            </h1>
            
            {/* Outline Text Below */}
            <h2 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] outlined-text-black uppercase select-none z-20 mt-[-2vw]">
              & Developer
            </h2>

            {/* Central Portrait Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] max-w-[400px] aspect-[4/5] z-10 opacity-0 animate-[revealUp_1.2s_ease_forwards_0.3s]">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop" 
                alt="Sandeep Barupal"
                className="w-full h-full object-cover grayscale brightness-110 shadow-2xl"
              />
            </div>
          </div>

          {/* Location Text */}
          <div className="mt-8 opacity-0 animate-[revealUp_0.8s_ease_forwards_0.6s]">
            <p className="text-xl md:text-2xl text-zinc-600 tracking-tight">
              based in Rajasthan, India.
            </p>
          </div>

          {/* Partner/Brand Logos */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale opacity-0 animate-[revealUp_0.8s_ease_forwards_0.8s]">
            <span className="font-bold text-sm tracking-widest uppercase">React.js</span>
            <span className="font-bold text-sm tracking-widest uppercase">Three.js</span>
            <span className="font-bold text-sm tracking-widest uppercase">Blender</span>
            <span className="font-bold text-sm tracking-widest uppercase">Figma</span>
            <span className="font-bold text-sm tracking-widest uppercase">Adobe</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 opacity-0 animate-[revealUp_0.8s_ease_forwards_1s]">
            <a 
              href="#services" 
              className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all border-2 border-black"
            >
              You need a designer
            </a>
            <a 
              href="#contact" 
              className="bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all border-2 border-black"
            >
              You need a developer
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 relative bg-zinc-50 text-black overflow-hidden px-6 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto relative z-10 reveal-scroll">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-orange-500 font-display font-bold text-sm tracking-[0.3em] uppercase block mb-6">Introduction</span>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                ENGINEERING <br /> 
                <span className="text-zinc-400 italic">CREATIVE</span> <br /> 
                SYSTEMS.
              </h2>
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-tight mb-8">
                  I specialize in building <span className="text-black">bespoke digital experiences</span> that combine 3D fidelity with state-of-the-art web technology.
                </p>
                <div className="space-y-6 text-zinc-500 text-lg leading-relaxed">
                  <p>
                    With over 4 years of experience, I bridge the gap between design theory and technical execution. My work focus is on high-performance interactive interfaces and immersive virtual environments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24">
              {[
                { label: 'EXPERIENCE', value: '4+ YEARS', color: 'border-zinc-300' },
                { label: '3D MODELS', value: '30+', color: 'border-zinc-300' },
                { label: 'CLIENTS', value: 'GLOBAL', color: 'border-zinc-300' },
                { label: 'VIBE', value: 'BRUTALIST', color: 'border-zinc-300' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`group p-8 border ${stat.color} bg-white transition-all hover:-translate-y-1 hover:shadow-xl cursor-default reveal-scroll`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-[10px] font-display font-bold text-zinc-400 mb-4 tracking-widest uppercase">{stat.label}</div>
                  <div className="text-3xl font-display font-black uppercase text-black transition-colors flex items-end justify-between">
                    {stat.value}
                    <MoveUpRight size={16} className="text-orange-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 bg-white text-black px-6 border-b border-zinc-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12 reveal-scroll">
            <div>
              <span className="text-zinc-400 font-display font-bold text-sm tracking-[0.4em] uppercase block mb-4">My Arsenal</span>
              <h2 className="text-7xl md:text-[9vw] font-display font-black tracking-tighter uppercase italic leading-[0.8]">
                SKILLS <br /> <span className="text-zinc-100">& TOOLS</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SKILLS.map((skill, idx) => (
              <div 
                key={idx} 
                className={`group relative p-8 border border-zinc-100 bg-white transition-all hover:-translate-y-2 hover:shadow-2xl cursor-default reveal-scroll min-h-[180px] flex flex-col justify-between overflow-hidden shadow-sm`}
                style={{ transitionDelay: `${(idx % 5) * 50}ms` }}
              >
                <div className="flex justify-between items-start">
                   <div className="p-3 bg-zinc-50 rounded-xl group-hover:bg-black group-hover:text-white transition-all">
                      {skill.icon}
                   </div>
                   <span className="text-[10px] font-display font-black tracking-widest uppercase opacity-20">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                   </span>
                </div>
                <div>
                  <h3 className="text-base font-display font-black tracking-tighter uppercase leading-tight">
                    {skill.name}
                  </h3>
                  <div className="w-12 h-1 bg-zinc-100 group-hover:w-full group-hover:bg-black transition-all mt-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-zinc-950 text-white px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto reveal-scroll relative z-10 text-center">
          <h2 className="text-[12vw] font-display font-black tracking-tighter leading-none uppercase mb-12">
            LET'S TALK
          </h2>
          
          <div className="flex flex-col items-center gap-12">
            <a href="mailto:hello@sandeep.in" className="text-4xl md:text-7xl font-display font-bold hover:text-zinc-400 transition-colors underline decoration-orange-500 underline-offset-8">
              hello@sandeep.in
            </a>
            
            <div className="flex gap-8 mt-8">
              <a href="#" className="hover:text-orange-500 transition-colors uppercase font-bold tracking-widest text-sm">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition-colors uppercase font-bold tracking-widest text-sm">LinkedIn</a>
              <a href="#" className="hover:text-orange-500 transition-colors uppercase font-bold tracking-widest text-sm">Dribbble</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-zinc-400 py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-display font-black tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} SANDEEP BARUPAL — PORTFOLIO
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
