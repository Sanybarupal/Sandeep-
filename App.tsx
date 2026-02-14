
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  ArrowUpRight,
  Github,
  Layout,
  Layers,
  Smartphone,
  PenTool,
  Box,
  Globe,
  Monitor,
  Cpu,
  Code2,
  Settings
} from 'lucide-react';

const TECH_TAGS = ['REACT', 'THREEJS', 'BLENDER', 'FIGMA'];

const STATS = [
  { label: 'EXPERIENCE', value: '4+ YEARS', border: 'border-orange-400' },
  { label: '3D PROJECTS', value: '30+', border: 'border-purple-400' },
  { label: 'CLIENTS', value: 'GLOBAL', border: 'border-lime-400' },
  { label: 'CREATIVITY', value: 'UNBOUND', border: 'border-blue-400' },
];

const SKILLS_LIST = [
  { id: '01', title: 'UI/UX DESIGN', icon: <Layout />, color: 'bg-[#fde047]' },
  { id: '02', title: 'WEBSITE LAYOUT', icon: <Layers />, color: 'bg-[#bef264]' },
  { id: '03', title: 'RESPONSIVE DESIGN', icon: <Smartphone />, color: 'bg-[#a78bfa]' },
  { id: '04', title: 'WIREFRAMING', icon: <PenTool />, color: 'bg-[#fb923c]' },
  { id: '05', title: '3D MODELING', icon: <Box />, color: 'bg-[#3b82f6]' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b-2 border-black' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            <div className="w-9 h-9 rounded-full border-2 border-orange-400 bg-white/10"></div>
            <div className="w-9 h-9 rounded-full border-2 border-black bg-white/10"></div>
          </div>
          <span className="text-3xl font-display uppercase tracking-tighter">S.B</span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold tracking-[0.2em] text-zinc-500 hover:text-black transition-colors">{link}</a>
          ))}
          <button className="bg-black text-white px-8 py-3 rounded-2xl font-display text-xs uppercase tracking-widest hire-me-shadow">
            HIRE ME
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden border-2 border-black p-2 rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8"><X size={32} /></button>
        {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-5xl font-display uppercase tracking-tighter">{link}</a>
        ))}
      </div>
    </nav>
  );
};

const SkillCard = ({ skill }: { skill: typeof SKILLS_LIST[0] }) => (
  <div className={`brutalist-card ${skill.color} p-6 relative flex flex-col justify-between aspect-square group`}>
    <div className="flex justify-between items-start w-full">
      <div className="bg-white border-[2px] border-black p-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all">
        {skill.icon}
      </div>
      <span className="text-xs font-display text-black/30">{skill.id}</span>
    </div>
    <div className="mt-auto">
      <h3 className="text-2xl font-display uppercase leading-[0.9] tracking-tighter mb-4 pr-4">
        {skill.title}
      </h3>
      <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
        <div className="h-full w-12 bg-black rounded-full transition-all group-hover:w-full"></div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="max-w-[1400px] w-full text-center reveal-scroll">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-2xl">👋</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-zinc-400">
              3D ARTIST & DEVELOPER
            </span>
          </div>

          <h1 className="text-[14vw] md:text-[10vw] font-display leading-[0.8] tracking-tighter uppercase mb-6">
            SANDEEP <br />
            <span className="outlined-text">BARUPAL</span>
          </h1>

          <p className="text-sm md:text-lg font-bold uppercase tracking-[0.3em] text-zinc-400 mb-14">
            BASED IN INDIA.
          </p>

          <button className="bg-black text-white px-20 py-8 rounded-[2rem] font-display text-3xl uppercase tracking-tighter hire-me-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            HIRE ME
          </button>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto">
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="text-xl md:text-2xl font-display uppercase tracking-tight">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Section (Dark) */}
      <section id="about" className="py-40 px-6 md:px-12 bg-black text-white no-grid">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 reveal-scroll">
              <span className="text-orange-500 font-bold uppercase tracking-[0.5em] text-xs mb-10 block">DISCOVERY</span>
              <h2 className="text-6xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase mb-16">
                CRAFTING <br /> THE <br />
                <span className="border-b-8 border-orange-500 italic">DIGITAL</span> <br /> DIMENSION.
              </h2>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end reveal-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="space-y-10">
                <p className="text-xl text-zinc-400 leading-relaxed">
                  I am Sandeep Barupal, a multidisciplinary designer and developer specializing in <span className="text-orange-400">immersive 3D environments</span> and high-performance web applications.
                </p>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  My expertise lies at the intersection of technical precision and artistic vision. I build digital experiences that aren't just visually striking but are architecturally sound and user-centric.
                </p>
                
                <div className="border-l-4 border-orange-500 pl-8 py-4">
                  <p className="text-2xl italic font-medium leading-relaxed">
                    "From sculpting the perfect 3D mesh in Blender to architecting robust React applications, I am committed to pushing the boundaries of what's possible on the web."
                  </p>
                </div>
                
                <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest">
                  Based in India, I collaborate with global clients to define the next era of digital interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Grid */}
      <section className="py-20 px-6 bg-black no-grid">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className={`border-2 ${stat.border} bg-zinc-950 p-12 aspect-[4/3] flex flex-col justify-between group hover:bg-white hover:border-black transition-all duration-300 reveal-scroll`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase group-hover:text-zinc-400">
                {stat.label}
              </span>
              <div className="flex items-end justify-between">
                <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tighter text-white group-hover:text-black">
                  {stat.value}
                </h3>
                <ArrowUpRight className="text-orange-400 group-hover:text-black" size={32} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Colorful Grid */}
      <section id="services" className="py-40 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 reveal-scroll">
            <h2 className="text-6xl md:text-8xl font-display tracking-tighter uppercase leading-[0.8] mb-8">
              SELECTED <br /> SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SKILLS_LIST.map((skill, i) => (
              <div key={skill.id} className="reveal-scroll" style={{ transitionDelay: `${i * 50}ms` }}>
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Yellow) */}
      <section id="contact" className="py-40 px-6 md:px-12 bg-yellow-400 no-grid">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal-scroll mb-24">
            <h2 className="text-[12vw] font-display leading-[0.8] tracking-tighter uppercase">
              LET'S <br /> GET IN <br /> TOUCH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram Card */}
            <div className="bg-black text-white p-12 rounded-[2rem] flex flex-col gap-10 reveal-scroll">
              <Instagram size={48} className="text-white" />
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 block mb-4 uppercase">INSTAGRAM</span>
                <p className="text-2xl md:text-4xl font-display italic tracking-tighter uppercase break-all">ITZ_SANDEEP_97</p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white border-4 border-black p-12 rounded-[2rem] flex flex-col gap-10 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] reveal-scroll">
              <Linkedin size={48} className="text-black" />
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-400 block mb-4 uppercase">LINKEDIN</span>
                <p className="text-2xl md:text-4xl font-display italic tracking-tighter uppercase">SANDEEP BARUPAL</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-black text-white p-12 rounded-[2rem] flex flex-col gap-10 shadow-[8px_8px_0px_0px_rgba(190,242,100,1)] reveal-scroll">
              <Phone size={48} className="text-white" />
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 block mb-4 uppercase">PHONE</span>
                <p className="text-2xl md:text-4xl font-display italic tracking-tighter uppercase">+91 7878142323</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-black bg-white no-grid">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <span className="text-2xl font-display uppercase">S.B</span>
             <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">© 2024 PORTFOLIO</span>
          </div>
          <div className="flex gap-10">
            {['DRIBBBLE', 'TWITTER', 'GITHUB'].map(link => (
              <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
