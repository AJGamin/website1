
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Globe, Zap, ShieldCheck, ArrowRight, Activity, Radio, Ticket, Clock, Coins } from 'lucide-react';
import { VPS_PLANS } from '../constants';

const VPSPricing: React.FC = () => {
  const TICKET_LINK = "https://discord.com/channels/1304092945779003522/1413608225491648642";
  const plan = VPS_PLANS[0];

  return (
    <div className="pt-48 pb-32 relative overflow-hidden bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
          >
            <Radio className="w-4 h-4" />
            <span>Cloud Infrastructure</span>
          </motion.div>
          <h1 className="heading-font text-3xl md:text-4xl font-black mb-6 uppercase italic tracking-tighter text-white leading-tight drop-shadow-2xl">
            Cloud <br /> <span className="text-gradient-purple">VPS.</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto italic leading-relaxed drop-shadow-lg opacity-90">
            Scalable virtual servers with fast connectivity and high performance.
          </p>
        </div>

        {/* Special Offer Highlight */}
        <div className="glass-card p-10 md:p-12 rounded-[3.5rem] border-white/10 bg-black/40 backdrop-blur-2xl relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Cpu className="w-48 h-48" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
             <div className="lg:col-span-7 space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest italic">
                    🔥 HOT VPS OFFER!!
                  </div>
                  <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest italic">
                    30MINS AUCTION!!!
                  </div>
                </div>

                <h2 className="heading-font text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">{plan.name}</h2>
                
                <div className="flex items-baseline space-x-4">
                  <span className="text-5xl font-black text-white italic tracking-tighter">₹{plan.price}</span>
                  <span className="text-slate-500 font-bold text-lg uppercase italic">/mo (Fixed)</span>
                </div>

                <div className="p-6 rounded-[2rem] bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between">
                   <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      <span className="text-xs font-black text-white uppercase italic tracking-widest">Available Slots:</span>
                   </div>
                   <span className="text-xl font-black text-cyan-400 italic">0/2</span>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                   <div className="flex items-center space-x-4 text-slate-300 font-medium italic">
                      <ShieldCheck className="w-5 h-5 text-cyan-500" />
                      <span className="text-sm">Enterprise Shield Protection</span>
                   </div>
                   <div className="flex items-center space-x-4 text-slate-300 font-medium italic">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span className="text-sm">Rapid Instance Deployment</span>
                   </div>
                </div>

                <button 
                  onClick={() => window.open(TICKET_LINK, '_blank')}
                  className="w-full md:w-auto px-12 py-5 bg-white text-black rounded-full font-bold text-xl uppercase italic shadow-3xl hover:bg-cyan-400 hover:text-white transition-all flex items-center justify-center group"
                >
                   Create Ticket
                   <Ticket className="w-6 h-6 ml-4 group-hover:rotate-12 transition-transform" />
                </button>
             </div>

             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Cpu, label: "Processor", val: plan.cpu },
                  { icon: Zap, label: "Memory", val: plan.ram },
                  { icon: HardDrive, label: "Storage", val: plan.storage },
                  { icon: Globe, label: "Location", val: plan.location },
                  { icon: Radio, label: "Network Speed", val: plan.network },
                  { icon: Activity, label: "Bandwidth", val: "35TB" }
                ].map((spec, i) => (
                  <div key={i} className="glass-card p-6 rounded-3xl border-white/5 hover:border-white/10 transition-all bg-black/60 backdrop-blur-xl">
                     <spec.icon className="w-6 h-6 text-cyan-500 mb-3" />
                     <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 italic">{spec.label}</div>
                     <div className="text-sm font-black text-white italic uppercase tracking-tight leading-tight">{spec.val}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Protocols */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Secure Servers', desc: 'Every VPS is protected by our advanced firewall system.' },
            { icon: Zap, title: 'Full Root Access', desc: 'You get total control over your server environment.' },
            { icon: Coins, title: 'Auction Terms', desc: 'Limited slots available. Fixed price, non-negotiable elite tier.' }
          ].map((f, i) => (
            <div key={i} className="glass-card p-8 rounded-[2.5rem] border-white/5 relative group overflow-hidden bg-black/40 backdrop-blur-xl">
               <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-5 transition-opacity"><f.icon className="w-16 h-16" /></div>
               <f.icon className="w-8 h-8 text-blue-500 mb-6" />
               <h4 className="text-white font-bold text-lg uppercase italic tracking-tight mb-3">{f.title}</h4>
               <p className="text-slate-400 leading-relaxed text-sm italic font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VPSPricing;
