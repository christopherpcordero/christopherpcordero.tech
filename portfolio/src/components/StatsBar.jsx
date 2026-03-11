import { useEffect, useRef } from 'react'
import styles from './StatsBar.module.css'

const STATS = [
  { target: 500, suffix: '+', label: 'Endpoints Secured' },
  { target: 500, suffix: '+', label: 'Identities Managed' },
  { target: 10,  suffix: '',  label: 'Years Military Service' },
  { target: 30,  suffix: '+', label: 'Soldiers Led' },
]

function Counter({ target, suffix }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let cur = 0
        const step = Math.ceil(target / 40)
        const t = setInterval(() => {
          cur = Math.min(cur + step, target)
          if (ref.current) ref.current.textContent = cur + suffix
          if (cur >= target) clearInterval(t)
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {STATS.map((s, i) => (
        <div key={i} className={`${styles.stat} reveal`}>
          <div className={styles.num}>
            <Counter target={s.target} suffix={s.suffix} />
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
