
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
  Terminal,
  Database,
  Search,
  Box,
  Smartphone,
  Figma,
  Github
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] py-6 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Top Left: Logo Icon */}
        <div className="flex items-center">
          <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center rounded-lg group cursor-pointer hover:border-[#E11D48] transition-all bg-zinc-950">
            <Smile className="text-[#E11D48]" size={20} />
          </div>
        </div>
        
        {/* Top Right: Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-display font-medium text-zinc-400 hover:text-white transition-colors tracking-[0.15em]"
            >
              {link.name}
            </a>
          ))}
          <button className="text-zinc-500 hover:text-white transition-colors ml-4">
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
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold text-white tracking-widest uppercase">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const RotatingBadge = () => (
  <div className="absolute top-32 right-12 md:right-32 z-20 hidden sm:block">
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
        <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
        <text className="text-[7px] font-display font-bold uppercase tracking-[0.35em] fill-zinc-500">
          <textPath xlinkHref="#badgePath">EXPERIENCE • CREATIVE ARTIST • 4 YEARS • </textPath>
        </text>
      </svg>
      <div className="text-center">
        <p className="text-[9px] font-display font-black text-white tracking-widest leading-none border-b border-white/20 pb-1 mb-1 uppercase">Sandeep</p>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const rotatingContent = [
    { text: "Web Designer", icon: <Globe className="text-teal-400 w-12 h-12 md:w-20 md:h-20" /> },
    { text: "Web Developer", icon: <Code2 className="text-blue-400 w-12 h-12 md:w-20 md:h-20" /> },
    { text: "UI Component Engineer", icon: <Layers className="text-pink-400 w-12 h-12 md:w-20 md:h-20" /> },
    { text: "Content Writer", icon: <PenTool className="text-orange-400 w-12 h-12 md:w-20 md:h-20" /> },
    { text: "Cyber Security Learner", icon: <ShieldCheck className="text-green-400 w-12 h-12 md:w-20 md:h-20" /> },
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false); // Trigger fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingContent.length);
        setIsVisible(true); // Trigger fade in after content swap
      }, 600);
    }, 4000);
    return () => clearInterval(timer);
  }, [rotatingContent.length]);

  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Center Branding Block */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-14 px-6 z-10 w-full max-w-7xl justify-center">
        
        {/* Dynamic Icon */}
        <div 
          className={`flex items-center justify-center transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-8 scale-75 rotate-[30deg]'
          }`}
        >
          {rotatingContent[index].icon}
        </div>

        {/* Dynamic Rotating Title */}
        <div className="text-center md:text-left h-[80px] md:h-[120px] flex items-center min-w-[300px] md:min-w-[700px]">
          <h1 
            className={`text-4xl md:text-[100px] font-display font-bold text-white tracking-tight leading-none transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-12 blur-md'
            }`}
          >
            {rotatingContent[index].text}
          </h1>
        </div>
      </div>

      {/* Bottom Left Name Placement */}
      <div className="absolute left-10 md:left-24 bottom-16 md:bottom-24 z-20 opacity-0 animate-[revealUp_1s_ease_forwards_0.5s]">
        <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.85] select-none">
          Sandeep<br/>Barupal
        </h2>
      </div>

      <RotatingBadge />
    </section>
  );
};

const SkillsShowcase = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const coreSkills = [
    { 
      name: "React JS", 
      icon: <Globe className="text-blue-400 w-16 h-16 md:w-32 md:h-32" />,
      description: "Building high-performance, interactive user interfaces with scalable component architecture."
    },
    { 
      name: "Three.js & 3D", 
      icon: <Cpu className="text-purple-400 w-16 h-16 md:w-32 md:h-32" />,
      description: "Creating immersive 3D web experiences using WebGL for next-gen digital storytelling."
    },
    { 
      name: "Tailwind CSS", 
      icon: <Palette className="text-pink-400 w-16 h-16 md:w-32 md:h-32" />,
      description: "Designing modern, responsive layouts with utility-first precision and rapid development cycles."
    },
    { 
      name: "UI/UX Design", 
      icon: <Layout className="text-teal-400 w-16 h-16 md:w-32 md:h-32" />,
      description: "Crafting intuitive user journeys and pixel-perfect interfaces that prioritize the end-user."
    },
    { 
      name: "Figma Mastery", 
      icon: <Figma className="text-orange-400 w-16 h-16 md:w-32 md:h-32" />,
      description: "Translating complex visions into high-fidelity prototypes and professional design systems."
    },
    { 
      name: "Cyber Security", 
      icon: <ShieldCheck className="text-green-400 w-16 h-16 md:w-32 md:h-32" />,
      description: "Understanding core security protocols to ensure digital assets are protected and robust."
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % coreSkills.length);
        setIsVisible(true);
      }, 700);
    }, 3800);
    return () => clearInterval(timer);
  }, [coreSkills.length]);

  return (
    <section id="skills" className="py-40 bg-black text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[85vh] border-y border-zinc-900">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-20 reveal-scroll">
        <span className="text-[10px] font-display font-bold tracking-[0.5em] uppercase text-zinc-500">TECHNICAL ARSENAL</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10">
        <div 
          className={`flex items-center justify-center transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-12 scale-75 rotate-12'
          }`}
        >
          {coreSkills[index].icon}
        </div>

        <div className="text-center md:text-left min-h-[220px] md:min-h-[350px] flex flex-col justify-center max-w-2xl">
          <h2 
            className={`text-4xl md:text-[9vw] font-display font-bold text-white tracking-tighter leading-none transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-20 blur-xl'
            }`}
          >
            {coreSkills[index].name}
          </h2>
          <p 
            className={`text-zinc-500 text-lg md:text-2xl mt-6 font-medium leading-relaxed transition-all duration-1000 delay-100 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            {coreSkills[index].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
        {coreSkills.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-1000 rounded-full ${i === index ? 'w-16 bg-white' : 'w-4 bg-zinc-800'}`}
          />
        ))}
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.02] text-[20vw] font-display font-black tracking-tighter select-none pointer-events-none uppercase">
        SKILLS
      </div>
    </section>
  );
};

const ServicesShowcase = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const services = [
    { 
      title: "Website Design", 
      icon: <Palette className="text-pink-500 w-16 h-16 md:w-32 md:h-32" />,
      description: "Crafting beautiful, high-impact designs that reflect your brand identity and engage users."
    },
    { 
      title: "Web Development", 
      icon: <Code2 className="text-blue-500 w-16 h-16 md:w-32 md:h-32" />,
      description: "Building lightning-fast, secure, and fully responsive web applications using modern tech stacks."
    },
    { 
      title: "UI/UX Design", 
      icon: <Layout className="text-indigo-500 w-16 h-16 md:w-32 md:h-32" />,
      description: "Optimizing user experience through deep analysis, intuitive flow, and seamless interface design."
    },
    { 
      title: "Portfolio & Business", 
      icon: <Globe className="text-teal-500 w-16 h-16 md:w-32 md:h-32" />,
      description: "Professional digital solutions tailored for creative agencies, startups, and established enterprises."
    },
    { 
      title: "Custom Web Solutions", 
      icon: <Settings className="text-orange-500 w-16 h-16 md:w-32 md:h-32" />,
      description: "Engineering specialized features and complex integrations to solve your unique business challenges."
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length);
        setIsVisible(true);
      }, 700);
    }, 4500);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section id="services" className="py-40 bg-black text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-20 reveal-scroll">
        <span className="text-[10px] font-display font-bold tracking-[0.5em] uppercase text-zinc-500">EXCEPTIONAL OFFERINGS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10">
        <div 
          className={`flex items-center justify-center transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
            isVisible ? 'opacity-100 translate-x-0 scale-100 rotate-0' : 'opacity-0 -translate-x-12 scale-90 -rotate-12'
          }`}
        >
          {services[index].icon}
        </div>

        <div className="text-center md:text-left min-h-[220px] md:min-h-[350px] flex flex-col justify-center max-w-2xl">
          <h2 
            className={`text-5xl md:text-[8vw] font-display font-bold text-white tracking-tighter leading-none transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform ${
              isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-lg'
            }`}
          >
            {services[index].title}
          </h2>
          <p 
            className={`text-zinc-500 text-lg md:text-2xl mt-6 font-medium leading-relaxed transition-all duration-1000 delay-100 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 blur-sm'
            }`}
          >
            {services[index].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
        {services.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-1000 ${i === index ? 'w-12 bg-white' : 'w-4 bg-zinc-800'}`}
          />
        ))}
      </div>
    </section>
  );
};

const BentoFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto bg-zinc-950 rounded-[3rem] md:rounded-[5rem] p-6 md:p-14 text-white overflow-hidden shadow-2xl relative">
        
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-display font-bold text-white/[0.012] pointer-events-none select-none tracking-tighter whitespace-nowrap uppercase">
          SANDEEP
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          
          {/* Main Reach Card (Col 7) */}
          <div className="md:col-span-7 bg-zinc-900/80 backdrop-blur-sm rounded-[3rem] p-10 flex flex-col justify-between group overflow-hidden border border-white/5">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C1FF72]/10 rounded-full blur-[100px] group-hover:bg-[#C1FF72]/20 transition-all duration-1000"></div>
            
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-3 h-3 rounded-full bg-[#E11D48] animate-pulse"></div>
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
                    <div key={i} className="w-1 h-1 rounded-full bg-[#E11D48]/40"></div>
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
              {['HOME', 'SERVICES', 'SKILLS'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`} className="group flex items-center justify-between">
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
    <div className="min-h-screen bg-black">
      <Navbar />

      <Hero />

      {/* Hero-style Skills Section */}
      <SkillsShowcase />

      {/* Hero-style Services Section */}
      <ServicesShowcase />

      {/* Updated Bento Footer */}
      <BentoFooter />
    </div>
  );
};

export default App;
