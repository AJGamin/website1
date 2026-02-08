import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MinecraftPricing from './pages/MinecraftPricing';
import VPSPricing from './pages/VPSPricing';
import Calculator from './pages/Calculator';
import Rewards from './pages/Rewards';
import Important from './pages/Important';
import Legal from './pages/Legal';
import KnowledgeBase from './pages/KnowledgeBase';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import { MEDIA } from './constants';

const GlobalBackground: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  const getVideo = () => {
    switch(currentPage) {
      case 'minecraft': return MEDIA.VIDEO_3;
      case 'vps': return MEDIA.VIDEO_2;
      default: return MEDIA.VIDEO_1;
    }
  };

  return (
    <div className="video-bg-container">
      <AnimatePresence mode="wait">
        <motion.video
          key={getVideo()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={getVideo()} type="video/mp4" />
        </motion.video>
      </AnimatePresence>
      <div className="video-overlay" />
      <div className="mesh-bg" />
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'minecraft': return <MinecraftPricing />;
      case 'vps': return <VPSPricing />;
      case 'calculator': return <Calculator />;
      case 'rewards': return <Rewards />;
      case 'important': return <Important />;
      case 'legal': return <Legal />;
      case 'kb': return <KnowledgeBase />;
      case 'intel': return <KnowledgeBase />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-cyan-500 selection:text-white relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[9999]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background is FIXED and detached from the main flow */}
            <GlobalBackground currentPage={currentPage} />
            
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
            <AnimatePresence mode="wait">
              <motion.main
                key={currentPage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {renderPage()}
              </motion.main>
            </AnimatePresence>

            <Footer setCurrentPage={setCurrentPage} />
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;