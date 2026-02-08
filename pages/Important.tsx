import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, User, Star, Heart, Ban, MessageSquare, AlertCircle, Eye, Rocket, Info, Users, Zap, Cpu } from 'lucide-react';
import { MEDIA } from '../constants';

const StaffID = ({ name, role, color, img, description }: { name: string, role: string, color: string, img: string, description: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-8 rounded-[2.5rem] glass-card flex flex-col items-center text-center group border-${color}-500/20 relative overflow-hidden bg-black/40 backdrop-blur-xl`}
    >
      <div className={`w-20 h-20 rounded-full bg-${color}-500/10 flex items-center justify-center mb-6 border border-${color}-500/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center space-x-2 mb-2">
         <Star className={`w-3 h-3 text-${color}-500 fill-${color}-500`} />
         <h4 className="text-xl font-black text-white italic uppercase tracking-tighter">{name}</h4>
      </div>
      <p className={`text-${color}-400 text-[8px] font-bold uppercase tracking-widest mb-4`}>{role}</p>
      
      <p className="text-slate-400 text-xs font-medium italic leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Important: React.FC = () => {
  return (
    <div className="pt-48 pb-48 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-8"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Foundry Mandates</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="heading-font text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic text-white leading-tight"
          >
            Server <span className="text-gradient-cyan">Rules.</span>
          </motion.h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed italic">
            Adhere to the central registry mandates to ensure absolute grid stability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <section className="p-10 rounded-[3rem] glass-card border-white/10 relative overflow-hidden bg-black/40">
               <h2 className="heading-font text-3xl font-black text-white mb-10 tracking-tighter uppercase italic flex items-center">
                 Community Mandates
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Grid Respect", desc: "Treat all grid members with professional respect. Zero tolerance for toxicity.", icon: Heart, color: "text-red-500" },
                    { title: "Protocol Integrity", desc: "No spamming or unauthorized pings. Keep channels optimized for data flow.", icon: MessageSquare, color: "text-blue-500" },
                    { title: "Safety Buffer", desc: "No NSFW, malicious links, or illegal content. Security is paramount.", icon: Eye, color: "text-purple-500" },
                    { title: "Exclusivity", desc: "No advertising external hosting services within the HexaCraft perimeter.", icon: Rocket, color: "text-green-500" }
                  ].map((rule, i) => (
                    <div key={i} className="space-y-4 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center space-x-4">
                        <rule.icon className={`w-4 h-4 ${rule.color}`} />
                        <h4 className="text-white font-black text-base uppercase italic">{rule.title}</h4>
                      </div>
                      <p className="text-slate-500 text-xs font-medium italic leading-relaxed">{rule.desc}</p>
                    </div>
                  ))}
               </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-slate-500 font-bold text-[9px] uppercase tracking-widest mb-8 px-8 italic text-center">Server Command</h4>
            <StaffID 
              name="InsaneAj" 
              role="Foundry Owner" 
              color="purple" 
              img={MEDIA.AVATAR_AJ}
              description="Managing global infrastructure and strategic community scaling." 
            />
            <StaffID 
              name="ANSH9BOSS" 
              role="Lead Developer" 
              color="cyan" 
              img={MEDIA.AVATAR_ANSH}
              description="Engineering the high-frequency backend and automated sync systems." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Important;