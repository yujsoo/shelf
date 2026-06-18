import { useNavigate } from 'react-router-dom'
import styles from './ButtonCard.module.css'

export default function ButtonCard({ id, label, Component, onViewCode }) {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <div className={styles.preview} onClick={() => navigate(`/button/${id}`)}>
        <Component />
      </div>
      <div className={styles.footer}>
        <span className={styles.label}>{label}</span>
        <button className={styles.codeBtn} type="button" onClick={onViewCode}>
          Code ›
        </button>
      </div>
    </div>
  )
}
