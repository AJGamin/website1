import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, RefreshCcw, ShieldAlert, CreditCard, AlertCircle, Fingerprint, Lock, Zap, Clock, Mail, MessageSquare, Phone, Ban } from 'lucide-react';
import { MEDIA } from '../constants';

const Legal: React.FC = () => {
  const DISCORD_LINK = "https://discord.gg/G4DCKEfatk";

  return (
    <div className="pt-48 pb-32 relative overflow-hidden bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10"
          >
            <Fingerprint className="w-4 h-4" />
            <span>Identity & Compliance</span>
          </motion.div>
          <h1 className="heading-font text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic text-white leading-tight drop-shadow-2xl">
            Service <br /> <span className="text-gradient-purple">Terms.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Refund Policy */}
            <section className="glass-card p-12 rounded-[3.5rem] border-red-500/20 bg-red-500/[0.02] relative overflow-hidden group">
              <RefreshCcw className="w-20 h-20 text-red-500/10 absolute top-8 right-8" />
              <h2 className="heading-font text-3xl font-black text-white italic uppercase tracking-tighter mb-10 flex items-center text-red-500">
                Refund Policy.
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0"><Clock className="w-5 h-5" /></div>
                  <p className="text-slate-400 text-lg italic font-medium leading-relaxed">Refunds are available <span className="text-white font-black">ONLY within 1 day</span> of purchase. After this window, all payments are final.</p>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0"><Ban className="w-5 h-5" /></div>
                  <p className="text-slate-400 text-lg italic font-medium leading-relaxed">Chargebacks are strictly prohibited. Disputes result in <span className="text-red-500 font-black">immediate service termination</span>.</p>
                </div>
                
                <div className="pt-10 border-t border-white/5 space-y-6">
                  <h4 className="text-white font-black text-[9px] uppercase tracking-[0.3em] mb-6">Support Contacts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/5 text-center">
                       <MessageSquare className="w-5 h-5 mx-auto mb-3 text-cyan-500" />
                       <div className="text-[9px] font-black text-white uppercase italic">Discord Ticket</div>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/5 text-center">
                       <Mail className="w-5 h-5 mx-auto mb-3 text-purple-500" />
                       <div className="text-[9px] font-black text-white uppercase italic">Direct DM</div>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/5 text-center">
                       <Phone className="w-5 h-5 mx-auto mb-3 text-green-500" />
                       <div className="text-[9px] font-black text-white uppercase italic">+91 9604663733</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Premium Rules */}
            <section className="glass-card p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group">
              <h2 className="heading-font text-3xl font-black text-white italic uppercase tracking-tighter mb-12 flex items-center">
                <Gavel className="w-8 h-8 mr-4 text-cyan-500" />
                Premium Rules.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Premium Role Policy", desc: "Leaving the Discord server during an active plan = Role & Support revoked immediately." },
                  { title: "No Unauthorized Changes", desc: "Do NOT modify server name or description from the panel. Violations = Penalties." },
                  { title: "Service Violation", desc: "Breaking premium rules = Immediate server suspension without warning." },
                  { title: "Permanent Servers", desc: "Permanent servers carry a 1-year guarantee. No guarantee provided after 1 year." },
                  { title: "Reselling Policy", desc: "You MUST inform us if you are reselling services. Unfair usage results in suspension." },
                  { title: "Fair Usage Protocol", desc: "CPU and memory spikes must remain within provisioned limits to avoid node throttling." }
                ].map((rule, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
                    <h4 className="text-cyan-400 font-black text-[10px] uppercase tracking-widest mb-3 italic">{rule.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed italic font-medium">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Payments */}
            <section className="glass-card p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden">
               <h2 className="heading-font text-3xl font-black text-white italic uppercase tracking-tighter mb-12 flex items-center text-green-500">
                  <CreditCard className="w-8 h-8 mr-4" />
                  Global Gateway.
               </h2>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-10">
                     <div className="flex items-center space-x-5 group">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-all font-black text-sm">₹</div>
                        <div>
                           <h4 className="text-white font-black text-lg italic uppercase">Regional UPI</h4>
                           <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest italic mt-0.5">GPay, PhonePe, Paytm</p>
                        </div>
                     </div>
                     <div className="flex items-center space-x-5 group">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-orange-500 group-hover:text-black transition-all font-black text-sm">₿</div>
                        <div>
                           <h4 className="text-white font-black text-lg italic uppercase">Crypto Anycast</h4>
                           <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest italic mt-0.5">LTC, BTC, USDT (All Nets)</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-slate-400 text-base italic leading-relaxed font-medium">
                        We support all major Indian and international payment gateways. Open a billing ticket on Discord to receive custom payment links or crypto wallet addresses.
                     </p>
                  </div>
               </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-10">
             <div className="glass-card p-10 rounded-[3rem] border-white/5">
                <AlertCircle className="w-8 h-8 text-slate-500 mb-6" />
                <h4 className="text-white font-black text-xl uppercase italic tracking-tight mb-3">Mandate Notice</h4>
                <p className="text-slate-500 text-xs italic font-medium leading-relaxed">All grid members must adhere to the central registry mandates. Violations result in global blacklisting.</p>
             </div>
             <div className="glass-card p-10 rounded-[3rem] border-cyan-500/20 bg-cyan-500/[0.02]">
                <ShieldAlert className="w-8 h-8 text-cyan-500 mb-6" />
                <h4 className="text-white font-black text-xl uppercase italic tracking-tight mb-3">Hex-Shield ACTIVE</h4>
                <p className="text-slate-500 text-xs italic font-medium leading-relaxed">Traffic is continuously scrubbed. Volumetric attacks are mitigated at the edge with zero packet drop.</p>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Legal;