import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './CEDALogo.module.css';

interface CEDALogoProps {
  onAnimationComplete?: () => void;
}

const CEDALogo = ({ onAnimationComplete }: CEDALogoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showNISB, setShowNISB] = useState(false);
  const [showCEDA, setShowCEDA] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Progress animation over 3.5 seconds for better performance
    const duration = 3500;
    const steps = 100;
    const interval = duration / steps;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      // Show NISB logo when progress reaches 15%
      if (currentStep === 15 && !showNISB) {
        setShowNISB(true);
      }
      
      // Show transition with "Inaugurates" text at 35% (appears early)
      if (currentStep === 35 && !showTransition) {
        setShowTransition(true);
      }
      
      // Show CEDA logo when progress reaches 50%
      if (currentStep === 50 && !showCEDA) {
        setShowCEDA(true);
      }
      
      if (currentStep >= steps) {
        clearInterval(progressInterval);
        // Call completion after progress finishes
        setTimeout(() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }, 300);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, [showNISB, showCEDA, showTransition, onAnimationComplete]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
          <div className={styles.progressText}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </div>

        <motion.div
          className={styles.logoWrapper}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <div className={styles.logoContainer}>
            {/* NISB Logo - appears first as the inaugurator */}
            <AnimatePresence>
              {showNISB && (
                <motion.div
                  key="nisb"
                  className={styles.nisbLogoBox}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className={styles.logoBoxInner}>
                    <img 
                      src="/logos/NISB short black (2).png" 
                      alt="NISB Logo" 
                      className={styles.nisbLogo}
                      loading="eager"
                      decoding="async"
                    />
                    <motion.p
                      className={styles.logoLabel}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      NISB
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Transition Arrow/Line - shows "Inaugurates" text initially */}
            <AnimatePresence>
              {showTransition && (
                <motion.div
                  key="transition"
                  className={styles.transitionContainer}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <motion.div
                    className={styles.transitionLine}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <motion.div
                      className={styles.arrow}
                      animate={{ 
                        x: showCEDA ? [0, 10, 0] : 0,
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: showCEDA ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                  <motion.p
                    className={styles.transitionText}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    Inaugurates
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CEDA Logo - appears and moves toward NISB for inauguration */}
            <AnimatePresence>
              {showCEDA && (
                <motion.div
                  key="ceda"
                  className={styles.cedaLogoBox}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className={styles.logoBoxInner}>
                    <div className={styles.logoImageWrapper}>
                      <motion.img
                        src="/logos/CEEDA.png"
                        alt="CEDA Logo"
                        className={styles.logoImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
                        loading="eager"
                        decoding="async"
                        onError={(e) => {
                          console.error('Logo failed to load');
                        }}
                      />
                      {showCEDA && (
                        <motion.div
                          className={styles.logoShine}
                          initial={{ x: '-100%' }}
                          animate={{ x: '200%' }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </div>
                    <motion.p
                      className={styles.logoSubtext}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3, ease: 'easeOut' }}
                    >
                      Council on Electronic Design Automation
                    </motion.p>
                    <motion.p
                      className={styles.logoLabel}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      CEDA
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CEDALogo;
