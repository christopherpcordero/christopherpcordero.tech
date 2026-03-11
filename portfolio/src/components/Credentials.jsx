import styles from './Credentials.module.css'

const CREDS = [
  { icon: '🎓', title: 'B.S. Computer Science', sub: 'Rutgers University – New Brunswick · 2015–2019' },
  { icon: '🔒', title: 'Secret Security Clearance', sub: 'Department of Defense · Active' },
  { icon: '📋', title: 'CompTIA Security+', sub: 'CompTIA' },
  { icon: '☁️', title: 'Microsoft AZ-900', sub: 'Azure Fundamentals' },
  { icon: '🛡️', title: 'SOC Analyst Level 1', sub: 'TryHackMe' },
]

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="section-label">06 — Education &amp; Certifications</div>
      <div className={styles.grid}>
        {CREDS.map((c, i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{c.icon}</div>
            <div>
              <div className={styles.title}>{c.title}</div>
              <div className={styles.sub}>{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
