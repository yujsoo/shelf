import { Link } from 'react-router-dom'
import CodeViewer from '../components/CodeViewer'
import styles from './ShowcaseLayout.module.css'

export default function ShowcaseLayout({ children, code, language, header, backTo = '/' }) {
  return (
    <div className={styles.page}>
      <Link to={backTo} className={styles.back}>← Back</Link>
      {header && <div className={styles.header}>{header}</div>}
      <main className={styles.preview}>
        {children}
      </main>
      <CodeViewer code={code} language={language} />
    </div>
  )
}
