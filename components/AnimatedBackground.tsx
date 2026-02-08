
import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const nodes = useMemo(() => [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: 25 + Math.random() * 25,
    delay: Math.random() * -20,
    color: i % 2 === 0 ? '#22c55e' : '#3b82f6'
  })), []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-black">
      {/* Absolute Deep Black Overlay */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* Grid Pattern - Very Faint */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Floating Particles */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill={node.color}
              animate={{
                opacity: [0.03, 0.1, 0.03],
                y: [0, -60, 0]
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                delay: node.delay,
                ease: "linear"
              }}
            />
          </React.Fragment>
        ))}
      </svg>

      {/* Atmospheric Nebula Glares */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(34,197,94,0.02),transparent_40%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_90%,rgba(59,130,246,0.02),transparent_40%)]" />
    </div>
  );
};

export default memo(AnimatedBackground);
