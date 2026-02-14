import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Play, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Github,
  ChevronUp,
  Globe
} from 'lucide-react';
import { FEATURED_WORK, INSIGHTS, SERVICES_LIST } from './constants';

const vibrate = (pattern = 10) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3" onClick={() => vibrate(5)}>
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-zinc-200 bg-white shadow-sm"></div>
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-black bg-white shadow-sm"></div>
          </div>
          <span className="text-xl md:text-2xl font-display font-bold tracking-tighter">SK.</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-black transition-colors">{link}</a>
          ))}
          <a href="#contact" className="bg-black text-white px-8 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-black/10 hover:bg-zinc-800 transition-all">HIRE ME</a>
        </div>

        <button onClick={() => { setIsOpen(!isOpen); vibrate(15); }} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6"><X size={32} /></button>
        {['ABOUT', 'SERVICES', 'CONTACT'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-display font-bold uppercase tracking-tighter">{link}</a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)} className="bg-black text-white px-10 py-4 rounded-xl font-display text-lg uppercase tracking-widest mt-4">HIRE ME</a>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [started]);

  const handleStart = () => {
    setStarted(true);
    vibrate(30);
    if (audioRef.current) audioRef.current.play().catch(() => {});
  };

  return (
    <div className="min-h-screen">
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" style={{ display: 'none' }} />

      {!started && (
        <div id="enter-overlay">
          <div className="dot-loader mb-10"></div>
          <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-center">Crafting <br/> Digital Stories</h2>
          <button onClick={handleStart} className="bg-black text-white px-10 py-5 rounded-xl font-display text-lg uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-black/20 active:scale-95 transition-all">
            <Play size={20} fill="currentColor" /> EXPLORE
          </button>
        </div>
      )}

      {started && (
        <>
          <Navbar />
          
          <button 
            onClick={() => { setIsMuted(!isMuted); if(audioRef.current) isMuted ? audioRef.current.play() : audioRef.current.pause(); vibrate(10); }}
            className="fixed bottom-6 right-6 z-[100] w-12 h-12 md:w-14 md:h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-50 transition-all"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse" />}
          </button>

          {/* Hero Section */}
          <section className="pt-40 md:pt-60 pb-20 px-6 md:px-12 text-center">
            <div className="max-w-5xl mx-auto reveal-scroll active">
              <h1 className="text-5xl md:text-[8vw] font-display font-bold tracking-tight leading-[1] md:leading-[0.95] mb-8">
                Crafting <span className="pill-purple">brand</span> <br /> and digital <span className="pill-yellow">experience</span>
              </h1>
              <p className="max-w-xl mx-auto text-sm md:text-base text-zinc-500 font-medium leading-relaxed mb-12">
                We design exceptional brands, products, web apps, mobile apps, websites for startups and enterprises.
              </p>
              
              {/* Partner Logos Ticker */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale mb-20">
                {['HDFC', 'IIFL', 'stockal', 'ADITYA BIRLA', 'TVS', 'CARD91'].map(logo => (
                  <span key={logo} className="text-sm font-bold tracking-widest">{logo}</span>
                ))}
              </div>

              {/* Large Mockup Image */}
              <div className="relative group reveal-scroll">
                <div className="absolute inset-0 bg-[#C1FF72] scale-105 rounded-3xl blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1400&auto=format&fit=crop" 
                  className="w-full h-auto rounded-3xl border border-zinc-200 shadow-2xl"
                  alt="Dashboard Preview"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 md:py-40 bg-zinc-50 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 block mb-12 uppercase">SERVICES</span>
              <div className="space-y-32">
                {SERVICES_LIST.map((service, idx) => (
                  <div key={idx} className="grid md:grid-cols-2 gap-12 reveal-scroll">
                    <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase">{service.category}</h2>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {service.items.map(item => (
                        <div key={item} className="text-xs md:text-sm font-medium text-zinc-500 hover:text-black transition-colors cursor-default">• {item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Work */}
          <section id="work" className="py-24 md:py-40 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 block mb-12 uppercase">FEATURED WORK</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {FEATURED_WORK.map((work, idx) => (
                  <div key={idx} className="group reveal-scroll">
                    <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 mb-8 relative">
                      <img src={work.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={work.title} />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {work.tags.map(tag => (
                          <span key={tag} className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight mb-2">{work.title}</h3>
                    <p className="text-zinc-500 text-sm font-medium leading-relaxed">{work.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-20 text-center">
                <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:translate-x-2 transition-transform">SEE ALL WORKS <ArrowRight size={16} /></button>
              </div>
            </div>
          </section>

          {/* Trusted Process */}
          <section className="py-24 md:py-40 bg-zinc-50 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 block mb-12 uppercase">ABOUT US</span>
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase mb-8">Trusted process <br/> designed to deliver <br/> great results</h2>
                  <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-zinc-200 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all">SEE PROCESS <ArrowRight size={14} /></button>
                </div>
                <p className="text-zinc-500 font-medium leading-relaxed max-w-sm ml-auto">Our agile and adaptable process is tailored to launch new businesses swiftly and scale existing ones to next level.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src="https://images.unsplash.com/photo-1522071823991-b515d2609a63?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover rounded-3xl" alt="Process 1" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover rounded-3xl mt-12" alt="Process 2" />
                <img src="https://images.unsplash.com/photo-1600880212340-0234407d3588?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover rounded-3xl" alt="Process 3" />
              </div>
            </div>
          </section>

          {/* Insights */}
          <section className="py-24 md:py-40 bg-black text-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-12 uppercase">• INSIGHTS</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {INSIGHTS.map((insight, idx) => (
                  <div key={idx} className="group reveal-scroll">
                    <div className={`${insight.color} aspect-[4/3] rounded-3xl mb-6 overflow-hidden flex items-center justify-center p-8`}>
                       <img src={insight.image} className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-105 transition-transform" alt={insight.title} />
                    </div>
                    <p className="text-[10px] font-bold text-zinc-500 mb-2">{insight.date}</p>
                    <h4 className="text-lg font-display font-bold uppercase tracking-tight mb-4 group-hover:text-zinc-400 transition-colors">{insight.title}</h4>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group">SEE ALL <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/></button>
              </div>
            </div>
          </section>

          {/* Giant Work Banner */}
          <section className="py-40 bg-white border-y border-zinc-100 overflow-hidden px-6">
            <div className="max-w-7xl mx-auto text-center relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-bold text-zinc-50 uppercase whitespace-nowrap -z-10 leading-none">WORK</div>
               <h2 className="text-6xl md:text-[12vw] font-display font-bold tracking-tighter uppercase leading-none">JUST GREAT WORK</h2>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="py-20 md:py-32 bg-[#fafafa] px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-20 mb-20">
                <div>
                   <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 mb-10 uppercase">REACH US</h3>
                   <p className="text-sm font-bold mb-2">🇮🇳 +91 7878142323</p>
                   <p className="text-sm font-bold mb-10">hello@sandeep.in</p>
                   <button className="bg-black text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all">LET'S CHAT</button>
                </div>
                <div>
                   <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 mb-10 uppercase">SOCIAL</h3>
                   <div className="grid grid-cols-2 gap-4">
                      {['DRIBBBLE', 'BEHANCE', 'INSTAGRAM', 'LINKEDIN', 'TWITTER', 'MEDIUM'].map(s => (
                        <a key={s} href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors">{s} ↗</a>
                      ))}
                   </div>
                </div>
                <div>
                   <h3 className="text-xs font-bold tracking-[0.4em] text-zinc-400 mb-10 uppercase">LEGAL</h3>
                   <div className="space-y-4">
                      <a href="#" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black">PRIVACY POLICY</a>
                      <a href="#" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black">TERMS OF SERVICE</a>
                   </div>
                </div>
              </div>
              <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-[10px] font-bold text-zinc-400 tracking-[0.4em] uppercase">© {new Date().getFullYear()} SANDEEP BARUPAL. BUILT WITH REACT.</span>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all"><ChevronUp size={20}/></button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;