
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Shield, Globe, Server, Settings, ChevronRight, Activity, Database, CheckCircle, Award, Users, ShieldCheck, Map } from 'lucide-react';
import { MEDIA } from '../constants';
import FeatureGrid from '../components/FeatureGrid';

const StatModule = ({ label, val, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="p-10 glass-card rounded-[3rem] border-white/5 flex flex-col items-center text-center group relative overflow-hidden bg-black/40 backdrop-blur-xl"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2 tabular-nums">{val}</div>
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{label}</div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full -translate-y-16 translate-x-16 group-hover:bg-cyan-500/10 transition-colors" />
  </motion.div>
);

const Home: React.FC<{ setCurrentPage: (p: string) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="relative pt-24 pb-20 bg-transparent">
      {/* Subtle texture overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="home-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#home-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center py-24 text-center bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center space-x-6 mb-16">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-white/10 p-1 shadow-2xl">
                 <img src={MEDIA.LOGO_WEB} className="w-full h-full rounded-full" alt="HexaCraft" />
              </div>
              <div className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.4em] shadow-lg">
                GRID STATUS: OPTIMAL
              </div>
            </div>

            <h1 className="heading-font text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tighter uppercase italic text-white leading-[1.2] pb-6 overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              BETTER <br /> <span className="text-gradient-cyan px-4">HOSTING</span> <br /> FOR ALL.
            </h1>
            
            <p className="text-slate-200 text-lg md:text-xl font-medium mb-12 max-w-2xl leading-relaxed italic drop-shadow-2xl opacity-90">
              Premium performance nodes. Strategic Indian clusters. <br className="hidden md:block" />
              Built for the next generation of digital infrastructure.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('minecraft')}
                className="bg-white text-black px-10 py-5 rounded-[2rem] font-black text-lg uppercase italic shadow-2xl flex items-center group transition-all"
              >
                DEPLOY NOW
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentPage('calculator')}
                className="glass border border-white/20 text-white px-8 py-5 rounded-[2rem] font-black text-lg uppercase italic hover:bg-white/10 transition-all backdrop-blur-md shadow-2xl"
              >
                CALCULATOR
              </motion.button>
            </div>

            <div className="mt-20 flex items-center space-x-8 bg-black/50 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full shadow-2xl">
               <div className="flex -space-x-5">
                  {[MEDIA.AVATAR_AJ, MEDIA.AVATAR_ANSH].map((img, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#020202] bg-slate-800 flex items-center justify-center shadow-2xl overflow-hidden">
                       <img src={img} className="w-full h-full object-cover" alt="Staff" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-[3px] border-[#020202] bg-cyan-600 flex items-center justify-center text-[9px] font-black shadow-2xl italic">+4k</div>
               </div>
               <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] italic">
                 TRUSTED BY <span className="text-white">4,800+</span> ACTIVE INSTANCES
               </div>
            </div>
          </motion.div>
        </section>

        {/* Peering Matrix Section */}
        <section className="mb-48 relative z-10">
          <div className="glass-card rounded-[3.5rem] p-12 md:p-16 border-white/10 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-2xl">
            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none flex items-center justify-center">
               <Map className="w-full h-full scale-110" />
            </div>
            
            <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center justify-center space-x-4 text-cyan-500 font-bold text-[9px] uppercase tracking-widest mb-6 italic">
                <Globe className="w-5 h-5" />
                <span>Global Peering Matrix</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl">
                Zero-Lag <br /> <span className="text-gradient-cyan">Global Scale.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
               {[
                 { region: "Delhi Cluster", ping: "7ms", desc: "Native Subcontinent Core" },
                 { region: "Mumbai Edge", ping: "14ms", desc: "Western Gateway Node" },
                 { region: "Singapore Hub", ping: "34ms", desc: "SEA Performance Cluster" },
                 { region: "Frankfurt Hub", ping: "110ms", desc: "European Tier-III Facility" },
                 { region: "London Relay", ping: "128ms", desc: "Northern European Link" },
                 { region: "Tokyo Gateway", ping: "84ms", desc: "Asia-Pacific Edge" }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ y: -5, scale: 1.02 }}
                   className="p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all group/item flex flex-col shadow-xl"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-white font-black text-lg italic uppercase tracking-tight">{item.region}</span>
                       <div className="text-xl font-black text-cyan-400 italic tabular-nums">{item.ping}</div>
                    </div>
                    <span className="text-slate-400 text-[8px] font-bold uppercase tracking-widest mt-auto italic">{item.desc}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48 relative z-10">
           <StatModule label="Mitigation Capacity" val="1.2TBPS" icon={ShieldCheck} color="bg-purple-600/80" />
           <StatModule label="Storage Efficiency" val="7.4GB/S" icon={Database} color="bg-cyan-600/80" />
           <StatModule label="Uptime Registry" val="99.99%" icon={Activity} color="bg-green-600/80" />
        </div>

        {/* Feature Overlay */}
        <section className="mb-48 relative z-10 bg-transparent">
          <div className="text-center mb-16">
             <div className="text-slate-400 font-bold text-[9px] uppercase tracking-[0.5em] mb-4 italic">Engineering Foundaries</div>
             <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter drop-shadow-2xl">Premium <span className="text-gradient-cyan">Standard.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Cpu, title: "Ryzen 9 Gen 4", desc: "Single-core performance leadership for extreme gaming throughput." },
               { icon: Zap, title: "DDR5 ECC RAM", desc: "Industrial-grade error correction for massive scale plugin loads." },
               { icon: ShieldCheck, title: "Edge Layer-7", desc: "Automated packet scrubbing mitigation with zero latency overhead." }
             ].map((spec, i) => (
               <div key={i} className="p-10 glass-card rounded-[3rem] border-white/10 group hover:bg-black/50 transition-all relative overflow-hidden shadow-2xl backdrop-blur-md bg-black/30">
                  <spec.icon className="w-10 h-10 text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-white font-black text-xl uppercase italic tracking-tighter mb-4">{spec.title}</h4>
                  <p className="text-slate-300 text-sm font-medium italic leading-relaxed opacity-90">{spec.desc}</p>
               </div>
             ))}
          </div>
        </section>

        <FeatureGrid />
      </div>
    </div>
  );
};

export default memo(Home);
