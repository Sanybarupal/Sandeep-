
import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowUpRight, 
  Instagram,
  Linkedin,
  Phone,
  ChevronUp,
  Globe,
  Smile,
  MapPin,
  Share2,
  Grid,
  Code2,
  Palette,
  Layout,
  PenTool,
  Cpu,
  ShieldCheck,
  Layers,
  Settings,
  QrCode,
  Figma
} from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'SERVICES', id: 'services' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] py-6 transition-all duration-300 ${scrolled || activeSection !== 'home' ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setActiveSection('home')}
            className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-lg group cursor-pointer hover:border-[#E11D48] transition-all bg-black"
          >
            <Smile className={`transition-all ${activeSection === 'home' ? 'text-[#E11D48] scale-110' : 'text-zinc-600'}`} size={20} />
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => setActiveSection(link.id)}
              className={`text-[10px] font-display font-bold transition-all tracking-[0.3em] uppercase relative py-2 group ${activeSection === link.id ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#E11D48] transition-all duration-500 ${activeSection === link.id ? 'w-full' : 'w-0'}`}></span>
            </button>
          ))}
          <button className="text-zinc-500 hover:text-white transition-colors">
            <Share2 size={18} />
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 border border-zinc-800 rounded-lg">
          {isOpen ? <X /> : <Grid size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-[60]">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => { setActiveSection(link.id); setIsOpen(false); }} 
              className={`text-4xl font-display font-bold tracking-widest uppercase italic transition-all ${activeSection === link.id ? 'text-[#E11D48]' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const RotatingBadge = () => (
  <div className="absolute top-32 right-12 md:right-32 z-20 hidden sm:block">
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
        <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
        <text className="text-[6px] font-display font-bold uppercase tracking-[0.4em] fill-zinc-600">
          <textPath xlinkHref="#badgePath">DESIGN • DEVELOP • SECURE • REPEAT • 2025 • </textPath>
        </text>
      </svg>
      <div className="text-center group cursor-default">
        <p className="text-[10px] font-display font-black text-white tracking-widest leading-none border-b border-[#E11D48] pb-1 mb-1 uppercase group-hover:text-[#E11D48] transition-colors">SANDEEP</p>
      </div>
    </div>
  </div>
);

const SectionSidebar = ({ label }: { label: string }) => (
  <div className="absolute left-6 md:left-12 bottom-24 md:bottom-32 z-20 flex flex-col gap-4">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i} 
        className={`w-1 h-10 md:h-16 rounded-full transition-all duration-1000 ${i === 2 ? 'bg-[#E11D48] shadow-[0_0_20px_rgba(225,29,72,0.6)] h-16 md:h-24' : 'bg-zinc-900'}`}
      />
    ))}
    <div className="mt-8 origin-left -rotate-90 translate-x-3">
      <span className="text-[10px] md:text-xs font-display font-black tracking-[0.6em] text-zinc-400 uppercase whitespace-nowrap">
        {label}
      </span>
    </div>
  </div>
);

const Hero = ({ isActive }: { isActive: boolean }) => {
  const rotatingContent = [
    { text: "Web Designer", icon: <Globe className="text-teal-400 w-16 h-16 md:w-28 md:h-28" /> },
    { text: "Web Developer", icon: <Code2 className="text-blue-400 w-16 h-16 md:w-28 md:h-28" /> },
    { text: "UI Component Engineer", icon: <Layers className="text-pink-400 w-16 h-16 md:w-28 md:h-28" /> },
    { text: "Content Writer", icon: <PenTool className="text-orange-400 w-16 h-16 md:w-28 md:h-28" /> },
    { text: "Security Learner", icon: <ShieldCheck className="text-green-400 w-16 h-16 md:w-28 md:h-28" /> },
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingContent.length);
        setIsVisible(true);
      }, 700);
    }, 4500);
    return () => clearInterval(timer);
  }, [rotatingContent.length, isActive]);

  if (!isActive) return null;

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center animate-[fadeIn_1s_ease_forwards]">
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 px-6 z-10 w-full max-w-7xl justify-center">
        <div 
          className={`flex items-center justify-center transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-12 scale-50 rotate-[45deg]'
          }`}
        >
          {rotatingContent[index].icon}
        </div>

        <div className="text-center md:text-left min-h-[100px] md:min-h-[150px] flex items-center min-w-[320px] md:min-w-[800px]">
          <h1 
            className={`text-5xl md:text-[11vw] font-display font-bold text-white tracking-tighter leading-none transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-20 blur-xl'
            }`}
          >
            {rotatingContent[index].text}
          </h1>
        </div>
      </div>

      <div className="absolute left-10 md:left-24 bottom-16 md:bottom-24 z-20">
        <h2 className="text-5xl md:text-[7vw] font-display font-bold text-white tracking-tighter leading-[0.8] select-none italic">
          Sandeep<br/>Barupal
        </h2>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-[#E11D48]"></div>
          <p className="text-[10px] md:text-xs font-display font-bold text-zinc-500 uppercase tracking-[0.4em]">
            RAJASTHAN BASED • AVAILABLE FOR PROJECTS
          </p>
        </div>
      </div>

      <RotatingBadge />
    </section>
  );
};

const ShowcaseSection = ({ id, label, items, interval = 5000, isActive }: { id: string, label: string, items: any[], interval?: number, isActive: boolean }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, 700);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, isActive]);

  if (!isActive) return null;

  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center animate-[fadeIn_1s_ease_forwards]">
      <SectionSidebar label={label} />
      
      <div className="max-w-7xl mx-auto px-10 md:px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10">
        <div 
          className={`flex items-center justify-center transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-16 scale-75 rotate-12'
          }`}
        >
          {items[index].icon}
        </div>

        <div className="text-left min-h-[300px] md:min-h-[450px] flex flex-col justify-center max-w-3xl">
          <h2 
            className={`text-5xl md:text-[9.5vw] font-display font-bold text-white tracking-tighter leading-none transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-24 blur-2xl'
            }`}
          >
            {items[index].name || items[index].title}
          </h2>
          <p 
            className={`text-zinc-500 text-lg md:text-3xl mt-10 font-medium leading-relaxed transition-all duration-1000 delay-150 transform ${
              isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'
            }`}
          >
            {items[index].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {items.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-1000 rounded-full ${i === index ? 'w-16 bg-[#E11D48]' : 'w-4 bg-zinc-900'}`}
          />
        ))}
      </div>
    </section>
  );
};

const BentoFooter = ({ isActive, setActiveSection }: { isActive: boolean, setActiveSection: (s: string) => void }) => {
  if (!isActive) return null;

  return (
    <footer className="bg-black relative h-screen overflow-hidden flex flex-col justify-center px-4 md:px-12 animate-[fadeIn_1s_ease_forwards]">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16 md:mb-24">
        <h2 className="text-6xl md:text-[10vw] font-display font-bold text-white/5 tracking-tighter leading-none uppercase italic hover:text-white/10 transition-colors duration-1000 select-none">
          LET'S CREATE
        </h2>
        <h3 className="text-5xl md:text-[7vw] font-display font-bold text-white tracking-tighter leading-none uppercase mt-[-2vw]">
          SOMETHING <span className="text-[#E11D48]">BOLD</span>
        </h3>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 w-full overflow-y-auto max-h-[60vh] md:max-h-none md:overflow-visible pr-2">
        
        {/* Contact Bento */}
        <div className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 group transition-all hover:bg-zinc-800/60 overflow-hidden relative">
           <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[200px] font-black group-hover:opacity-[0.07] transition-opacity">HI</div>
           <div>
              <div className="flex items-center gap-4 mb-10 md:mb-16">
                 <div className="w-3 h-3 rounded-full bg-[#E11D48] animate-pulse"></div>
                 <span className="text-xs font-display font-black text-zinc-600 tracking-[0.5em] uppercase">HIRE ME</span>
              </div>
              
              <div className="space-y-10 md:space-y-16">
                 <a href="tel:+917878142323" className="block group/link">
                    <p className="text-zinc-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-2 md:mb-4">DIRECT ACCESS</p>
                    <div className="flex items-center gap-4 md:gap-6">
                       <span className="text-3xl md:text-6xl font-display font-bold text-white tracking-tighter group-hover/link:text-[#C1FF72] transition-all">
                         +91 7878142323
                       </span>
                       <ArrowUpRight className="text-[#E11D48] opacity-0 group-hover/link:opacity-100 transition-all translate-y-4 group-hover/link:translate-y-0" size={48} />
                    </div>
                 </a>

                 <div className="flex flex-wrap gap-8 md:gap-10">
                    <a href="https://instagram.com/itz_sandeep_97" target="_blank" className="flex items-center gap-4 group/social">
                       <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-800 flex items-center justify-center group-hover/social:bg-[#E4405F] group-hover/social:rotate-[-8deg] transition-all">
                          <Instagram className="text-white" size={20} />
                       </div>
                       <span className="text-zinc-400 font-bold tracking-tighter group-hover/social:text-white transition-colors text-base md:text-lg">ITZ_SANDEEP_97</span>
                    </a>
                    <a href="https://linkedin.com/in/sandeep-barupal" target="_blank" className="flex items-center gap-4 group/social">
                       <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-zinc-800 flex items-center justify-center group-hover/social:bg-[#0077B5] group-hover/social:rotate-[8deg] transition-all">
                          <Linkedin className="text-white" size={20} />
                       </div>
                       <span className="text-zinc-400 font-bold tracking-tighter group-hover/social:text-white transition-colors text-base md:text-lg">SANDEEP BARUPAL</span>
                    </a>
                 </div>
              </div>
           </div>
        </div>

        {/* Status Bento */}
        <div className="md:col-span-4 bg-[#C1FF72] rounded-[3rem] md:rounded-[4rem] p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative transition-transform hover:scale-[1.02]">
           <div className="flex justify-between items-start">
              <Smile size={48} className="text-black group-hover:rotate-12 transition-transform duration-500" />
              <div className="bg-black text-[#C1FF72] px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase">
                 ONLINE NOW
              </div>
           </div>
           <div>
              <p className="text-black/40 text-[9px] font-black tracking-[0.3em] uppercase mb-3">PORTFOLIO V2.5</p>
              <div className="bg-black/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-black/5 flex items-center justify-center">
                 <QrCode size={100} className="text-black" />
              </div>
           </div>
        </div>

        {/* Action Bento */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
           <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex items-center justify-between group">
              <div className="flex gap-4">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-800 group-hover:bg-[#E11D48] transition-colors" style={{ transitionDelay: `${i * 100}ms` }}></div>
                 ))}
              </div>
              <div className="text-right">
                <p className="text-zinc-600 font-display font-bold text-[9px] tracking-[0.4em] uppercase">RAJASTHAN, INDIA</p>
                <p className="text-white font-bold tracking-widest mt-1 text-xs">GMT+5:30</p>
              </div>
           </div>
           
           <button 
             onClick={() => setActiveSection('home')}
             className="md:col-span-2 bg-[#E11D48] rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex items-center justify-between group overflow-hidden relative hover:bg-white transition-colors duration-500"
           >
              <span className="text-white font-display font-bold text-2xl md:text-3xl tracking-tighter group-hover:text-black transition-colors z-10">RESTART JOURNEY</span>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-black/20 rounded-full flex items-center justify-center z-10 group-hover:bg-[#E11D48] transition-all group-hover:-translate-y-3">
                 <ChevronUp size={32} className="text-white" />
              </div>
           </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-700 font-display font-black text-[8px] tracking-[0.5em] uppercase w-full">
         <div className="flex gap-10">
            <span>© {new Date().getFullYear()} SANDEEP</span>
            <span className="hidden md:inline">DESIGNED & ENGINEERED FOR IMPACT</span>
         </div>
         <p>RAJASTHAN BASED • WORLDWIDE REACH</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const coreSkills = [
    { 
      name: "React JS", 
      icon: <Globe className="text-blue-400 w-20 h-20 md:w-32 md:h-32" />,
      description: "Architecting complex, responsive web applications with state-of-the-art React patterns and hooks."
    },
    { 
      name: "Three.js", 
      icon: <Cpu className="text-purple-400 w-20 h-20 md:w-32 md:h-32" />,
      description: "Pushing the boundaries of the web with immersive 3D environments and interactive WebGL experiences."
    },
    { 
      name: "Tailwind", 
      icon: <Palette className="text-pink-400 w-20 h-20 md:w-32 md:h-32" />,
      description: "Crafting pixel-perfect, scalable design systems using a utility-first approach for maximum performance."
    },
    { 
      name: "UI/UX", 
      icon: <Layout className="text-teal-400 w-20 h-20 md:w-32 md:h-32" />,
      description: "Designing data-driven user journeys that balance stunning aesthetics with intuitive user interfaces."
    },
    { 
      name: "Figma", 
      icon: <Figma className="text-orange-400 w-20 h-20 md:w-32 md:h-32" />,
      description: "Mastering the industry-standard design tool to create collaborative, high-fidelity prototypes and systems."
    }
  ];

  const services = [
    { 
      title: "Web Design", 
      icon: <Palette className="text-pink-500 w-20 h-20 md:w-32 md:h-32" />,
      description: "High-impact visual narratives that transform your brand's digital presence into an unforgettable experience."
    },
    { 
      title: "Web Dev", 
      icon: <Code2 className="text-blue-500 w-20 h-20 md:w-32 md:h-32" />,
      description: "Custom-coded solutions optimized for speed, SEO, and global scalability using the latest modern tech stack."
    },
    { 
      title: "UX Strategy", 
      icon: <Layout className="text-indigo-500 w-20 h-20 md:w-32 md:h-32" />,
      description: "Comprehensive user research and flow optimization to ensure your product converts and delights every user."
    },
    { 
      title: "Scalable Apps", 
      icon: <Settings className="text-orange-500 w-20 h-20 md:w-32 md:h-32" />,
      description: "Engineering specialized features and robust infrastructures that grow seamlessly with your business demands."
    }
  ];

  return (
    <div className="h-screen bg-black overflow-hidden flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 relative">
        <Hero isActive={activeSection === 'home'} />
        <ShowcaseSection 
          id="skills" 
          label="TECHNICAL ARSENAL" 
          items={coreSkills} 
          isActive={activeSection === 'skills'} 
        />
        <ShowcaseSection 
          id="services" 
          label="SERVICE OFFERINGS" 
          items={services} 
          interval={6000} 
          isActive={activeSection === 'services'} 
        />
        <BentoFooter isActive={activeSection === 'contact'} setActiveSection={setActiveSection} />
      </main>

      {/* Background decoration consistent across sections */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E11D48]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default App;
