import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';
import { MEDIA } from '../constants';

const Navbar: React.FC<{ currentPage: string, setCurrentPage: (p: string) => void }> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Minecraft', id: 'minecraft' },
    { name: 'VPS', id: 'vps' },
    { name: 'Rewards', id: 'rewards' },
    { name: 'Rules', id: 'important' },
    { name: 'Help', id: 'legal' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
      <div 
        className={`max-w-7xl mx-auto transition-all duration-700 rounded-full px-8 flex items-center justify-between h-16 ${
          scrolled ? 'glass py-2 shadow-2xl translate-y-2' : 'bg-transparent border-transparent'
        }`}
      >
        {/* Brand */}
        <div 
          className="flex items-center space-x-4 cursor-pointer group" 
          onClick={() => setCurrentPage('home')}
        >
          <div className="relative w-10 h-10">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 text-cyan-500/20"
             >
                <Hexagon className="w-10 h-10 fill-current" />
             </motion.div>
             <img src={MEDIA.LOGO_WEB} className="w-8 h-8 rounded-full relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,242,255,0.3)] border border-white/10" alt="HexaCraft" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            HEXA<span className="text-cyan-400">CRAFT</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all relative ${
                currentPage === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="navTab" 
                  className="absolute inset-0 bg-cyan-500/10 rounded-full -z-10 border border-cyan-500/20"
                />
              )}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => window.open('https://discord.gg/G4DCKEfatk', '_blank')}
            className="hidden md:flex bg-cyan-500 text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg italic"
          >
            Join Discord
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-6 right-6 glass p-10 rounded-[3rem] shadow-2xl z-[110]"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => { setCurrentPage(link.id); setIsOpen(false); }} 
                  className={`text-3xl font-black tracking-tight text-left uppercase italic ${
                    currentPage === link.id ? 'text-cyan-400' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <hr className="border-white/5 my-4" />
              <button 
                onClick={() => window.open('https://discord.gg/G4DCKEfatk', '_blank')}
                className="w-full bg-cyan-500 text-black py-5 rounded-2xl font-black text-xl uppercase italic"
              >
                Join Discord
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;