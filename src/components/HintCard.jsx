import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './HintCard.module.css';

export default function HintCard({ hint }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = e => { if (e.matches) setOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <>
      <div className={styles.card}>
        <p className={styles.label}>{hint.title}</p>
        <ol className={styles.list}>
          {hint.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      <button
        className={styles.trigger}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="How it works"
      >
        ?
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="hint-panel"
            className={styles.panel}
            initial={{ x: 'calc(-100% - 24px)' }}
            animate={{ x: 0 }}
            exit={{ x: 'calc(-100% - 24px)' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            onClick={() => setOpen(false)}
          >
            <p className={styles.label}>{hint.title}</p>
            <ol className={styles.list}>
              {hint.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
