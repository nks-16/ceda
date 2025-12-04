import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './InaugurationMessage.module.css';

const InaugurationMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Update page title to show it's inaugurated
    document.title = 'IEEE CEDA Student Chapter - Successfully Inaugurated!';
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

          {/* Decorative elements */}
          <motion.div
            className={styles.confetti}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.confettiPiece}
                style={{
                  '--delay': `${i * 0.1}s`,
                  '--x': `${Math.random() * 100}%`,
                } as React.CSSProperties}
                initial={{ y: -100, opacity: 0, rotate: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: [0, 1, 1, 0],
                  rotate: 360,
                }}
                transition={{
                  delay: 1.8 + i * 0.1,
                  duration: 2,
                  ease: 'easeIn',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InaugurationMessage;
