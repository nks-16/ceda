import { motion } from 'framer-motion';
import styles from './LandingHero.module.css';

interface LandingHeroProps {
  onStart: () => void;
}

const LandingHero = ({ onStart }: LandingHeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className={styles.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                },
              },
            }}
          >
            <span className={styles.highlight}>NIE IEEE STUDENT BRANCH</span>
          </motion.h1>
          
          <motion.p
            className={styles.presents}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: 'easeOut',
                },
              },
            }}
          >
            presents
          </motion.p>
          
          <motion.h2
            className={styles.subtitle}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.4,
                  ease: 'easeOut',
                },
              },
            }}
          >
            The CEDA Student Chapter of NIE
          </motion.h2>
          
          <motion.p
            className={styles.description}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.6,
                  ease: 'easeOut',
                },
              },
            }}
          >
            Empowering the Future of Electronic Design Automation
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.8,
                  ease: 'easeOut',
                },
              },
            }}
          >
            <motion.button
              className={styles.ctaButton}
              onClick={onStart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              aria-label="Begin Inauguration Ceremony"
            >
              <span>Begin Inauguration</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
