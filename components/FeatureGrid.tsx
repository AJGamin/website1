
import React, { memo } from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const FeatureCard: React.FC<{ feature: typeof FEATURES[0], index: number }> = ({ feature, index }) => {
  const IconComponent = (Icons as any)[feature.icon];
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return { text: 'text-purple-400', bg: 'bg-purple-500/10', stroke: '#a855f7' };
      case 'cyan': return { text: 'text-cyan-400', bg: 'bg-cyan-500/10', stroke: '#06b6d4' };
      case 'green': return { text: 'text-green-400', bg: 'bg-green-500/10', stroke: '#22c55e' };
      case 'pink': return { text: 'text-pink-400', bg: 'bg-pink-500/10', stroke: '#ec4899' };
      default: return { text: 'text-slate-400', bg: 'bg-slate-500/10', stroke: '#64748b' };
    }
  };

  const colors = getColorClasses(feature.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
    >
      {/* Animated Corner SVG Accent */}
      <svg className="absolute top-0 right-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
        <motion.path
          d="M 60 0 L 100 0 L 100 40"
          fill="none"
          stroke={colors.stroke}
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 + (index * 0.1), ease: "easeInOut" }}
        />
        <motion.circle 
          cx="100" cy="0" r="4" 
          fill={colors.stroke}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
        />
      </svg>

      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${colors.bg} group-hover:scale-110 transition-all duration-500 z-10`}>
        <motion.div
          animate={{ boxShadow: [`0 0 0px ${colors.stroke}00`, `0 0 15px ${colors.stroke}40`, `0 0 0px ${colors.stroke}00`] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-full h-full flex items-center justify-center rounded-2xl"
        >
          {IconComponent && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 15 }}
            >
              <IconComponent className={`w-6 h-6 ${colors.text}`} />
            </motion.div>
          )}
        </motion.div>
      </div>

      <h3 className="text-xl font-black mb-3 text-white group-hover:text-white transition-colors relative z-10 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors font-medium">
        {feature.description}
      </p>

      {/* Hover Background Shine */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
      />
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6"
          >
            Engineering Excellence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Cutting-Edge <span className="gradient-text">Features</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Every layer of our stack is optimized for maximum throughput and near-zero latency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureGrid);
