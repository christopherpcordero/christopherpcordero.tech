import { useEffect, useRef } from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'
import styles from './Skills.module.css'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

const SKILLS = [
  { name: 'Identity & Zero Trust (Entra / Intune)', pct: 90 },
  { name: 'Detection Engineering (KQL / Sentinel)', pct: 88 },
  { name: 'Automation (PowerShell / Graph / Python)', pct: 83 },
  { name: 'Cloud Security (Azure / Defender)', pct: 85 },
  { name: 'Endpoint Security (CrowdStrike / MDM)', pct: 88 },
  { name: 'Network Security (Zscaler / Meraki)', pct: 78 },
  { name: 'Leadership & Communication', pct: 92 },
]

const radarData = {
  labels: ['Detection Eng.', 'Cloud Security', 'Identity & IAM', 'Automation', 'Networking', 'Incident Response', 'Leadership'],
  datasets: [{
    label: 'Proficiency',
    data: [88, 85, 90, 82, 78, 85, 92],
    backgroundColor: 'rgba(0,212,255,0.1)',
    borderColor: 'rgba(0,212,255,0.8)',
    pointBackgroundColor: '#00d4ff',
    pointBorderColor: '#00d4ff',
    pointHoverBackgroundColor: '#fff',
  }],
}

const radarOptions = {
  responsive: true,
  scales: {
    r: {
      min: 0, max: 100,
      grid: { color: 'rgba(26,37,53,0.8)' },
      angleLines: { color: 'rgba(26,37,53,0.8)' },
      pointLabels: { color: '#8fa8bf', font: { family: 'IBM Plex Mono', size: 10 } },
      ticks: { display: false, stepSize: 25 },
    },
  },
  plugins: { legend: { display: false } },
}

function SkillBar({ name, pct }) {
  const fillRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        if (fillRef.current) fillRef.current.style.width = pct + '%'
      }
    }, { threshold: 0.3 })
    if (fillRef.current) obs.observe(fillRef.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div className={`${styles.skillRow} reveal`}>
      <div className={styles.skillTop}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct}>{pct}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div ref={fillRef} className={styles.skillFill} style={{ width: 0 }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">01 — Competency Profile</div>
      <div className={styles.layout}>
        <div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>Technical Skills</h2>
          <div className={styles.skillsList}>
            {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
        <div className={styles.radarWrap}>
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
    </section>
  )
}
