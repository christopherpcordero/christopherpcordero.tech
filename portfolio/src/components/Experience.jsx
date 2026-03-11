import styles from './Experience.module.css'

const JOBS = [
  {
    date: 'Current Role',
    company: 'Hamamatsu Corporation',
    role: 'Network & System Administrator',
    bullets: [
      'Administer and secure 500+ endpoint environment using CrowdStrike Falcon and Malwarebytes Nebula, monitoring detections through SIEM/SOAR-driven workflows.',
      'Manage 500+ identities across Microsoft Entra ID with Zero Trust and least-privilege access controls; built automation to audit dormant Global Admin accounts.',
      'Administer 450+ endpoints via Microsoft Intune — configuration profiles, compliance policies, MAM controls covering both BYOD and corporate devices.',
      'Developed Azure Logic Apps + Azure Automation for password expiry notifications, app secret monitoring, and continuous identity hygiene.',
      'Authored custom KQL detections in Microsoft Sentinel for brute-force, account lockouts, anomalous sign-ins, and resource creation auditing.',
      'Administer Zscaler ZTNA, Proofpoint email security, and Cisco Meraki network infrastructure.',
      'Automate security operations using PowerShell, Microsoft Graph, Python, Terraform, VirusTotal API, and CrowdStrike Fusion SOAR.',
    ],
  },
  {
    date: 'Oct 2015 — Present',
    company: 'NJ Army National Guard',
    role: 'Sergeant First Class — Artilleryman',
    bullets: [
      'Lead and mentor 30+ soldiers across tactical readiness, professional development, and administrative compliance.',
      'Coordinate unit-level training programs and mission readiness under resource and time constraints.',
      'Rapid decision-making in high-stakes environments — promoting team cohesion, discipline, and accountability at scale.',
      'Manage logistics, personnel records, and performance evaluations for operational efficiency.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="dark">
      <div className="section-label">02 — Professional Experience</div>
      <div className={styles.timeline}>
        {JOBS.map((job, i) => (
          <div key={i} className={`${styles.item} reveal`}>
            <div className={styles.header}>
              <div className={styles.date}>{job.date}</div>
              <div className={styles.company}>{job.company}</div>
              <div className={styles.role}>{job.role}</div>
            </div>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
