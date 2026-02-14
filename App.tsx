
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
  ArrowRight,
  QrCode,
  Smile,
  Bitcoin,
  ExternalLink,
  MapPin
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
    { name: 'SKILLS', href: '#skills' },
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
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-black uppercase">S.B</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-display font-bold text-zinc-500 hover:text-black transition-colors tracking-[0.1em]"
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
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-black tracking-widest">{link.name}</a>
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
          <span className="text-white font-display font-bold text-2xl mx-12 flex items-center gap-6">
            3D ARTIST <span className="w-3 h-3 bg-orange-500 rounded-full"></span> 
            DEVELOPER <span className="w-3 h-3 bg-white rounded-full"></span> 
            DESIGNER <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const BentoFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto bg-zinc-950 rounded-[3rem] md:rounded-[5rem] p-6 md:p-14 text-white overflow-hidden shadow-2xl relative">
        
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-display font-bold text-white/[0.012] pointer-events-none select-none tracking-tighter whitespace-nowrap">
          SANDEEP
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          
          {/* Main Reach Card (Col 7) */}
          <div className="md:col-span-7 bg-zinc-900/80 backdrop-blur-sm rounded-[3rem] p-10 flex flex-col justify-between group overflow-hidden border border-white/5">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C1FF72]/10 rounded-full blur-[100px] group-hover:bg-[#C1FF72]/20 transition-all duration-1000"></div>
            
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-3 h-3 rounded-full bg-[#C1FF72] animate-pulse"></div>
                <h3 className="text-xs font-display font-bold tracking-[0.3em] text-zinc-500 uppercase">CONTACT ME</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {/* Phone */}
                <a href="tel:+917878142323" className="flex items-center gap-6 group/item max-w-fit">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover/item:bg-[#C1FF72] group-hover/item:text-black group-hover/item:-rotate-6 transition-all duration-500 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-display font-bold text-zinc-500 uppercase tracking-widest mb-1">CALL / WHATSAPP</p>
                    <p className="text-xl md:text-3xl font-display font-bold tracking-tighter group-hover/item:text-[#C1FF72] transition-colors">7878142323</p>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/itz_sandeep_97" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group/item max-w-fit">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover/item:bg-[#E4405F] group-hover/item:-rotate-6 transition-all duration-500 shadow-lg">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-display font-bold text-zinc-500 uppercase tracking-widest mb-1">INSTAGRAM</p>
                    <p className="text-xl md:text-3xl font-display font-bold tracking-tighter group-hover/item:text-[#E4405F] transition-colors">itz_sandeep_97</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/sandeep-barupal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group/item max-w-fit">
                  <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover/item:bg-[#0077B5] group-hover/item:-rotate-6 transition-all duration-500 shadow-lg">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-display font-bold text-zinc-500 uppercase tracking-widest mb-1">LINKEDIN</p>
                    <p className="text-xl md:text-3xl font-display font-bold tracking-tighter group-hover/item:text-[#0077B5] transition-colors">SANDEEP BARUPAL</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-14 flex items-center justify-between">
               <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-[#C1FF72]/40"></div>
                  ))}
               </div>
               <p className="text-[8px] font-display text-zinc-600 tracking-[0.4em] uppercase">VERIFIED DIGITAL CREATOR</p>
            </div>
          </div>

          {/* Avatar Visual (Col 5) */}
          <div className="md:col-span-5 h-full min-h-[450px] bg-[#8A5CF6] rounded-[3rem] overflow-hidden flex items-end justify-center group relative shadow-2xl transition-transform hover:scale-[0.99] duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img 
              src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Sandeep&backgroundColor=8A5CF6" 
              alt="Avatar" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
               <div className="bg-white text-black px-4 py-2 rounded-full font-display font-bold text-[10px] tracking-widest uppercase shadow-xl">
                 HEY THERE!
               </div>
            </div>
            <div className="absolute bottom-8 right-8 z-20 w-16 h-16 bg-[#C1FF72] rounded-full flex items-center justify-center text-black shadow-2xl transform group-hover:rotate-12 transition-all">
              <Smile size={32} />
            </div>
          </div>

          {/* Navigation (Col 3) */}
          <div className="md:col-span-3 bg-zinc-900 rounded-[3rem] p-10 border border-white/5 hover:border-[#C1FF72]/30 transition-all">
             <p className="text-[10px] font-display font-bold text-zinc-600 uppercase tracking-[0.3em] mb-10">MENU</p>
             <ul className="space-y-5">
              {['HOME', 'ABOUT', 'SERVICES', 'SKILLS'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="group flex items-center justify-between">
                    <span className="text-xl font-display font-bold tracking-tighter text-zinc-500 group-hover:text-white transition-colors">{item}</span>
                    <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-[#C1FF72] transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
             </ul>
          </div>

          {/* Stats & Quality (Col 6) */}
          <div className="md:col-span-6 bg-white rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative shadow-lg">
             <div className="relative z-10 mb-8 md:mb-0">
                <h4 className="text-black text-4xl font-display font-bold tracking-tighter uppercase leading-none mb-4">PREMIUM<br/>EXPERIENCE</h4>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-zinc-100 rounded-lg text-[10px] font-display font-bold text-black">DESIGN</div>
                   <div className="px-3 py-1 bg-zinc-100 rounded-lg text-[10px] font-display font-bold text-black">3D</div>
                   <div className="px-3 py-1 bg-zinc-100 rounded-lg text-[10px] font-display font-bold text-black">CODE</div>
                </div>
             </div>
             <div className="relative z-10 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end gap-2 text-black mb-1">
                   <span className="text-7xl font-display font-bold tracking-tighter">04</span>
                   <span className="text-2xl font-display font-bold text-[#8A5CF6] self-start mt-2">+</span>
                </div>
                <p className="text-zinc-400 text-[10px] font-display font-bold uppercase tracking-widest">YEARS OF JOURNEY</p>
             </div>
             <div className="absolute top-[-50%] left-[-20%] w-80 h-80 bg-zinc-50 rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
          </div>

          {/* Location / Availability (Col 3) */}
          <div className="md:col-span-3 bg-[#C1FF72] rounded-[3rem] p-10 flex flex-col justify-between group transition-all hover:shadow-[0_0_50px_rgba(193,255,114,0.3)] cursor-default">
            <div className="flex justify-between items-start">
              <MapPin className="text-black" size={28} />
              <div className="w-3 h-3 rounded-full bg-black animate-pulse"></div>
            </div>
            <div>
               <h4 className="text-black font-display font-bold tracking-tighter text-2xl uppercase leading-none">RAJASTHAN</h4>
               <p className="text-black/50 font-display font-bold text-[10px] uppercase tracking-widest mt-2">Available Globally</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          <div className="flex gap-12 text-zinc-600 font-display font-bold text-[10px] tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Copyright</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="h-[1px] w-12 bg-zinc-800 hidden md:block"></div>
             <p className="text-zinc-500 font-display font-bold text-[10px] tracking-widest uppercase text-center md:text-left">
               MADE BY SANDEEP BARUPAL • © {new Date().getFullYear()}
             </p>
             <div className="h-[1px] w-12 bg-zinc-800 hidden md:block"></div>
          </div>

          <button 
            onClick={scrollToTop}
            className="group w-16 h-16 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C1FF72] hover:text-black transition-all shadow-2xl active:scale-90"
          >
            <ChevronUp size={28} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  useIntersectionObserver();

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
              <h1 className="text-[10vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter text-black animate-reveal opacity-0">
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
            <p className="text-xl md:text-2xl font-medium text-zinc-500 font-display text-center uppercase tracking-widest">
              BASED IN INDIA.
            </p>
          </div>
          
          <div className="opacity-0 animate-[revealUp_0.8s_ease_forwards_0.6s]">
            <a 
              href="#contact"
              className="group relative bg-black text-white px-16 py-6 rounded-2xl font-display font-bold text-xl tracking-tighter hover:bg-orange-500 transition-all shadow-[8px_8px_0px_#C1FF72] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none inline-block active:translate-x-2 active:translate-y-2 active:shadow-none"
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
        <div className="absolute top-0 right-0 text-[30vw] font-display font-bold text-white/5 leading-none select-none pointer-events-none uppercase">
          ABOUT
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 reveal-scroll">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-orange-400 font-display font-bold text-sm tracking-[0.3em] uppercase block mb-6">Discovery</span>
              <h2 className="text-5xl md:text-[6vw] font-display font-bold mb-8 leading-[0.85] tracking-tighter uppercase">
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
                  <div className="text-3xl font-display font-bold uppercase text-white transition-colors flex items-end justify-between">
                    {stat.value}
                    <MoveUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 bg-white text-black px-6 border-y-4 border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12 reveal-scroll">
            <div>
              <span className="text-orange-500 font-display font-bold text-sm tracking-[0.4em] uppercase block mb-4">My Arsenal</span>
              <h2 className="text-7xl md:text-[9vw] font-display font-bold tracking-tighter uppercase italic leading-[0.8]">
                SKILLS <br /> <span className="text-zinc-200">& TOOLS</span>
              </h2>
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
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-display font-bold tracking-tighter leading-tight uppercase break-words transition-all group-hover:scale-105 origin-left">
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
            <h2 className="text-7xl md:text-[8vw] font-display font-bold tracking-tighter uppercase leading-none">OFFERINGS</h2>
            <p className="max-w-sm text-zinc-500 font-bold uppercase tracking-widest text-xs">High performance design and development solutions for modern brands.</p>
          </div>
          <div className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group border-t border-zinc-800 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white hover:text-black transition-all px-6 reveal-scroll"
              >
                <div className="flex items-center gap-10">
                  <span className="text-2xl font-display font-bold opacity-20 group-hover:opacity-100">0{idx + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">{service.title}</h3>
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

      {/* Updated Bento Footer */}
      <BentoFooter />
    </div>
  );
};

export default App;
