import { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeViewer from '../../components/CodeViewer'
import ButtonCard from './ButtonCard'
import { BUTTONS } from './buttons'
import styles from './index.module.css'

export default function ButtonPage() {
  const [activeCode, setActiveCode] = useState(null)

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>
      <div className={styles.grid}>
        {BUTTONS.map(btn => (
          <ButtonCard
            key={btn.id}
            id={btn.id}
            label={btn.label}
            Component={btn.Component}
            onViewCode={() => setActiveCode(btn.code)}
          />
        ))}
      </div>
      <CodeViewer
        code={activeCode ?? ''}
        open={activeCode !== null}
        onClose={() => setActiveCode(null)}
      />
    </div>
  )
}
