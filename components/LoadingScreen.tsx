import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const LOGO_URL = "https://cdn.discordapp.com/icons/1304092945779003522/0e756fe51bbc15c3a49e687cc27eb86e.webp?size=2048";

  const statusMessages = [
    "Refining the architecture...",
    "Synchronizing the grid...",
    "Optimizing for performance...",
    "Polishing the interface...",
    "Welcome to HexaCraft."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const remaining = 100 - prev;
        return prev + (remaining * 0.1);
      });
    }, 150);

    const statusTimer = setInterval(() => {
      setStatusIndex(prev => (prev + 1) % statusMessages.length);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Soft Artistic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" 
        />
        
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Logo Composition */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          
          {/* Artistic Hexagonal Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z"
              fill="none"
              stroke="url(#artGrad)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="artGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2ff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo Container - Clean Glassmorphism */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-44 h-44 rounded-full p-1 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden"
          >
            <motion.img 
              src={LOGO_URL} 
              className="w-full h-full object-cover rounded-full p-2 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Subtle Light Reflection */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent w-[200%] h-full -translate-x-full"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
          </motion.div>
        </div>

        {/* Elegant Progress Indicator */}
        <div className="mt-16 w-48 space-y-4">
          <div className="relative h-px w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{ width: `${progress}%` }}
              transition={{ type: "spring", damping: 20 }}
            />
          </div>
          
          <div className="flex justify-between items-center px-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[10px] text-slate-400 font-medium tracking-wide italic"
              >
                {statusMessages[statusIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] text-slate-500 font-bold tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Brand Signature */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <div className="text-white text-sm font-light tracking-[0.4em] uppercase">
          Hexa<span className="font-bold text-cyan-400">Craft</span>
        </div>
        <div className="w-8 h-px bg-white/20" />
      </motion.div>

      {/* Boutique Floating Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0 
            }}
            animate={{ 
              top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
