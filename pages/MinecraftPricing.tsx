
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Layers, Shield, Activity, Database } from 'lucide-react';
import { MINECRAFT_STANDARD, MINECRAFT_PERFORMANCE } from '../constants';

const MinecraftPricing: React.FC = () => {
  const [tier, setTier] = useState<'standard' | 'performance'>('performance');
  const DISCORD_LINK = "https://discord.gg/G4DCKEfatk";

  const activePlans = tier === 'standard' ? MINECRAFT_STANDARD : MINECRAFT_PERFORMANCE;

  return (
    <div className="relative pt-48 pb-32 min-h-screen bg-transparent">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-transparent">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-10"
          >
            <Layers className="w-4 h-4" />
            <span>Minecraft Hosting</span>
          </motion.div>
          <h1 className="heading-font text-3xl md:text-4xl font-black mb-6 uppercase italic tracking-tighter text-white drop-shadow-2xl">
            Hosting <span className="text-gradient-purple">Plans.</span>
          </h1>

          {/* Tier Toggle */}
          <div className="flex justify-center mt-6">
            <div className="p-1.5 glass-card rounded-full flex items-center space-x-2 border-white/5 shadow-2xl backdrop-blur-md">
              <button 
                onClick={() => setTier('standard')}
                className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${tier === 'standard' ? 'bg-white text-black' : 'text-slate-400 hover:text-white'}`}
              >
                Standard
              </button>
              <button 
                onClick={() => setTier('performance')}
                className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${tier === 'performance' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}`}
              >
                Performance
              </button>
            </div>
          </div>
        </div>

        {/* Specs Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: 'Processor', val: tier === 'performance' ? 'AMD EPYC 9354P' : 'Intel Xeon Gold', icon: Cpu },
            { label: 'Memory', val: tier === 'performance' ? 'Fast DDR5 RAM' : 'DDR4 RAM', icon: Zap },
            { label: 'Protection', val: 'Full DDoS Mitigation', icon: Shield },
          ].map((spec, i) => (
            <div key={i} className="glass-card p-6 rounded-[2rem] border-white/5 flex items-center space-x-5 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-500"><spec.icon className="w-5 h-5" /></div>
              <div>
                <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">POCKET SPEC</div>
                <div className="text-sm font-bold text-white italic uppercase tracking-tight">{spec.val}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {activePlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className={`relative group p-10 rounded-[3rem] glass-card flex flex-col h-full border-white/5 hover:border-cyan-500/20 transition-all backdrop-blur-xl ${plan.recommended ? 'border-cyan-500/30 bg-cyan-500/[0.05]' : ''}`}
              >
                <div className="mb-8">
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-2">Instance Level</div>
                  <h3 className="heading-font text-2xl font-black text-white italic uppercase tracking-tighter mb-3">{plan.name}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-white italic tracking-tighter">₹{plan.price}</span>
                    <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest italic">/mo</span>
                  </div>
                </div>

                <div className="space-y-3 mb-10 flex-1">
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Memory</span>
                    <span className="text-[11px] font-bold text-white uppercase italic">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">CPU Power</span>
                    <span className="text-[11px] font-bold text-white uppercase italic">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Storage</span>
                    <span className="text-[11px] font-bold text-white uppercase italic">{plan.storage}</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(DISCORD_LINK, '_blank')}
                  className="w-full py-5 rounded-[1.2rem] font-bold uppercase tracking-[0.2em] text-[9px] transition-all flex items-center justify-center space-x-3 bg-white text-black hover:bg-cyan-500 hover:text-white shadow-xl"
                >
                  <span>Order Now</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Guarantees */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Uptime', val: '99.9% Uptime', icon: Activity },
            { label: 'Security', val: 'Advanced Shield', icon: Shield },
            { label: 'Backup', val: 'Safe & Secure', icon: Database },
          ].map((g, i) => (
            <div key={i} className="text-center p-8 glass-card rounded-[2.5rem] border-white/5 backdrop-blur-lg">
              <g.icon className="w-7 h-7 text-cyan-500 mx-auto mb-3" />
              <div className="text-white font-bold text-base italic uppercase tracking-tight mb-1">{g.val}</div>
              <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">{g.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinecraftPricing;
