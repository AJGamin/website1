import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, CheckCircle, AlertTriangle, RefreshCcw, Hexagon, Radio, Globe } from 'lucide-react';

const Status: React.FC = () => {
  const [nodes, setNodes] = useState([
    { id: 'HX-IN-CORE', name: 'Delhi Silicon Grid (IN)', type: 'Compute', status: 'operational', load: 14, uptime: '100%' },
    { id: 'HX-DE-RELAY', name: 'Frankfurt Matrix (DE)', type: 'Network', status: 'operational', load: 42, uptime: '99.99%' },
    { id: 'HX-SG-HUB', name: 'Singapore Edge (SG)', type: 'Compute', status: 'operational', load: 31, uptime: '100%' },
    { id: 'HX-NY-CORE', name: 'New York Matrix (US)', type: 'Network', status: 'maintenance', load: 0, uptime: '99.95%' },
    { id: 'HX-IN-SEC', name: 'Mumbai Anycast (IN)', type: 'Shield', status: 'operational', load: 58, uptime: '100%' },
  ]);

  const [blockedAttacks, setBlockedAttacks] = useState(148293);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockedAttacks(prev => prev + Math.floor(Math.random() * 8));
      setNodes(prev => prev.map(node => ({
        ...node,
        load: node.status === 'operational' ? Math.max(8, Math.min(92, node.load + (Math.random() * 4 - 2))) : 0
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-48 pb-32 min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22d3ee,transparent_70%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em] italic">Real-Time Registry</span>
            </motion.div>
            <h1 className="heading-font text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic text-white leading-none">
              Hex <span className="text-gradient-purple">Pulse.</span>
            </h1>
          </div>
          <div className="glass-card px-8 py-5 rounded-2xl border-cyan-500/20 flex items-center space-x-5 backdrop-blur-3xl">
            <div className="relative">
              <CheckCircle className="w-6 h-6 text-cyan-500" />
              <motion.div animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-cyan-500 rounded-full" />
            </div>
            <div>
              <div className="text-xl font-black text-white uppercase italic tracking-tighter leading-none mb-0.5">Grid Stable</div>
              <div className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Global Matrix: 100% Efficiency</div>
            </div>
          </div>
        </div>

        {/* Global Heatmap Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <motion.div whileHover={{ y: -5 }} className="lg:col-span-2 glass-card p-12 rounded-[3.5rem] border-cyan-500/20 bg-cyan-500/[0.03] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Shield className="w-40 h-40 text-cyan-500" />
            </div>
            <div className="relative z-10 flex items-center space-x-4 mb-10">
               <Shield className="w-6 h-6 text-cyan-500" />
               <h3 className="text-white font-black text-xl tracking-tight uppercase italic">Hex-Shield Anycast Engine</h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <motion.div 
                  key={blockedAttacks}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-black text-white tracking-tighter italic tabular-nums leading-none"
                >
                  {blockedAttacks.toLocaleString()}
                </motion.div>
                <div className="text-cyan-400 text-[9px] font-black uppercase tracking-[0.3em] mt-6 flex items-center">
                  <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyan-500 mr-2.5" />
                  Threat Protocols Mitigated Today
                </div>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                 <div className="text-slate-500 text-[7px] font-black uppercase tracking-widest mb-1">Peak Mitigation Cap</div>
                 <div className="text-white font-black text-lg italic uppercase">1.2 TBPS Grid</div>
              </div>
            </div>
          </motion.div>

          <div className="glass-card p-10 rounded-[3.5rem] flex flex-col justify-center border-white/5">
            <h4 className="text-slate-500 font-black text-[9px] uppercase tracking-[0.4em] mb-8 italic">Core Health Registry</h4>
            <div className="space-y-8">
              {[
                { label: 'Latency (Asia Cluster)', val: '12ms', color: 'bg-cyan-500' },
                { label: 'Packet Integrity', val: '99.999%', color: 'bg-cyan-500' },
                { label: 'IOPS Stability', val: '100%', color: 'bg-purple-500' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between text-[9px] font-black mb-2">
                    <span className="text-slate-500 uppercase tracking-widest italic">{stat.label}</span>
                    <span className="text-white tabular-nums">{stat.val}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 2 }} className={`h-full ${stat.color} shadow-[0_0_8px_currentColor]`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Node Table */}
        <div className="glass-card rounded-[3.5rem] overflow-hidden border-white/5">
          <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
            <h3 className="text-white font-black text-xl flex items-center uppercase italic tracking-tighter">
              <Hexagon className="w-5 h-5 mr-3 text-cyan-500" />
              Infrastructure Matrix
            </h3>
            <div className="flex items-center space-x-2.5 text-[8px] font-black text-slate-500 uppercase tracking-widest italic">
              <RefreshCcw className="w-3.5 h-3.5 animate-spin text-cyan-500" />
              <span>Polling Grid Hardware...</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Registry ID</th>
                  <th className="px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Region / Grid Cluster</th>
                  <th className="px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Operational Status</th>
                  <th className="px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Compute Load</th>
                  <th className="px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Stability Registry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {nodes.map(node => (
                  <tr key={node.id} className="hover:bg-white/[0.03] transition-colors group">
                    <td className="px-8 py-6 font-mono text-[10px] text-cyan-400">{node.id}</td>
                    <td className="px-8 py-6">
                      <div className="text-white font-black text-base mb-0.5 italic uppercase tracking-tight">{node.name}</div>
                      <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{node.type} Architecture</div>
                    </td>
                    <td className="px-8 py-6">
                      {node.status === 'operational' ? (
                        <span className="flex items-center text-cyan-500 text-[9px] font-black uppercase tracking-widest italic">
                          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2.5" />
                          Online
                        </span>
                      ) : (
                        <span className="flex items-center text-yellow-500 text-[9px] font-black uppercase tracking-widest italic">
                          <AlertTriangle className="w-3.5 h-3.5 mr-2.5" />
                          Registry Hold
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-28 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div animate={{ width: `${node.load}%` }} className={`h-full ${node.load > 80 ? 'bg-red-500' : node.load > 50 ? 'bg-yellow-500' : 'bg-cyan-500'}`} />
                        </div>
                        <span className="text-[10px] font-black text-white tabular-nums">{Math.round(node.load)}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xs font-black text-slate-500 italic tabular-nums">{node.uptime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;