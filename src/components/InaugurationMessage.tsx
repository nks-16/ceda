import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './InaugurationMessage.module.css';

const InaugurationMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Update page title to show it's inaugurated
    document.title = 'IEEE CEDA Student Chapter - Successfully Inaugurated!';
    
    // Request fullscreen
    const requestFullscreen = async () => {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
          await (document.documentElement as any).msRequestFullscreen();
        }
      } catch (error) {
        console.log('Fullscreen not available or denied');
      }
    };
    
    // Small delay before requesting fullscreen
    setTimeout(() => {
      requestFullscreen();
    }, 500);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.iconContainer}
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              delay: 0.3, 
              duration: 1, 
              ease: [0.34, 1.56, 0.64, 1] 
            }}
          >
            <svg
              className={styles.checkIcon}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" />
              <path
                d="M30 50 L45 65 L70 35"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Successfully Inaugurated!
          </motion.h1>

          <motion.p
            className={styles.message}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            The IEEE CEDA Student Chapter at NISB has been
          </motion.p>

          <motion.p
            className={styles.highlight}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          >
            Officially Inaugurated
          </motion.p>

          <motion.div
            className={styles.subtext}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p>Welcome to a new era of Electronic Design Automation</p>
            <p>Let's innovate, collaborate, and excel together!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InaugurationMessage;
