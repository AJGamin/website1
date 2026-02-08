import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, Gamepad, Server, Shield, Globe, MessageSquare, ChevronRight, CreditCard, Cpu, Network, Zap, Terminal, HelpCircle } from 'lucide-react';

const KnowledgeBase: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const DISCORD_LINK = "https://discord.gg/G4DCKEfatk";

  const categories = [
    { id: 'all', label: 'All Topics', icon: Book },
    { id: 'minecraft', label: 'Minecraft', icon: Gamepad },
    { id: 'vps', label: 'VPS', icon: Server },
    { id: 'network', label: 'Network', icon: Network },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ];

  const articles = [
    { id: 1, cat: 'minecraft', title: 'How to install Modpacks', desc: 'A simple guide to installing modpacks on your Minecraft server.', detail: 'Use the auto-installer in our control panel to deploy any modpack in seconds.' },
    { id: 2, cat: 'security', title: 'DDoS Protection Overview', desc: 'Learn how our DDoS protection keeps your server safe.', detail: 'We use multi-layer protection to block attacks before they reach your server.' },
    { id: 3, cat: 'billing', title: 'Payment Methods', desc: 'All available payment methods including UPI and Crypto.', detail: 'We support GPay, PhonePe, Paytm, and various cryptocurrencies.' },
    { id: 4, cat: 'network', title: 'Low Latency in India', desc: 'Why our Delhi servers provide the best ping in India.', detail: 'Direct peering with Indian ISPs ensures the lowest latency for Indian players.' }
  ];

  const filteredArticles = articles.filter(a => 
    (selectedCat === 'all' || a.cat === selectedCat) &&
    (a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-48 pb-32 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-bold uppercase tracking-widest mb-8"
          >
            <Book className="w-4 h-4" />
            <span>Support Documentation</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic text-white"
          >
            Help <span className="text-gradient-cyan">Center</span>
          </motion.h1>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search for answers..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:border-cyan-500 transition-all font-bold text-base placeholder:text-slate-600 shadow-xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
             <div className="sticky top-32 space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all relative ${selectedCat === cat.id ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                  >
                    {selectedCat === cat.id && (
                      <motion.div layoutId="kbCatActive" className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl -z-10" />
                    )}
                    <cat.icon className={`w-4 h-4 ${selectedCat === cat.id ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span className="font-bold text-[10px] uppercase tracking-wider">{cat.label}</span>
                  </button>
                ))}

                <div className="mt-10 glass p-8 rounded-3xl border-white/10 text-center relative overflow-hidden">
                   <HelpCircle className="w-6 h-6 text-cyan-500 mx-auto mb-4" />
                   <h5 className="text-white font-black text-base mb-1.5">Still need help?</h5>
                   <p className="text-slate-500 text-[10px] mb-6 leading-relaxed font-medium">Our support team is available on Discord to assist you.</p>
                   <button 
                     onClick={() => window.open(DISCORD_LINK, '_blank')}
                     className="w-full py-3 bg-white text-black rounded-xl font-black text-[9px] uppercase tracking-widest shadow-xl transition-all hover:bg-cyan-500 hover:text-white"
                   >
                     Contact Support
                   </button>
                </div>
             </div>
          </div>

          {/* Articles */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-8 rounded-[2rem] glass border-white/10 hover:border-white/20 transition-all flex flex-col group bg-black/40"
                  >
                    <div className="text-[9px] font-bold text-cyan-500 uppercase tracking-widest mb-4 italic">{article.cat}</div>
                    <h3 className="text-white font-black text-lg mb-2.5 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1 font-medium italic">
                      {article.desc}
                    </p>
                    <div className="flex items-center text-white text-[9px] font-bold uppercase tracking-widest cursor-pointer group-hover:translate-x-1 transition-transform">
                      Read More <ChevronRight className="ml-1 w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-20 glass rounded-[2rem] border-white/10">
                 <Terminal className="w-10 h-10 text-slate-800 mx-auto mb-4" />
                 <p className="text-slate-600 font-bold text-[10px] uppercase tracking-widest">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;