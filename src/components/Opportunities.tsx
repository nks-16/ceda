import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Opportunities.module.css';

const opportunities = [
  'Hands-on EDA tool training',
  'Collaborative projects',
  'Research paper development support',
  'Hardware/FPGA prototyping guidance',
  'Internship & industry-interaction opportunities',
  'Participation in global IEEE CEDA Design Contests',
];

interface OpportunitiesProps {
  shouldAnimate?: boolean;
  onComplete?: () => void;
}

const Opportunities = ({ shouldAnimate = false, onComplete }: OpportunitiesProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (shouldAnimate) {
      // First show title
      setTimeout(() => {
        setShowTitle(true);
      }, 500);
      
      // Then start showing items one by one after title is visible
      const displayTimePerItem = 2500; // 2.5 seconds per item
      const startDelay = 1500; // Wait for title to appear
      
      opportunities.forEach((_, index) => {
        // Show item with smooth fade in
        setTimeout(() => {
          setCurrentIndex(index);
          setVisibleItems(prev => [...prev, index]);
        }, startDelay + (index * displayTimePerItem));
        
        // Hide item with smooth fade out before next one appears
        setTimeout(() => {
          setVisibleItems(prev => prev.filter(i => i !== index));
        }, startDelay + (index * displayTimePerItem) + displayTimePerItem - 600);
      });
      
      // Start exit animation before completion
      if (onComplete) {
        const totalTime = startDelay + (opportunities.length * displayTimePerItem) + 500;
        setTimeout(() => {
          setIsExiting(true);
        }, totalTime - 800);
        
        const timer = setTimeout(() => {
          onComplete();
        }, totalTime);
        return () => clearTimeout(timer);
      }
    }
  }, [shouldAnimate, onComplete]);

  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 1 }}
      animate={isExiting ? { 
        opacity: 0,
        scale: 0.98,
        y: -30,
      } : { 
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className={styles.container}>
        <AnimatePresence>
          {showTitle && !isExiting && (
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Opportunities
            </motion.h2>
          )}
        </AnimatePresence>
        
        {showTitle && !isExiting && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            Students joining NISB CEDA will gain access to:
          </motion.p>
        )}

        {/* Progress Indicator - only show when items start appearing */}
        {currentIndex >= 0 && !isExiting && (
          <motion.div 
            className={styles.progressContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: '0%' }}
                animate={{ 
                  width: `${((currentIndex + 1) / opportunities.length) * 100}%`
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            <div className={styles.progressText}>
              <span>{currentIndex + 1} / {opportunities.length}</span>
            </div>
          </motion.div>
        )}

        <div className={styles.listContainer}>
          <AnimatePresence mode="wait">
            {opportunities.map((opportunity, index) => {
              const isActive = currentIndex === index;
              const isVisible = visibleItems.includes(index);
              
              if (!isVisible && !isActive) {
                return null;
              }
              
              return (
                <motion.li
                  key={index}
                  className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isActive ? {
                    opacity: 1,
                    y: 0,
                    scale: 1.1,
                    zIndex: 10,
                  } : {
                    opacity: 0.6,
                    y: 0,
                    scale: 0.95,
                    zIndex: 1,
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20, 
                    scale: 0.95,
                    transition: { 
                      duration: 0.4,
                      ease: 'easeIn'
                    }
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                >
                  <motion.div
                    className={styles.icon}
                    initial={{ scale: 0 }}
                    animate={isActive ? { 
                      scale: 1.1, 
                      rotate: 0,
                    } : {
                      scale: 0.9,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <motion.span 
                    className={styles.text}
                    animate={isActive ? {
                      fontSize: '1.2rem',
                      fontWeight: 600,
                    } : {
                      fontSize: '1rem',
                      fontWeight: 500,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {opportunity}
                  </motion.span>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Opportunities;
