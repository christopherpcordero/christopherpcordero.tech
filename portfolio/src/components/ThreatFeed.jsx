import styles from './ThreatFeed.module.css'

const THREATS = [
  { type: 'Brute Force',      ip: '185.220.101.47',  country: '🇷🇺 RU', target: 'Entra ID' },
  { type: 'Port Scan',        ip: '45.33.112.12',    country: '🇨🇳 CN', target: 'Perimeter' },
  { type: 'Phishing',         ip: '91.108.56.88',    country: '🇮🇷 IR', target: 'Exchange' },
  { type: 'Malware C2',       ip: '104.21.38.201',   country: '🇺🇸 US', target: 'Endpoint' },
  { type: 'Credential Spray', ip: '176.10.99.200',   country: '🇩🇪 DE', target: 'VPN' },
  { type: 'SQLi Attempt',     ip: '209.141.54.55',   country: '🇳🇱 NL', target: 'Web App' },
  { type: 'Lateral Movement', ip: '10.0.4.188',      country: '🏠 INT', target: 'AD' },
  { type: 'Exfil Attempt',    ip: '198.51.100.77',   country: '🇬🇧 GB', target: 'DLP' },
]

const doubled = [...THREATS, ...THREATS]

export default function ThreatFeed() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div className={styles.label}>Live IOCs</div>
        <div className={styles.scroll}>
          <div className={styles.inner}>
            {doubled.map((t, i) => (
              <div key={i} className={styles.item}>
                <span className={styles.type}>[{t.type}]</span>
                <span className={styles.ip}>{t.ip}</span>
                <span className={styles.country}>{t.country}</span>
                <span className={styles.target}>→ {t.target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
