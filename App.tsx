
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
  Wrench
} from 'lucide-react';
import { SERVICES, SKILLS, PROJECTS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 px-4 md:px-12 flex justify-center items-center">
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
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white absolute right-8">
        {isOpen ? <X /> : <Menu />}
      </button>
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
          <div className="text-center">
            <h1 className="text-[12vw] md:text-[10vw] font-display font-black leading-[0.8] mb-8 hero-gradient-text tracking-tighter">
              HI, I'M <br /> SANDEEP
            </h1>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-none z-10">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N1v4hX8V7D7mY9R5V7f6mY9R5V7f6m.png" 
              alt="Character" 
              className="w-full drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)] animate-float"
              style={{ filter: 'brightness(1.1)' }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-12 gap-8 relative z-20">
            <div className="max-w-xs text-left">
              <p className="text-xs font-display font-bold text-zinc-500 mb-4 tracking-widest uppercase">
                A UI/UX DESIGNER PASSIONATE ABOUT CRAFTING BOLD AND MEMORABLE PROJECTS ⚡️
              </p>
            </div>
            <div className="flex flex-col items-end">
              <a href="#contact" className="group relative px-8 py-3 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10 text-xs font-display font-bold tracking-widest group-hover:text-indigo-400 transition-colors">CONTACT ME</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me (Outline Text Style) */}
      <section id="about" className="py-40 relative bg-black overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-10 pointer-events-none">
          <span className="text-[25vw] font-display font-black outlined-text tracking-widest">ABOUT ME</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-4 mb-12">
             {['CLEAN DESIGN', 'FAST LOADING', 'USER CENTRIC', 'SCALABLE'].map(tag => (
               <span key={tag} className="px-6 py-2 rounded-full border border-zinc-800 text-xs font-display font-bold tracking-widest bg-zinc-950">{tag}</span>
             ))}
          </div>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            I build modern, fast, and user-friendly websites that help <span className="text-indigo-500 italic">businesses grow</span> online.
          </h3>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-12">
            I’m a passionate UI/UX Designer and Web Developer with hands-on experience in building professional digital experiences. My goal is simple: Create websites that look great and work perfectly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '4+', label: 'Years' },
              { val: '50+', label: 'Projects' },
              { val: '30+', label: 'Clients' },
              { val: '24h', label: 'Reply' },
            ].map((stat, i) => (
              <div key={i} className="text-center border border-zinc-800 p-8 rounded-2xl bg-zinc-950/50">
                <div className="text-4xl font-display font-black mb-1">{stat.val}</div>
                <div className="text-xs font-display text-zinc-500 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section (Brutalist Style) */}
      <section id="skills" className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase italic leading-none">
              SKILLS
            </h2>
            <p className="text-zinc-500 text-sm max-w-[300px] font-display font-bold tracking-widest uppercase mb-4">
              A comprehensive stack of technologies and design methodologies I use daily.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { category: 'design', icon: <Palette className="text-pink-500" size={32} />, title: 'UI / UX DESIGN' },
              { category: 'development', icon: <Code2 className="text-indigo-500" size={32} />, title: 'DEVELOPMENT' },
              { category: 'tools', icon: <Wrench className="text-teal-500" size={32} />, title: 'WORKFLOW' }
            ].map((group) => (
              <div key={group.category} className="brutalist-card bg-white p-8 group hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-black rounded-xl">
                    {group.icon}
                  </div>
                  <span className="text-[10px] font-display font-black tracking-widest text-zinc-400">EXPERTISE</span>
                </div>
                <h3 className="text-2xl font-display font-black text-black mb-6 uppercase tracking-tight">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === group.category).map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="px-4 py-2 border-2 border-black text-[10px] font-display font-black tracking-widest uppercase transition-colors hover:bg-black hover:text-white cursor-default text-black"
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

      {/* Services Section (High Contrast White) */}
      <section id="services" className="py-32 bg-white text-black px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl md:text-9xl font-display font-black mb-20 tracking-tighter uppercase italic leading-none">
            SERVICES
          </h2>
          <div className="space-y-12">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group border-b border-black/10 pb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:translate-x-4 transition-transform duration-500">
                <div className="flex items-start gap-12">
                  <span className="text-4xl font-display font-black opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase">{service.title}</h3>
                    <p className="text-zinc-600 max-w-xl text-lg font-medium">{service.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black rounded-2xl text-white group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="portfolio" className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase italic leading-none">PROJECTS</h2>
            <p className="text-zinc-500 text-sm hidden md:block max-w-[200px] font-medium uppercase tracking-widest">Selected works from 2023-2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group flex flex-col gap-6">
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/50">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-6 left-6 text-2xl font-display font-black text-white/50">0{idx + 1}</div>
                  <div className="absolute top-6 right-6">
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-display font-black tracking-widest hover:bg-white hover:text-black transition-colors uppercase">
                      LIVE PROJECT
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-black uppercase mb-1">{project.title}</h3>
                    <p className="text-zinc-500 text-xs font-display tracking-widest uppercase">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Test Grid with Double Borders) */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Sandeep's work on our V2 project was exceptional. They built an immersive environment that met all our technical needs.", author: "David L., VR Innovations" },
              { text: "The prototype prototypes Sandeep created for us were perfect for pitching to investors. The speed and precision made it so much easier.", author: "James K., Innovate Pro" },
              { text: "Detailed models for our medical training program, and the quality was outstanding. High quality, realistic and incredibly useful.", author: "Dr. Amanda E., MedTech" },
            ].map((t, i) => (
              <div key={i} className="double-border rounded-3xl p-10 bg-zinc-900/20 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                  </div>
                  <div className="text-sm font-display font-bold tracking-widest uppercase text-zinc-400">CLIENT FEEDBACK</div>
                </div>
                <p className="text-zinc-300 italic mb-8 font-medium leading-relaxed">"{t.text}"</p>
                <div className="text-xs font-display font-black text-white uppercase tracking-widest">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (The "TOUCH" style) */}
      <section id="contact" className="py-40 bg-white text-black px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex-1 w-full">
            <h2 className="text-8xl md:text-[12vw] font-display font-black tracking-tighter mb-8 leading-none">TOUCH</h2>
            <div className="space-y-4">
              <a href="mailto:sandeep@email.com" className="text-3xl md:text-5xl font-display font-black underline decoration-2 hover:text-indigo-600 transition-colors break-all">
                SANDEEP@PORTFOLIO.COM
              </a>
              <div className="pt-12 grid grid-cols-2 gap-12">
                 <div>
                    <div className="text-[10px] font-display font-black text-zinc-400 tracking-widest uppercase mb-4">SOCIAL</div>
                    <ul className="space-y-2 font-display font-bold text-xs tracking-widest">
                       <li><a href="#" className="hover:text-indigo-600">INSTAGRAM</a></li>
                       <li><a href="#" className="hover:text-indigo-600">LINKEDIN</a></li>
                       <li><a href="#" className="hover:text-indigo-600">DRIBBBLE</a></li>
                       <li><a href="#" className="hover:text-indigo-600">GITHUB</a></li>
                    </ul>
                 </div>
                 <div>
                    <div className="text-[10px] font-display font-black text-zinc-400 tracking-widest uppercase mb-4">LOCATION</div>
                    <div className="font-display font-bold text-xs tracking-widest uppercase">
                       Remote Work / India <br /> GMT +5:30
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
             <div className="p-1 brutalist-card rounded-3xl bg-white overflow-hidden">
                <div className="bg-black p-12 rounded-[1.4rem]">
                   <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                      <input placeholder="YOUR NAME" className="w-full bg-transparent border-b border-zinc-800 pb-4 focus:border-white focus:outline-none text-white font-display font-bold text-xs tracking-widest" />
                      <input placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-zinc-800 pb-4 focus:border-white focus:outline-none text-white font-display font-bold text-xs tracking-widest" />
                      <textarea placeholder="PROJECT DETAILS" className="w-full bg-transparent border-b border-zinc-800 pb-4 focus:border-white focus:outline-none text-white font-display font-bold text-xs tracking-widest min-h-[100px]" />
                      <button className="w-full bg-white text-black font-display font-black py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 tracking-[0.2em] text-[10px]">
                         SEND MESSAGE <ArrowRight size={14} />
                      </button>
                   </form>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-40 flex justify-center gap-2 contact-shapes h-20 md:h-32">
           <div className="w-20 md:w-32 bg-indigo-500 rounded-[20%] rotate-12"></div>
           <div className="w-20 md:w-32 bg-pink-500 rounded-full scale-110"></div>
           <div className="w-20 md:w-32 bg-purple-600 -rotate-12"></div>
           <div className="w-20 md:w-32 bg-orange-400 rounded-full"></div>
           <div className="w-20 md:w-32 bg-teal-500 rotate-45"></div>
           <div className="w-20 md:w-32 bg-blue-600 hidden lg:block"></div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-12 bg-black border-t border-zinc-900 flex justify-between items-center text-[10px] font-display font-bold tracking-[0.3em] text-zinc-500 uppercase">
         <div>© {new Date().getFullYear()} SANDEEP KUMAR</div>
         <div className="flex gap-8">
            <a href="#" className="hover:text-white">PRIVACY</a>
            <a href="#" className="hover:text-white">TERMS</a>
         </div>
      </footer>
    </div>
  );
};

export default App;
