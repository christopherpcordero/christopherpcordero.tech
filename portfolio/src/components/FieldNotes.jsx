import styles from './FieldNotes.module.css'

const POSTS = [
  {
    cat: 'Detection Engineering',
    date: 'Mar 2026',
    title: 'Building Brute-Force Detection in Sentinel Without the Noise',
    excerpt: 'How I tuned account lockout KQL queries to surface real threats without drowning analysts in false positives — and the threshold logic that finally made it production-ready.',
  },
  {
    cat: 'Zero Trust',
    date: 'Feb 2026',
    title: "Zero Trust Isn't a Product. Here's How We Actually Implemented It.",
    excerpt: "A practitioner's breakdown of rolling out Zero Trust across Entra ID, Intune, and Zscaler — what the marketing doesn't tell you, and what actually works in an environment with legacy constraints.",
  },
  {
    cat: 'Automation',
    date: 'Jan 2026',
    title: 'From Manual Audits to Automated Posture: A Logic Apps Walkthrough',
    excerpt: 'Step-by-step: how I replaced weekly manual reviews of expiring secrets and dormant admins with a fully automated Azure workflow that alerts, reports, and documents itself.',
  },
]

export default function FieldNotes() {
  return (
    <section id="field-notes" className="dark">
      <div className="section-label">04 — Field Notes</div>
      <p className={styles.intro}>Writeups, post-mortems, and technical breakdowns from the field. Building in public.</p>
      <div className={styles.grid}>
        {POSTS.map((p, i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={styles.meta}>
              <span className={styles.cat}>{p.cat}</span>
              <span className={styles.date}>{p.date}</span>
            </div>
            <div className={styles.title}>{p.title}</div>
            <div className={styles.excerpt}>{p.excerpt}</div>
            <a href="#" className={styles.link}>Read more →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
