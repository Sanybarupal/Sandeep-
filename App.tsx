
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight,
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ChevronRight,
  Cpu,
  Palette,
  Code2,
  Wrench,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, SKILLS, PROJECTS } from './constants';

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
    { name: 'SKILLS', href: '#skills' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter">SK.</a>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-display font-bold text-zinc-400 hover:text-white transition-colors tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-[60]">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold tracking-widest">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="text-center relative z-20">
            <h1 className="text-[12vw] md:text-[10vw] font-display font-black leading-[0.8] mb-8 hero-gradient-text tracking-tighter">
              HI, I'M <br /> SANDEEP
            </h1>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg pointer-events-none z-10">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N1v4hX8V7D7mY9R5V7f6mY9R5V7f6m.png" 
              alt="Character Illustration" 
              className="w-full drop-shadow-[0_20px_60px_rgba(255,255,255,0.15)] animate-float"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-12 gap-8 relative z-30">
            <div className="max-w-xs text-left">
              <p className="text-xs font-display font-bold text-zinc-500 mb-4 tracking-widest uppercase leading-relaxed">
                A UI/UX DESIGNER PASSIONATE ABOUT CRAFTING BOLD AND MEMORABLE PROJECTS ⚡️
              </p>
            </div>
            <div className="flex flex-col items-end">
              <a href="#portfolio" className="group relative px-10 py-4 rounded-full border-2 border-zinc-700 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all hover:scale-105 hover:border-indigo-500">
                <span className="relative z-10 text-xs font-display font-bold tracking-widest group-hover:text-white transition-colors">EXPLORE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 relative bg-zinc-950 overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none">
          <span className="text-[30vw] font-display font-black tracking-widest uppercase">ABOUT</span>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-none">
                BUILDING <br /> <span className="text-indigo-500 italic">BEYOND</span> <br /> CODE.
              </h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['CLEAN', 'BOLD', 'FAST', 'USER-FIRST'].map(tag => (
                  <span key={tag} className="px-4 py-1 border border-zinc-800 rounded-full text-[10px] font-display font-bold tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
                I'm a UI/UX Designer and Full-Stack Developer specializing in high-performance web applications. I bridge the gap between aesthetics and functionality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'EXPERIENCE', value: '4+ YEARS' },
                  { label: 'PROJECTS', value: '50+' },
                  { label: 'CLIENTS', value: '30+' },
                  { label: 'SATISFACTION', value: '100%' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 border border-zinc-800 rounded-2xl bg-black/40">
                    <div className="text-[10px] font-display font-bold text-zinc-500 mb-2 tracking-widest">{stat.label}</div>
                    <div className="text-2xl font-display font-black">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - The Core Feature */}
      <section id="skills" className="py-32 px-6 bg-white text-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
            <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase italic leading-none border-b-8 border-black inline-block">
              SKILLS
            </h2>
            <div className="max-w-sm">
              <p className="text-zinc-600 font-bold text-sm tracking-wider uppercase leading-relaxed">
                I leverage a modern technology stack to create seamless, accessible, and high-performance digital products.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { 
                category: 'design', 
                icon: <Palette size={40} />, 
                title: 'DESIGN & UI/UX',
                color: 'bg-pink-100',
                accent: 'text-pink-600'
              },
              { 
                category: 'development', 
                icon: <Code2 size={40} />, 
                title: 'DEVELOPMENT',
                color: 'bg-indigo-100',
                accent: 'text-indigo-600'
              },
              { 
                category: 'tools', 
                icon: <Wrench size={40} />, 
                title: 'TOOLS & STACK',
                color: 'bg-teal-100',
                accent: 'text-teal-600'
              }
            ].map((group) => (
              <div key={group.category} className={`brutalist-card p-10 ${group.color} flex flex-col h-full`}>
                <div className="flex items-center justify-between mb-10">
                  <div className={`p-4 bg-black text-white rounded-2xl ${group.accent}`}>
                    {group.icon}
                  </div>
                  <div className="text-[10px] font-display font-black tracking-widest text-black/40 uppercase">EXPERT LEVEL</div>
                </div>
                
                <h3 className="text-3xl font-display font-black text-black mb-8 leading-tight tracking-tight uppercase">
                  {group.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {SKILLS.filter(s => s.category === group.category).map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="px-4 py-2 border-2 border-black bg-white text-[10px] font-display font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all cursor-default shadow-[2px_2px_0px_#000]"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-display font-black mb-20 tracking-tighter uppercase italic leading-none text-white">
            SERVICES
          </h2>
          <div className="space-y-0">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group border-b border-zinc-800 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:bg-zinc-900/40 px-6 transition-all duration-300 first:border-t">
                <div className="flex items-start gap-12">
                  <span className="text-5xl font-display font-black text-zinc-800 group-hover:text-indigo-500 transition-colors">0{idx + 1}</span>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-black mb-4 uppercase text-white group-hover:translate-x-2 transition-transform">{service.title}</h3>
                    <p className="text-zinc-500 max-w-xl text-lg font-medium">{service.description}</p>
                  </div>
                </div>
                <div className="p-5 border border-zinc-700 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45">
                  <ArrowUpRight size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase italic leading-none">WORKS</h2>
            <div className="flex items-center gap-4 text-xs font-display font-black tracking-widest text-zinc-500 uppercase">
              <div className="w-12 h-1 bg-zinc-800"></div>
              SELECTED PROJECTS
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group flex flex-col gap-8 cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <div className="text-[10px] font-display font-black tracking-widest uppercase bg-white text-black px-4 py-1 mb-2 inline-block">LIVE PREVIEW</div>
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div>
                    <h3 className="text-3xl font-display font-black uppercase mb-2 text-white">{project.title}</h3>
                    <p className="text-zinc-500 text-xs font-display tracking-widest uppercase">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border border-zinc-800 rounded-full text-zinc-500 group-hover:text-white group-hover:border-white transition-all">
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-white text-black px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex-1 w-full">
            <div className="inline-block px-4 py-1 bg-black text-white text-[10px] font-display font-black tracking-widest uppercase mb-10">GET IN TOUCH</div>
            <h2 className="text-8xl md:text-[12vw] font-display font-black tracking-tighter mb-12 leading-[0.8]">
              LET'S <br /> TALK
            </h2>
            <div className="space-y-12">
              <a href="mailto:sandeep@email.com" className="text-2xl md:text-5xl font-display font-black border-b-4 border-black hover:text-indigo-600 transition-colors break-all leading-tight">
                SANDEEP@PORTFOLIO.COM
              </a>
              
              <div className="grid grid-cols-2 gap-12 pt-10">
                 <div>
                    <div className="text-[10px] font-display font-black text-zinc-400 tracking-widest uppercase mb-6">SOCIAL CHANNELS</div>
                    <ul className="space-y-4 font-display font-bold text-xs tracking-[0.2em]">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">INSTAGRAM</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">LINKEDIN</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">DRIBBBLE</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">GITHUB</a></li>
                    </ul>
                 </div>
                 <div>
                    <div className="text-[10px] font-display font-black text-zinc-400 tracking-widest uppercase mb-6">LOCATION</div>
                    <div className="font-display font-bold text-xs tracking-[0.2em] uppercase leading-relaxed">
                       REMOTE WORK / INDIA <br /> GMT +5:30
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
             <div className="p-1 brutalist-card bg-black rounded-[2.5rem]">
                <div className="bg-white p-10 md:p-14 rounded-[2.3rem]">
                   <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-display font-black tracking-widest uppercase text-zinc-400">YOUR FULL NAME</label>
                        <input placeholder="JOHN DOE" className="w-full bg-transparent border-b-2 border-zinc-200 pb-4 focus:border-black focus:outline-none text-black font-display font-bold text-xs tracking-widest transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-display font-black tracking-widest uppercase text-zinc-400">EMAIL ADDRESS</label>
                        <input placeholder="HELLO@WORK.COM" className="w-full bg-transparent border-b-2 border-zinc-200 pb-4 focus:border-black focus:outline-none text-black font-display font-bold text-xs tracking-widest transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-display font-black tracking-widest uppercase text-zinc-400">PROJECT DESCRIPTION</label>
                        <textarea placeholder="TELL ME ABOUT YOUR VISION" className="w-full bg-transparent border-b-2 border-zinc-200 pb-4 focus:border-black focus:outline-none text-black font-display font-bold text-xs tracking-widest min-h-[120px] resize-none transition-colors" />
                      </div>
                      <button className="w-full bg-black text-white font-display font-black py-6 rounded-2xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3 tracking-[0.3em] text-[10px] uppercase group">
                         SEND MESSAGE <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                   </form>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-40 flex justify-center gap-4 contact-shapes h-24 md:h-40 pointer-events-none">
           <div className="w-24 md:w-40 bg-indigo-500 rounded-[20%] rotate-12 transition-transform hover:rotate-45"></div>
           <div className="w-24 md:w-40 bg-pink-500 rounded-full scale-110"></div>
           <div className="w-24 md:w-40 bg-purple-600 -rotate-12"></div>
           <div className="w-24 md:w-40 bg-orange-400 rounded-full"></div>
           <div className="w-24 md:w-40 bg-teal-500 rotate-45"></div>
        </div>
      </section>

      <footer className="py-16 px-6 md:px-12 bg-black border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-display font-bold tracking-[0.3em] text-zinc-500 uppercase">
         <div className="text-zinc-400">© {new Date().getFullYear()} SANDEEP KUMAR DESIGN PORTFOLIO</div>
         <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS & COND</a>
         </div>
      </footer>
    </div>
  );
};

export default App;
