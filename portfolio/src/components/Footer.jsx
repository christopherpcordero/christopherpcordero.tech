import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Christopher Cordero &copy; 2026</span>
      <span className={styles.right}>Security Engineer · SFC, NJARNG</span>
    </footer>
  )
}
