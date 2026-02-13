
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
  <div className="flex flex-wrap gap-4 mt-8">
    <div className="w-14 h-14 bg-[#8A5CF6] flex items-center justify-center rounded-xl rotate-12 transition-transform hover:rotate-0 hover:scale-110 cursor-pointer">
      <div className="relative w-8 h-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 -rotate-45"></div>
      </div>
    </div>
    <div className="w-14 h-14 bg-[#C1FF72] grid grid-cols-3 gap-1 p-3 rounded-xl transition-transform hover:scale-110 cursor-pointer">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-full h-full bg-black rounded-full"></div>
      ))}
    </div>
    <div className="w-24 h-14 bg-[#FFDD00] rounded-full flex items-center justify-center transition-transform hover:-rotate-6 hover:scale-105 cursor-pointer">
      <div className="w-16 h-2 bg-black rounded-full"></div>
    </div>
    <div className="w-14 h-14 bg-white rounded-full border-4 border-black flex items-center justify-center group cursor-pointer transition-transform hover:rotate-180">
      <div className="w-5 h-5 bg-orange-500 rounded-full group-hover:bg-purple-500 transition-colors"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  useIntersectionObserver();

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
            3D ARTIST & DEVELOPER
          </p>
        </div>

        <div className="relative w-full max-w-7xl">
          <div className="relative z-0 text-center select-none flex flex-col items-center">
            <div className="reveal-container mb-2">
              <h1 className="text-[10vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter text-black animate-reveal opacity-0">
                Sandeep
              </h1>
            </div>
            <div className="reveal-container">
              <h2 className="text-[10vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter outlined-text-black animate-reveal delay-200 opacity-0">
                Barupal
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

      {/* Improved About Section */}
      <section id="about" className="py-40 relative bg-black text-white overflow-hidden px-6">
        <div className="absolute top-0 right-0 text-[30vw] font-display font-black text-white/5 leading-none select-none pointer-events-none">
          ABOUT
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 reveal-scroll">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-orange-400 font-display font-bold text-sm tracking-[0.3em] uppercase block mb-6">Discovery</span>
              <h2 className="text-5xl md:text-[6vw] font-display font-black mb-8 leading-[0.85] tracking-tighter uppercase">
                CRAFTING THE <br /> 
                <span className="text-white italic relative inline-block">
                  DIGITAL
                  <span className="absolute bottom-1 left-0 w-full h-1 md:h-2 bg-orange-400 -z-10"></span>
                </span> 
                <br /> DIMENSION.
              </h2>
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-tight mb-8">
                  I am Sandeep Barupal, a multidisciplinary designer and developer specializing in <span className="text-orange-400">immersive 3D environments</span> and high-performance web applications.
                </p>
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    My expertise lies at the intersection of technical precision and artistic vision. I build digital experiences that aren't just visually striking but are architecturally sound and user-centric.
                  </p>
                  <p className="border-l-4 border-orange-400 pl-8 italic text-zinc-300">
                    "From sculpting the perfect 3D mesh in Blender to architecting robust React applications, I am committed to pushing the boundaries of what's possible on the web."
                  </p>
                  <p>
                    Based in India, I collaborate with global brands to transform complex problems into intuitive, interactive realities that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-24">
              {[
                { label: 'EXPERIENCE', value: '4+ YEARS', color: 'border-orange-400' },
                { label: '3D PROJECTS', value: '30+', color: 'border-purple-400' },
                { label: 'CLIENTS', value: 'GLOBAL', color: 'border-[#C1FF72]' },
                { label: 'CREATIVITY', value: 'UNBOUND', color: 'border-blue-400' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`group p-8 border-2 ${stat.color} bg-zinc-900 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none cursor-default reveal-scroll`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-[10px] font-display font-bold text-zinc-500 mb-4 tracking-widest uppercase">{stat.label}</div>
                  <div className="text-3xl font-display font-black uppercase text-white transition-colors flex items-end justify-between">
                    {stat.value}
                    <MoveUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Skills Section */}
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
            {SKILLS.map((skill, idx) => (
              <div 
                key={idx} 
                className={`group relative p-6 border-4 border-black bg-white transition-all hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#000] cursor-default reveal-scroll min-h-[200px] flex flex-col justify-between overflow-hidden shadow-[6px_6px_0px_#000]`}
                style={{ transitionDelay: `${(idx % 5) * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-zinc-50 border-2 border-black rounded-xl group-hover:rotate-12 group-hover:bg-zinc-100 transition-all shadow-sm">
                      <div className="text-black group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                   </div>
                   <span className="text-[10px] font-display font-black tracking-widest uppercase opacity-30 group-hover:opacity-100">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                   </span>
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-display font-black tracking-tighter leading-tight uppercase break-words transition-all group-hover:scale-105 origin-left">
                    {skill.name}
                  </h3>
                  <div className="w-full h-1 bg-zinc-100 group-hover:bg-orange-500 transition-colors mt-3"></div>
                </div>
              </div>
            ))}
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
      <footer className="bg-zinc-950 text-white pt-32 pb-16 px-6 md:px-12 border-t-8 border-black relative overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[18vw] font-display font-black text-white/[0.02] pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap z-0">
          BARUPAL
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-20 mb-24">
            <div className="reveal-scroll">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-500 rounded-lg rotate-12"></div>
                <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase">SANDEEP BARUPAL</h2>
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-lg leading-relaxed mb-10">
                Pioneering digital frontiers through <span className="text-white">creative engineering</span> and <span className="text-white">3D mastery</span>.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-zinc-500 text-sm font-display font-bold tracking-widest uppercase">
                  <span className="w-8 h-[2px] bg-orange-500"></span>
                  STAY IN THE LOOP
                </div>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="bg-zinc-900 border-2 border-zinc-800 px-6 py-4 w-full max-w-xs font-display font-bold text-xs uppercase tracking-widest focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button className="bg-orange-500 text-white px-6 py-4 hover:bg-white hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 reveal-scroll">
              <div className="flex flex-col gap-6">
                <h3 className="text-[10px] font-display font-black text-orange-500 tracking-[0.4em] uppercase">MENU</h3>
                <ul className="space-y-4 font-display font-bold text-[11px] tracking-[0.15em] uppercase text-zinc-400">
                  <li><a href="#home" className="hover:text-white transition-colors">HOME</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">ABOUT</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">SERVICES</a></li>
                  <li><a href="#skills" className="hover:text-white transition-colors">SKILLS</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-[10px] font-display font-black text-orange-500 tracking-[0.4em] uppercase">SOCIAL</h3>
                <ul className="space-y-4 font-display font-bold text-[11px] tracking-[0.15em] uppercase text-zinc-400">
                  <li><a href="https://instagram.com/itz_sandeep_97" target="_blank" className="hover:text-white transition-colors">INSTAGRAM</a></li>
                  <li><a href="https://linkedin.com/in/Sandeep-Barupal" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ARTSTATION</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">TWITTER</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
                <h3 className="text-[10px] font-display font-black text-orange-500 tracking-[0.4em] uppercase">LOCATION</h3>
                <div className="font-display font-bold text-[11px] tracking-[0.15em] uppercase text-zinc-400 leading-loose">
                  RAJASTHAN, IN<br />
                  335512<br />
                  <span className="text-white mt-2 block">+91 7878142323</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="pt-12 border-t border-zinc-900 flex flex-col lg:flex-row justify-between items-center gap-12 reveal-scroll">
            <div className="flex flex-col gap-2">
              <FooterShapes />
              <div className="text-[10px] font-display font-black tracking-[0.3em] text-zinc-600 uppercase mt-4">
                © {new Date().getFullYear()} SANDEEP BARUPAL STUDIO. NO PIXELS WERE HARMED.
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden lg:flex gap-8 text-[9px] font-display font-bold text-zinc-700 tracking-[0.2em] uppercase">
                <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
                <a href="#" className="hover:text-white transition-colors">LEGAL</a>
              </div>
              <button 
                onClick={scrollToTop}
                className="group relative w-16 h-16 bg-white border-4 border-black flex items-center justify-center transition-all hover:bg-orange-500 hover:scale-110 active:scale-95 shadow-[6px_6px_0px_rgba(255,165,0,0.2)]"
              >
                <ChevronUp size={28} className="text-black group-hover:text-white transition-colors" />
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[9px] font-display font-bold tracking-widest text-white uppercase">TOP</div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
