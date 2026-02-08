
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Database, Globe, Settings, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

const Calculator: React.FC = () => {
  const [ram, setRam] = useState(16);
  const [cpu, setCpu] = useState(4);
  const [storage, setStorage] = useState(100);
  const [network, setNetwork] = useState(10); // Gbps
  const [shield, setShield] = useState(true);

  const DISCORD_LINK = "https://discord.gg/G4DCKEfatk";

  const calculatePrice = () => {
    const ramBase = ram * 32;
    const cpuBase = cpu * 110;
    const storageBase = (storage / 10) * 7;
    const networkBase = network === 10 ? 0 : 150;
    const shieldBase = shield ? 40 : 0;
    return Math.floor(ramBase + cpuBase + storageBase + networkBase + shieldBase);
  };

  const performanceScore = useMemo(() => {
    const s = Math.floor(((ram / 64) * 35) + ((cpu / 16) * 45) + ((storage / 500) * 20));
    return Math.min(100, s);
  }, [ram, cpu, storage]);

  const handleProvision = () => {
    window.open(DISCORD_LINK, '_blank');
  };

  return (
    <div className="pt-48 pb-48 relative overflow-hidden min-h-screen bg-transparent">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg className="w-full h-full">
          <pattern id="calcPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#calcPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
            <Settings className="w-4 h-4" />
            <span>Config Studio</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="heading-font text-2xl md:text-3xl font-black mb-6 tracking-tighter uppercase italic text-white leading-tight drop-shadow-2xl"
          >
            Build <br /><span className="text-gradient-cyan">Your Node.</span>
          </motion.h1>
          <p className="text-slate-300 text-lg font-medium max-w-xl leading-relaxed italic mx-auto lg:mx-0 drop-shadow-lg opacity-90">
            Select your exact hardware profile. Real-time cost estimation for custom hosting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-8 rounded-[2.5rem] border-white/10 space-y-10 shadow-2xl bg-black/30 backdrop-blur-2xl">
              
              {/* CPU */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shadow-lg">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-base uppercase tracking-tight italic">Compute Power</h4>
                      <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest italic">AMD EPYC vCores</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-white italic tracking-tighter tabular-nums">{cpu} Cores</span>
                </div>
                <input 
                  type="range" min="2" max="16" step="2" value={cpu}
                  onChange={(e) => setCpu(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* RAM */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shadow-lg">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-base uppercase tracking-tight italic">System Memory</h4>
                      <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest italic">Fast DDR5 Standard</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-white italic tracking-tighter tabular-nums">{ram} GB</span>
                </div>
                <input 
                  type="range" min="4" max="64" step="4" value={ram}
                  onChange={(e) => setRam(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Storage */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-lg">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-base uppercase tracking-tight italic">NVMe Storage</h4>
                      <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest italic">High IOPS Flash</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-white italic tracking-tighter tabular-nums">{storage} GB</span>
                </div>
                <input 
                  type="range" min="20" max="500" step="20" value={storage}
                  onChange={(e) => setStorage(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Toggles */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-5 rounded-2xl border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xl">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className={`w-4 h-4 ${shield ? 'text-cyan-400' : 'text-slate-600'}`} />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest italic">Anycast Shield</span>
                  </div>
                  <button 
                    onClick={() => setShield(!shield)}
                    className={`w-10 h-6 rounded-full p-1 transition-colors ${shield ? 'bg-cyan-500' : 'bg-white/10'}`}
                  >
                    <motion.div 
                      animate={{ x: shield ? 16 : 0 }}
                      className="w-4 h-4 bg-white rounded-full shadow-lg"
                    />
                  </button>
                </div>

                <div className="glass-card p-5 rounded-2xl border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xl">
                   <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-blue-500" />
                      <span className="text-[9px] font-black text-white uppercase tracking-widest italic">Network Speed</span>
                   </div>
                   <div className="flex space-x-1.5">
                      {[1, 10].map(s => (
                        <button 
                          key={s} 
                          onClick={() => setNetwork(s)}
                          className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all ${network === s ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/5 text-slate-500'}`}
                        >
                          {s}G
                        </button>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Result Panel */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div 
              layout
              className="glass-card p-8 md:p-10 rounded-[3rem] border-cyan-500/20 shadow-3xl bg-black/40 backdrop-blur-2xl"
            >
              <div className="mb-12">
                <h4 className="text-slate-500 font-bold text-[8px] uppercase tracking-[0.3em] mb-3 italic">Hardware Score</h4>
                <div className="flex items-end space-x-4">
                  <div className="text-5xl font-black text-white italic tracking-tighter leading-none tabular-nums">{performanceScore}%</div>
                  <div className="pb-2 flex-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${performanceScore}%` }} 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-16">
                 {[
                   { label: 'Core CPU', val: `₹${cpu * 110}` },
                   { label: 'RAM Memory', val: `₹${ram * 32}` },
                   { label: 'Storage Unit', val: `₹${(storage/10)*7}` },
                   { label: 'Shield & Network', val: `₹${network === 10 ? shield ? 40 : 0 : (shield ? 40 : 0) + 150}` }
                 ].map((row, i) => (
                   <div key={i} className="flex justify-between items-center text-slate-400 text-[9px] font-bold uppercase tracking-wider italic">
                      <span>{row.label}</span>
                      <span className="text-white tabular-nums">{row.val}</span>
                   </div>
                 ))}
                 
                 <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                    <div className="text-slate-500 font-bold text-[8px] uppercase tracking-[0.2em] italic mb-1">Estimated Cost</div>
                    <div className="flex items-baseline space-x-2">
                       <span className="text-4xl font-black text-white italic tracking-tighter tabular-nums">₹{calculatePrice()}</span>
                       <span className="text-slate-500 font-bold text-base uppercase italic">/mo</span>
                    </div>
                 </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleProvision}
                className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg transition-all shadow-3xl flex items-center justify-center group uppercase italic"
              >
                Launch Instance
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
