import styles from './Projects.module.css'

const PROJECTS = [
  {
    icon: '⚙️',
    outcome: '↓ Manual ops by ~80%',
    title: 'Automated Azure Security Posture',
    problem: 'No visibility into expiring secrets, dormant admins, or password hygiene without manual audits.',
    approach: 'Built cloud-native monitoring using Azure Automation + Logic Apps + Microsoft Graph. Automated scheduled alerts and reports. Authored Sentinel KQL detections for brute-force and change auditing.',
    tech: ['PowerShell', 'Graph API', 'Logic Apps', 'Sentinel KQL', 'Azure Runbooks'],
  },
  {
    icon: '🔍',
    outcome: 'Faster triage',
    title: 'File Analysis & Enrichment Tool',
    problem: 'Manual hash lookups during IR were slow, inconsistent, and introduced analyst error under pressure.',
    approach: 'Developed Python tool using MD5/SHA hashing and VirusTotal API to automate enrichment. Outputs structured results to standardize analyst triage workflow.',
    tech: ['Python', 'REST APIs', 'VirusTotal', 'Hashing'],
  },
  {
    icon: '🖥️',
    outcome: 'ATT&CK validated',
    title: 'Virtual Detection Lab',
    problem: 'No safe environment to test detection logic and validate SIEM coverage against real attack techniques.',
    approach: 'Deployed multi-VM lab (Windows + Linux + Kali), simulated password spraying and privilege escalation, correlated telemetry in Wazuh SIEM to validate alert logic against MITRE ATT&CK.',
    tech: ['Wazuh', 'Kali', 'MITRE ATT&CK', 'SIEM'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">03 — Projects &amp; Case Studies</div>
      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{p.icon}</span>
              <span className={styles.outcome}>{p.outcome}</span>
            </div>
            <div className={styles.title}>{p.title}</div>
            <div className={styles.problem}>
              <strong style={{ color: 'var(--red)' }}>Problem:</strong> {p.problem}
            </div>
            <div className={styles.approach}>
              <strong style={{ color: 'var(--yellow)' }}>Approach:</strong> {p.approach}
            </div>
            <div className={styles.tech}>
              {p.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
