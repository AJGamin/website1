import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Terminal, ChevronRight, MessageCircle } from 'lucide-react';
import { MEDIA } from '../constants';

type Question = {
  q: string;
  a: string;
};

const PREDEFINED_QUESTIONS: Question[] = [
  { q: "What are the Community Rules?", a: "Respect all users. No derogatory language, NSFW content, or spamming. Keep profanity to a minimum. No advertising other services." },
  { q: "What is the Refund Policy?", a: "Refunds are ONLY available within 1 day of purchase. After that, all payments are final. Chargebacks result in an immediate blacklist." },
  { q: "How do I claim Invite Rewards?", a: "Requires 5 verified invites. Specs: 8GB DDR5 RAM, 15GB NVMe, 200% AMD EPYC. Open a ticket in Discord to claim." },
  { q: "What are the Boost Perks?", a: "1 Boost: 4GB RAM, 10GB Disk. 2 Boosts: 8GB RAM, 15GB Disk. Boost our Discord server to unlock these instantly!" },
  { q: "Where are servers located?", a: "Our primary performance nodes are located in Delhi, India for ultra-low latency, with edge relays in Frankfurt and Singapore." },
  { q: "How can I contact staff?", a: "The best way is to open a ticket in our official Discord server. You can also reach us via WhatsApp support at +91 9604663733." }
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ type: 'q' | 'a', text: string }[]>([
    { type: 'a', text: "Welcome to HexaCraft Foundry Support. Please select a query from the matrix below." }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSelect = (q: Question) => {
    setHistory(prev => [...prev, { type: 'q', text: q.q }, { type: 'a', text: q.a }]);
  };

  const resetChat = () => {
    setHistory([{ type: 'a', text: "Welcome to HexaCraft Foundry Support. Please select a query from the matrix below." }]);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="absolute bottom-28 right-0 w-[26rem] h-[40rem] glass-card rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border-white/10 flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* Elegant Header */}
            <div className="p-8 border-b border-white/5 bg-white/[0.03] flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <div className="relative w-14 h-14">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"
                  />
                  <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                    <img src={MEDIA.LOGO_WEB} className="w-full h-full object-cover" alt="Support" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic mb-1">Foundry Interface</div>
                  <div className="text-[8px] font-black text-green-500 uppercase tracking-[0.4em] flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 shadow-[0_0_8px_#22c55e]" />
                    NODE_ACTIVE
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={resetChat} className="text-slate-500 hover:text-white transition-all bg-white/5 p-3 rounded-full">
                  <Terminal className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-all bg-white/5 p-3 rounded-full hover:bg-red-500/20">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Support Feed */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-black/10">
              {history.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'q' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-6 rounded-[2rem] text-[11px] font-medium leading-relaxed italic ${
                    msg.type === 'q' 
                      ? 'bg-white text-black font-black rounded-tr-none' 
                      : 'bg-white/5 border border-white/5 text-slate-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Matrix Query Selector */}
            <div className="p-8 bg-black/30 border-t border-white/5 space-y-3 overflow-y-auto max-h-[14rem] scrollbar-hide">
              <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-4 italic px-2">Support Matrix:</div>
              {PREDEFINED_QUESTIONS.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSelect(q)}
                  className="w-full text-left p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group flex items-center justify-between"
                >
                  <span className="text-[10px] font-black text-slate-400 group-hover:text-white uppercase italic tracking-tight">{q.q}</span>
                  <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
            
            <button 
              className="p-6 bg-cyan-500 text-center group hover:bg-white transition-all duration-500" 
              onClick={() => window.open('https://discord.gg/G4DCKEfatk', '_blank')}
            >
               <span className="text-[10px] font-black text-black uppercase tracking-[0.4em] italic">
                 OPEN_SUPPORT_TICKET
               </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-4xl border border-white/10 relative overflow-hidden group p-0 transition-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
        {isOpen ? (
          <X className="w-10 h-10 text-black relative z-10" />
        ) : (
          <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden shadow-2xl border border-black/5 ring-4 ring-white/10">
            <img src={MEDIA.LOGO_WEB} className="w-full h-full object-cover" alt="Chat" />
          </div>
        )}
        {!isOpen && (
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#020202] z-20 shadow-lg"
          />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;