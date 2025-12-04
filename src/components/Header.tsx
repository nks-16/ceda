import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const logos = [
    { name: 'NISB', alt: 'NISB Logo', src: null },
    { name: 'IEEE', alt: 'IEEE Logo', src: null },
    { name: 'CEDA', alt: 'CEDA Logo', src: '/logos/CEEDA.png' },
    { name: 'Mysore Subsection', alt: 'Mysore Subsection Logo', src: null },
    { name: 'Bangalore Section', alt: 'Bangalore Section Logo', src: null },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <motion.div
          className={styles.logoGrid}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              className={styles.logoPlaceholder}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`${styles.logoBox} ${logo.src ? styles.logoBoxWithImage : ''}`}>
                {logo.src ? (
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={styles.logoImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="${styles.logoText}">${logo.name}</span><span class="${styles.logoLabel}">Logo</span>`;
                      }
                    }}
                  />
                ) : (
                  <>
                    <span className={styles.logoText}>{logo.name}</span>
                    <span className={styles.logoLabel}>Logo</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

