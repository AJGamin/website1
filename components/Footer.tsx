import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Twitter, Github, ArrowUpRight, Terminal } from 'lucide-react';
import { MEDIA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC<{ setCurrentPage?: (p: string) => void }> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "Servers operational in Delhi Hub",
    "Security shield active",
    "Network speed optimized",
    "Backups synchronized",
    "Support agents available"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex(prev => (prev + 1) % logs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#010409] border-t border-white/5 pt-32 pb-20 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30%] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* System Status Ticker */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
         <div className="glass-card py-4 px-8 rounded-2xl border-white/10 flex items-center space-x-6 overflow-hidden relative">
            <div className="flex items-center space-x-3 text-cyan-500 flex-shrink-0">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest italic">Live Status:</span>
            </div>
            <AnimatePresence mode="wait">
               <motion.div 
                 key={logIndex}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic"
               >
                 {logs[logIndex]}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 rounded-full bg-white/5 p-1 border border-white/10">
                <img src={MEDIA.LOGO_WEB} className="w-full h-full object-contain rounded-full" alt="HexaCraft" />
              </div>
              <div>
                <span className="heading-font text-2xl font-black text-white uppercase italic block">HexaCraft</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">High Performance Hosting</span>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-md italic">
              Premium hosting solutions for communities and developers. Experience high speed and absolute reliability.
            </p>
            <div className="flex items-center space-x-4">
              {[MessageSquare, Twitter, Github].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -3, borderColor: "rgba(34, 197, 94, 0.4)" }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-widest italic">Services</h4>
              <ul className="space-y-4">
                {['Minecraft Hosting', 'VPS Hosting', 'Rewards'].map((l) => (
                  <li key={l}>
                    <button 
                      onClick={() => setCurrentPage?.(l.toLowerCase().split(' ')[0])}
                      className="text-slate-500 hover:text-cyan-400 transition-all text-sm font-bold uppercase tracking-wider text-left italic"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-widest italic">Company</h4>
              <ul className="space-y-4">
                {['Rules', 'Legal', 'Privacy'].map((l) => (
                  <li key={l}>
                    <button 
                      onClick={() => {
                        if(l === 'Rules') setCurrentPage?.('important');
                        else setCurrentPage?.('legal');
                      }}
                      className="text-slate-500 hover:text-white transition-all text-sm font-bold uppercase tracking-wider text-left italic"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} HexaCraft Hosting • Delhi, India
          </p>
          
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-4 text-slate-700 text-[11px] font-bold uppercase tracking-widest italic">
              <span>Managed BY</span>
              <span className="text-cyan-500">InsaneAj</span>
              <Heart className="w-4 h-4 text-cyan-500 fill-cyan-500/10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;