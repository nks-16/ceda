import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './AboutCEDA.module.css';

interface AboutCEDAProps {
  isOpen: boolean;
  onClose: () => void;
}

const fullText = `The IEEE Council on Electronic Design Automation (CEDA) is a global community dedicated to advancing the theory, practice, and application of electronic design automation (EDA).

It brings together professionals, researchers, and students working across IC design, VLSI, CAD tools, semiconductor technology, verification, and automation workflows.

By establishing a CEDA Council within our Student Branch, we aim to create a dedicated ecosystem for learning, innovation, mentorship, and hands-on engineering in the field of EDA—one of the most rapidly evolving domains in electronics.`;

const AboutCEDA = ({ isOpen, onClose }: AboutCEDAProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Reset text when modal opens
      setDisplayedText('');
      setShowCursor(true);
      
      // Typing animation
      let currentIndex = 0;
      const typingSpeed = 25; // milliseconds per character (optimized for performance)
      
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);
        }
      }, typingSpeed);

      // Auto-close after typing completes + reading time
      const totalTypingTime = fullText.length * typingSpeed;
      const readingTime = 3000; // 3 seconds to read
      const autoCloseTimer = setTimeout(() => {
        onClose();
      }, totalTypingTime + readingTime);
      
      return () => {
        clearInterval(typingInterval);
        clearTimeout(autoCloseTimer);
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      // Reset when closed
      setDisplayedText('');
      setShowCursor(true);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modal}
            initial={{ 
              opacity: 0, 
              y: 50, 
              scale: 0.95,
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            exit={{ 
              opacity: 0, 
              y: 30, 
              scale: 0.95,
              transition: { 
                duration: 0.3,
                ease: 'easeIn'
              }
            }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-ceda-title"
          >
            <div className={styles.modalHeader}>
              <h2 id="about-ceda-title" className={styles.title}>About CEDA</h2>
              <motion.button
                className={styles.closeButton}
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close About CEDA modal"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
            
            <motion.div
              className={styles.content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className={styles.textContent}>
                <motion.p 
                  className={styles.paragraph}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.typedText}>
                    {displayedText}
                    {showCursor && (
                      <span className={styles.cursor}>|</span>
                    )}
                  </span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutCEDA;
