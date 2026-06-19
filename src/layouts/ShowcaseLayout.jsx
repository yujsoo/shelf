import { Link } from 'react-router-dom';
import CodeViewer from '../components/CodeViewer';
import HintCard from '../components/HintCard';
import styles from './ShowcaseLayout.module.css';

export default function ShowcaseLayout({ children, code, language, header, hint, backTo = '/' }) {
  return (
    <div className={styles.page}>
      <Link to={backTo} className={styles.back}>← Back</Link>
      {header ? <div className={styles.header}>{header}</div> : null}
      <main className={styles.preview}>
        {children}
      </main>
      <CodeViewer code={code} language={language} />
      {hint ? <HintCard hint={hint} /> : null}
    </div>
  );
}
