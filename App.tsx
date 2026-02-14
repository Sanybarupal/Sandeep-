
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
    <div className="min-h-screen selection:bg-black selection:text-white">
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

      {/* Reimagined About Section */}
      <section id="about" className="py-40 bg-white text-black px-8 overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start relative">
            
            {/* Left Col: The Big Statement */}
            <div className="lg:w-1/2 sticky top-40 reveal-scroll">
              <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-200 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-zinc-500">
                A Little Bit About Me
              </span>
              <h2 className="text-6xl md:text-8xl font-display leading-[0.85] tracking-tighter uppercase mb-12">
                I BUILD <span className="text-zinc-300 italic">DIGITAL</span> SCULPTURES.
              </h2>
              <div className="space-y-8 max-w-lg">
                <p className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed">
                  My work is the intersection where <span className="text-black">3D fidelity</span> meets the fluid possibilities of <span className="text-black">web technology</span>. 
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  I believe that every digital touchpoint should be an experience, not just a transaction. By combining brutalist aesthetics with high-end performance, I create interfaces that leave a lasting impression.
                </p>
              </div>
            </div>

            {/* Right Col: Stats & Philosophy */}
            <div className="lg:w-1/2 w-full space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-scroll">
                {[
                  { icon: <Zap size={20} />, label: 'Experience', value: '4+ Years', desc: 'Crafting digital products' },
                  { icon: <Sparkles size={20} />, label: 'Projects', value: '30+', desc: 'Bespoke web solutions' },
                  { icon: <Globe size={20} />, label: 'Location', value: 'Rajasthan', desc: 'Working with clients globally' },
                  { icon: <Target size={20} />, label: 'Focus', value: '3D/Dev', desc: 'Performance-led immersion' }
                ].map((item, i) => (
                  <div key={i} className="group p-10 border border-zinc-100 hover:border-black transition-all duration-500 bg-zinc-50/50">
                    <div className="mb-6 p-3 bg-white w-fit shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-3xl font-display text-black mb-2">{item.value}</div>
                    <div className="text-xs font-medium text-zinc-500">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Philosophy Card */}
              <div className="bg-black text-white p-12 md:p-16 reveal-scroll relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={120} />
                 </div>
                 <h3 className="text-3xl font-display tracking-tight uppercase mb-8 leading-none">The Philosophy</h3>
                 <p className="text-xl text-zinc-400 leading-relaxed font-medium mb-10 italic">
                  "Complexity is easy, simplicity is hard. I strive to strip away the noise until only the core essence of the brand remains, then I make it move."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-zinc-700"></div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">Sandeep Barupal</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reimagined Skills Section */}
      <section id="skills" className="py-40 bg-white px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal-scroll">
             <div className="relative">
                <span className="text-zinc-300 font-bold text-[10vw] absolute -top-[0.6em] left-0 pointer-events-none opacity-20 select-none font-display leading-none">TOOLKIT</span>
                <h2 className="text-5xl md:text-7xl font-display tracking-tighter uppercase relative z-10">THE ARSENAL</h2>
             </div>
             <p className="max-w-xs text-zinc-400 text-sm font-medium leading-relaxed border-l border-zinc-100 pl-6">
                A curated stack of technologies I use to bridge the gap between imagination and browser.
             </p>
          </div>

          {/* Grid Layout - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-100 border border-zinc-100 overflow-hidden">
            
            {/* Core Stack Block */}
            <div className="md:col-span-8 bg-white p-12 md:p-20 reveal-scroll">
              <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase mb-12">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                {SKILLS.slice(0, 6).map((skill, idx) => (
                  <div key={idx} className="group flex flex-col gap-6">
                    <div className="p-4 bg-zinc-50 w-fit group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-display uppercase tracking-tight mb-2 group-hover:italic transition-all">{skill.name}</h4>
                      <div className="w-8 h-[2px] bg-zinc-100 group-hover:w-full group-hover:bg-zinc-200 transition-all duration-700"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Tools Block */}
            <div className="md:col-span-4 bg-zinc-50 p-12 md:p-20 reveal-scroll">
               <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase mb-12">Environment</h3>
               <div className="space-y-12">
                  {SKILLS.slice(6, 11).map((skill, idx) => (
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

            {/* Design Tools Block */}
            <div className="md:col-span-12 bg-white p-12 reveal-scroll border-t border-zinc-100">
               <div className="flex flex-wrap gap-x-16 gap-y-10 items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
                  {SKILLS.slice(11).map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                       <span className="text-black">{skill.icon}</span>
                       <span className="text-xs font-bold tracking-widest uppercase">{skill.name}</span>
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
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-display text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap">
          BARUPAL
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            
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
