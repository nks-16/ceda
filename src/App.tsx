import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingHero from './components/LandingHero';
import CEDALogo from './components/CEDALogo';
import AboutCEDA from './components/AboutCEDA';
import Opportunities from './components/Opportunities';
import InaugurationMessage from './components/InaugurationMessage';
import Footer from './components/Footer';
import './styles/globals.css';
import './styles/animations.css';

type PageState = 'landing' | 'logo' | 'opportunities' | 'about' | 'inaugurated';

function App() {
  const [pageState, setPageState] = useState<PageState>('landing');
  const [showAbout, setShowAbout] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setPageState('logo');
  };

  const handleLogoComplete = () => {
    // Show About CEDA popup after logo animation completes
    setTimeout(() => {
      setShowAbout(true);
      setPageState('about');
    }, 800);
  };

  const handleAboutClose = () => {
    setIsTransitioning(true);
    setShowAbout(false);
    // Smooth transition to opportunities - wait for modal to fully close
    setTimeout(() => {
      setPageState('opportunities');
      setIsTransitioning(false);
    }, 400); // Reduced from 600ms to 400ms for smoother transition
  };

  const handleOpportunitiesComplete = () => {
    setIsTransitioning(true);
    // Smooth transition to inaugurated page
    setTimeout(() => {
      setPageState('inaugurated');
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div className="App">
      <a href="#main-content" className="sr-only">Skip to main content</a>
      
      <main id="main-content">
        <AnimatePresence mode="wait">
          {pageState === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.5 }
              }}
            >
              <LandingHero onStart={handleStart} />
            </motion.div>
          )}

          {pageState === 'logo' && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0,
                scale: 1.1,
                y: -50,
                transition: { duration: 0.6, ease: 'easeInOut' }
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <CEDALogo onAnimationComplete={handleLogoComplete} />
            </motion.div>
          )}

          {pageState === 'about' && !showAbout && (
            <motion.div
              key="about-transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}

          {pageState === 'opportunities' && (
            <motion.div
              key="opportunities"
              initial={{ 
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{ 
                opacity: 0,
                scale: 1.05,
                y: -30,
                transition: { 
                  duration: 0.5,
                  ease: 'easeInOut'
                }
              }}
              transition={{ 
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <Opportunities shouldAnimate={true} onComplete={handleOpportunitiesComplete} />
            </motion.div>
          )}

          {pageState === 'inaugurated' && (
            <motion.div
              key="inaugurated"
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                rotateY: -15,
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
              }}
              transition={{ 
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                type: 'spring',
                stiffness: 80,
                damping: 12,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <InaugurationMessage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AboutCEDA isOpen={showAbout} onClose={handleAboutClose} />
      
      {pageState === 'opportunities' && <Footer />}
      {pageState === 'inaugurated' && <Footer />}
    </div>
  );
}

export default App;
