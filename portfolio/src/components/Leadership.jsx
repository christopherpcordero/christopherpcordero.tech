import styles from './Leadership.module.css'

const L_STATS = [
  { num: '30+', label: 'Soldiers directly led and mentored' },
  { num: '10yr', label: 'Consistent military service and commitment' },
  { num: 'SFC',  label: 'Sergeant First Class — senior NCO rank' },
  { num: 'TS',   label: 'DoD Secret Security Clearance holder' },
]

const FRAMEWORKS = [
  { icon: '🛡️', name: 'NIST CSF',      desc: 'Identify, Protect, Detect, Respond, Recover' },
  { icon: '🎯', name: 'MITRE ATT&CK',  desc: 'Detection coverage mapping & threat modeling' },
  { icon: '🔒', name: 'Zero Trust',    desc: 'Never trust, always verify — implemented in production' },
  { icon: '📋', name: 'CIS Controls',  desc: 'Prioritized security actions for enterprise hygiene' },
]

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="section-label">05 — Leadership</div>
      <div className={styles.layout}>

        <div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Proven Leadership<br />Under Pressure
          </h2>
          <div className={styles.quote}>
            <p>
              "Ten years of leading soldiers in high-stakes environments builds exactly the
              decision-making, accountability, and people skills that translate directly into
              running enterprise security programs."
            </p>
            <cite>— On bridging military service and security leadership</cite>
          </div>
          <div className={`${styles.militaryCard} reveal`}>
            <div className={styles.militaryTitle}>NJ Army National Guard</div>
            <div className={styles.militarySub}>Sergeant First Class · 10+ Years · Secret Clearance</div>
            <ul className={styles.militaryPoints}>
              <li>Led 30+ personnel under high-stakes, ambiguous conditions — directly applicable to managing security teams under pressure.</li>
              <li>Drove accountability and compliance at scale across a distributed team — mirrors security program governance.</li>
              <li>Rapid decision-making with incomplete information — a core competency in incident response leadership.</li>
              <li>Built and maintained training programs from scratch — analogous to building security awareness programs.</li>
              <li>Cross-functional coordination with leadership, logistics, and operations — essential for security-to-business alignment.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className={styles.subheading}>Leadership Metrics</h3>
          <div className={styles.lStats}>
            {L_STATS.map((s, i) => (
              <div key={i} className={`${styles.lStat} reveal`}>
                <div className={styles.lStatNum}>{s.num}</div>
                <div className={styles.lStatLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <h3 className={styles.subheading} style={{ marginTop: 32 }}>Security Frameworks</h3>
          <div className={styles.frameworksGrid}>
            {FRAMEWORKS.map((f, i) => (
              <div key={i} className={`${styles.frameworkCard} reveal`}>
                <div className={styles.frameworkIcon}>{f.icon}</div>
                <div className={styles.frameworkName}>{f.name}</div>
                <div className={styles.frameworkDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
