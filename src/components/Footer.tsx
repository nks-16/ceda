import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.logoSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.logoGrid}>
            <div className={styles.logoItem}>
              <img 
                src="/logos/NISB short black (2).png" 
                alt="NISB Logo" 
                className={styles.logoImage}
              />
              <span className={styles.logoLabel}>NISB</span>
            </div>
            <div className={styles.logoItem}>
              <img 
                src="/logos/ieee mb black png (1).png" 
                alt="IEEE Logo" 
                className={styles.logoImage}
              />
              <span className={styles.logoLabel}>IEEE</span>
            </div>
            <div className={styles.logoItem}>
              <img 
                src="/logos/CEEDA.png" 
                alt="CEDA Logo" 
                className={styles.logoImage}
              />
              <span className={styles.logoLabel}>CEDA</span>
            </div>
            <div className={styles.logoItem}>
              <div className={styles.logoPlaceholder}>
                <span className={styles.logoText}>Mysore</span>
                <span className={styles.logoLabel}>Subsection</span>
              </div>
            </div>
            <div className={styles.logoItem}>
              <div className={styles.logoPlaceholder}>
                <span className={styles.logoText}>Bangalore</span>
                <span className={styles.logoLabel}>Section</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} NIE IEEE Student Branch. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
