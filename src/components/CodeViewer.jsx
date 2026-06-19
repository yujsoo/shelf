import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Highlight, themes } from 'prism-react-renderer';
import { useIsDesktop } from '../hooks/useIsDesktop';
import styles from './CodeViewer.module.css';

export default function CodeViewer({ code, language = 'css', open: controlledOpen, onClose }) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isDesktop = useIsDesktop();

  const open = isControlled ? controlledOpen : internalOpen;
  const handleClose = isControlled ? onClose : () => setInternalOpen(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const panelVariants = isDesktop
    ? { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.96 } }
    : { hidden: { y: '100%' }, visible: { y: 0 }, exit: { y: '100%' } };

  const panelTransition = isDesktop
    ? { duration: 0.18, ease: 'easeOut' }
    : { type: 'spring', damping: 32, stiffness: 320 };

  return (
    <>
      {!isControlled && (
        <button className={styles.trigger} type="button" onClick={() => setInternalOpen(true)}>
          View Code
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isDesktop ? 0.2 : 0 }}
            onClick={handleClose}
          />
        )}
        {open && (
          <motion.div
            key="panel"
            className={styles.panelWrap}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={panelTransition}
          >
            <div className={styles.panel} onClick={e => e.stopPropagation()}>
              <div className={styles.toolbar}>
                <span className={styles.lang}>{language.toUpperCase()}</span>
                <div className={styles.actions}>
                  <button className={styles.action} type="button" onClick={copy}>
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button className={styles.action} type="button" onClick={handleClose}>
                    Close
                  </button>
                </div>
              </div>
              <Highlight theme={themes.github} code={code} language={language}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={styles.pre} style={{ ...style, background: 'transparent' }}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
