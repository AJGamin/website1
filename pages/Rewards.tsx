
import React from 'react';
import { Users, Rocket, Zap, Gift, ChevronRight, Cpu, HardDrive, ShieldAlert, Ticket, Clock, MessageSquare, AlertCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Rewards: React.FC = () => {
  const DISCORD_LINK = "https://discord.gg/G4DCKEfatk";
  const TICKET_CHANNEL_LINK = "https://discord.com/channels/1304092945779003522/1413608225491648642";

  return (
    <div className="pt-48 pb-32 min-h-screen relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8"
          >
            <Gift className="w-4 h-4" />
            <span>Matrix Incentives</span>
          </motion.div>
          <h1 className="heading-font text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic text-white leading-tight drop-shadow-2xl">
            Free <br /> <span className="text-gradient-purple">Rewards.</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto italic leading-relaxed drop-shadow-lg">
            Support the HexaCraft grid and unlock elite high-end silicon tiers at zero cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Invite Plan Specifications */}
            <section className="glass-card p-10 rounded-[3rem] border-cyan-500/20 bg-black/40 backdrop-blur-2xl relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                 <Users className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="w-5 h-5 text-cyan-500" />
                    <span className="text-cyan-500 font-black uppercase tracking-[0.2em] text-[8px]">Invite Registry Plan</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-10">HexaCraft <br /> Invite Plans.</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                     <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 text-center group/card hover:border-cyan-500/30 transition-all">
                        <Zap className="w-6 h-6 mx-auto mb-3 text-cyan-400" />
                        <div className="text-xl font-black text-white italic uppercase mb-1">8GB</div>
                        <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black italic">DDR5 Memory</div>
                     </div>
                     <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 text-center group/card hover:border-cyan-500/30 transition-all">
                        <HardDrive className="w-6 h-6 mx-auto mb-3 text-cyan-400" />
                        <div className="text-xl font-black text-white italic uppercase mb-1">15GB</div>
                        <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black italic">NVMe SSD Array</div>
                     </div>
                     <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 text-center group/card hover:border-cyan-500/30 transition-all">
                        <Cpu className="w-6 h-6 mx-auto mb-3 text-cyan-400" />
                        <div className="text-xl font-black text-white italic uppercase mb-1">200%</div>
                        <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black italic">AMD EPYC 7B13</div>
                     </div>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 backdrop-blur-xl">
                     <div className="flex items-center space-x-4 mb-6">
                        <ShieldAlert className="w-5 h-5 text-cyan-500" />
                        <h4 className="text-white font-black text-xl uppercase italic tracking-tighter">Registry Rules.</h4>
                     </div>
                     <ul className="space-y-3">
                        {[
                          "Must have 5 verified invites before creating a ticket",
                          "Should not be affiliated with any J2J and J4J servers",
                          "Do NOT Ping STAFF members",
                          "Must maintain patience for about 24 hours during sync",
                          "Tickets created under incorrect categories result in a timeout"
                        ].map((rule, i) => (
                          <li key={i} className="flex items-start space-x-3 text-slate-400 text-xs italic font-medium">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                            <span>{rule}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </section>

            {/* Boost Perks Section */}
            <section className="glass-card p-10 rounded-[3rem] border-pink-500/20 bg-black/40 backdrop-blur-2xl relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                 <Rocket className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Rocket className="w-5 h-5 text-pink-500" />
                    <span className="text-pink-500 font-black uppercase tracking-[0.2em] text-[8px]">Boost Perks Protocol</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                     <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                     <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">HexaCraft Boost Perks.</h2>
                  </div>
                  <p className="text-slate-400 text-sm mb-10 italic font-medium max-w-xl opacity-90">Support the server with a Discord Boost and unlock awesome hosting rewards instantly!</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* 1 Boost */}
                     <div className="p-8 rounded-[2rem] bg-black/60 border border-pink-500/20 space-y-6 group/plan backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center space-x-3">
                              <Rocket className="w-5 h-5 text-pink-500" />
                              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">1 Boost</h3>
                           </div>
                        </div>
                        <div className="space-y-3">
                           {[
                             { label: 'Memory', val: '4GB RAM', icon: Zap },
                             { label: 'Storage', val: '10GB Disk', icon: HardDrive },
                             { label: 'Compute', val: '200% CPU', icon: Cpu }
                           ].map((perk, i) => (
                             <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-slate-500 font-black text-[8px] uppercase tracking-widest italic">{perk.label}</span>
                                <span className="text-white font-black italic uppercase text-sm">{perk.val}</span>
                             </div>
                           ))}
                        </div>
                     </div>

                     {/* 2 Boosts */}
                     <div className="p-8 rounded-[2rem] bg-pink-500/10 border border-pink-500/40 space-y-6 group/plan shadow-2xl backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center space-x-3">
                              <Rocket className="w-5 h-5 text-pink-500 animate-pulse" />
                              <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">2 Boosts</h3>
                           </div>
                        </div>
                        <div className="space-y-3">
                           {[
                             { label: 'Memory', val: '8GB RAM', icon: Zap },
                             { label: 'Storage', val: '15GB Disk', icon: HardDrive },
                             { label: 'Compute', val: '300% CPU', icon: Cpu }
                           ].map((perk, i) => (
                             <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-slate-500 font-black text-[8px] uppercase tracking-widest italic">{perk.label}</span>
                                <span className="text-pink-400 font-black italic uppercase text-sm">{perk.val}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-8">
             <div className="sticky top-32 space-y-8">
                {/* Ticket Steps */}
                <div className="glass-card p-8 rounded-[2.5rem] border-white/10 bg-black/40 backdrop-blur-2xl relative overflow-hidden group shadow-2xl">
                   <Ticket className="w-8 h-8 text-cyan-500 mb-6" />
                   <h4 className="text-white font-black text-xl uppercase italic tracking-tighter mb-6">Ticket Registry.</h4>
                   <div className="space-y-4">
                      {[
                        { step: "Visit Registry Channel", link: TICKET_CHANNEL_LINK },
                        { step: "Initiate Ticket Sequence" },
                        { step: "Click 'Claim' Protocol" },
                        { step: "Access Dedicated Sync Channel" }
                      ].map((item, i) => (
                        <div key={i} className="relative pl-8">
                           <div className="absolute left-0 top-0 w-5 h-5 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-[8px] font-black border border-cyan-500/20">{i+1}</div>
                           <p className="text-white font-black text-[10px] uppercase italic tracking-tight">{item.step}</p>
                           {item.link && (
                              <button 
                                onClick={() => window.open(item.link, '_blank')}
                                className="mt-1 text-cyan-400 text-[8px] font-black uppercase tracking-widest italic hover:text-white flex items-center group/link"
                              >
                                Access Link <ChevronRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                              </button>
                           )}
                        </div>
                      ))}
                   </div>
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     onClick={() => window.open(DISCORD_LINK, '_blank')}
                     className="mt-8 w-full py-4 bg-white text-black rounded-2xl font-black text-[9px] uppercase tracking-widest italic shadow-xl hover:bg-cyan-500 hover:text-white transition-all"
                   >
                     Initialize Ticket
                   </motion.button>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
