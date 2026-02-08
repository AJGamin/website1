import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Cpu, HardDrive, Layers } from 'lucide-react';
import { MEDIA } from './constants';

const GameSelection: React.FC = () => {
  const DISCORD_LINK = "https://discord.gg/G4DCKEfatk";

  const handleDeployNow = () => {
    window.open(DISCORD_LINK, '_blank');
  };

  return (
    <section className="py-32 bg-[#000] relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="100%" height="100%">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.4 L50 29 L25 43.4 L0 29 L0 14.4 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[5rem] font-black mb-6 tracking-tighter leading-none uppercase italic"
          >
            <span className="text-gradient-cyan">Foundry</span> Deployment
          </motion.h2>
          <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed italic">
            Ultra-low latency servers engineered for absolute scale and community stability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="glass p-8 rounded-[3rem] border-white/5 space-y-6 bg-black/40">
              <h3 className="text-slate-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 px-2 italic">Active Registry</h3>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full flex items-center justify-between p-7 rounded-[2rem] border border-cyan-500/30 bg-cyan-500/5 relative overflow-hidden group transition-all"
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                  />
                  <span className="text-xl font-black tracking-tight text-white uppercase italic">Minecraft</span>
                </div>
                <span className="text-[10px] font-black px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 uppercase tracking-widest border border-cyan-500/20 italic">Popular</span>
              </motion.button>
              
              {['Hytale', 'Rust', 'Ark'].map((game) => (
                <button
                  key={game}
                  className="w-full flex items-center justify-between p-7 rounded-[2rem] border border-white/5 bg-white/5 opacity-30 grayscale cursor-not-allowed group transition-all"
                  disabled
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <span className="text-xl font-black tracking-tight text-slate-500 uppercase italic">{game}</span>
                  </div>
                  <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest italic">Locked</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 relative overflow-hidden rounded-[4rem] glass min-h-[650px] flex flex-col shadow-2xl group/card gpu-accelerated border-white/5">
            <div className="absolute inset-0 z-0">
              <motion.img 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                src={MEDIA.IMG_PORTRAIT_1}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/card:scale-110"
                style={{ filter: 'brightness(0.3) saturate(1.2)' }}
              />
            </div>
            
            <div className="relative z-10 p-12 md:p-20 flex-1 flex flex-col justify-end">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center space-x-4 mb-6">
                  <Layers className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs font-black uppercase tracking-[0.5em] block text-cyan-500 italic">Central Cloud Instance</span>
                </div>
                <h3 className="text-6xl md:text-[6rem] font-black mb-8 tracking-tighter text-white italic uppercase leading-none">Minecraft</h3>
                <p className="text-slate-300 max-w-xl text-xl mb-16 leading-relaxed font-medium italic">
                  Premium Java & Bedrock instances provisioned on extreme performance silicon clusters. 
                  Zero-compromise stability for SMP and massive modpacks.
                </p>

                <div className="flex flex-wrap items-center justify-between pt-12 border-t border-white/10 gap-10">
                  <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2 italic">Entry Node Registry</span>
                      <div className="flex items-baseline space-x-3">
                        <span className="text-6xl font-black text-white tracking-tighter italic">₹20</span>
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-widest italic">/ Instance</span>
                      </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDeployNow}
                    className="bg-white text-black px-14 py-6 rounded-[2.5rem] font-black text-2xl transition-all shadow-3xl flex items-center group italic uppercase"
                  >
                    DEPLOY NOW
                    <ChevronRight className="w-7 h-7 ml-3 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(GameSelection);