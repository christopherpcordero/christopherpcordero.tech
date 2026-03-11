import styles from './TerminalHint.module.css'

export default function TerminalHint({ onOpen }) {
  return (
    <div className={styles.hint} onClick={onOpen}>
      Press <kbd className={styles.kbd}>~</kbd> to open terminal
    </div>
  )
}
