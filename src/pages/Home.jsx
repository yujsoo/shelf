import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const items = [
  {
    to: '/button',
    label: 'Button',
    desc: 'Various button styles & interactions',
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Shelf</h1>
        <p className={styles.subtitle}>A collection of UI animations &amp; effects</p>
      </header>
      <div className={styles.grid}>
        {items.map(item => (
          <Link key={item.to} to={item.to} className={styles.card}>
            <div className={styles.cardIcon}>{item.label}</div>
            <div className={styles.cardTitle}>{item.label}</div>
            <div className={styles.cardDesc}>{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
