import { useState, useEffect, useRef } from 'react'
import styles from './Terminal.module.css'

const COMMANDS = {
  help: () => [
    { cls: 'green',  text: 'Available commands:' },
    { cls: '',       text: '  whoami       — About Christopher' },
    { cls: '',       text: '  ls           — List sections' },
    { cls: '',       text: '  cat resume   — Resume summary' },
    { cls: '',       text: '  cat skills   — Technical skills' },
    { cls: '',       text: '  cat certs    — Certifications' },
    { cls: '',       text: '  ping contact — Contact info' },
    { cls: '',       text: '  clear        — Clear terminal' },
    { cls: '',       text: '  exit         — Close terminal' },
  ],
  whoami: () => [
    { cls: 'accent', text: 'Christopher Cordero' },
    { cls: '',       text: 'Role:   Network & System Administrator → Security Engineer' },
    { cls: 'yellow', text: 'Rank:   Sergeant First Class, NJARNG' },
    { cls: '',       text: 'Clear:  DoD Secret' },
    { cls: 'green',  text: 'Status: Open to opportunities' },
  ],
  ls: () => [
    { cls: 'accent', text: './skills   ./experience   ./projects' },
    { cls: 'accent', text: './field-notes   ./leadership   ./credentials' },
    { cls: 'accent', text: './contact' },
  ],
  'cat resume': () => [
    { cls: 'yellow', text: '== RESUME SUMMARY ==' },
    { cls: '',       text: '• 500+ endpoints secured (CrowdStrike, Intune, Malwarebytes)' },
    { cls: '',       text: '• 500+ identities managed (Entra ID, Zero Trust, RBAC)' },
    { cls: '',       text: '• Custom KQL detections in Microsoft Sentinel' },
    { cls: '',       text: '• Azure automation (Logic Apps, Runbooks, Graph API)' },
    { cls: '',       text: '• Zscaler ZTNA, Proofpoint, Cisco Meraki admin' },
    { cls: '',       text: '• 10yr military service, 30+ soldiers led' },
    { cls: 'green',  text: '→ Full resume: ccordero@arcellum.com' },
  ],
  'cat skills': () => [
    { cls: 'yellow', text: '== TECHNICAL SKILLS ==' },
    { cls: 'accent', text: 'Detection/IR:   Sentinel KQL, SOAR, Threat Hunting, MITRE ATT&CK' },
    { cls: 'accent', text: 'Cloud/Identity: Azure, Entra ID, Conditional Access, RBAC' },
    { cls: 'accent', text: 'Endpoint:       CrowdStrike Falcon, Intune, Malwarebytes, Zscaler' },
    { cls: 'accent', text: 'Automation:     PowerShell, Python, Graph API, Logic Apps, Terraform' },
  ],
  'cat certs': () => [
    { cls: 'yellow', text: '== CREDENTIALS ==' },
    { cls: 'green',  text: '✓ B.S. Computer Science — Rutgers University (2019)' },
    { cls: 'green',  text: '✓ CompTIA Security+' },
    { cls: 'green',  text: '✓ Microsoft AZ-900 (Azure Fundamentals)' },
    { cls: 'green',  text: '✓ SOC Analyst L1 — TryHackMe' },
    { cls: 'green',  text: '✓ DoD Secret Security Clearance — Active' },
    { cls: 'yellow', text: '⟳ Pursuing: AZ-500, SC-200, CISSP' },
  ],
  'ping contact': () => [
    { cls: 'yellow', text: 'PING contact.christopher-cordero —' },
    { cls: 'green',  text: 'Reply: ccordero@arcellum.com' },
    { cls: 'green',  text: 'Reply: (609) 571-6721' },
    { cls: 'green',  text: 'Reply: Hamilton, New Jersey' },
    { cls: 'accent', text: 'Reply: linkedin.com/in/christopherpcordero' },
    { cls: 'accent', text: 'Reply: github.com/christopherpcordero' },
    { cls: '',       text: '--- 5 packets, 0% loss ---' },
  ],
}

const BOOT_LINES = [
  { cls: 'accent', text: '╔══════════════════════════════════════════╗' },
  { cls: 'accent', text: '║  christopher@portfolio:~$  v3.0.26       ║' },
  { cls: 'accent', text: '╚══════════════════════════════════════════╝' },
  { cls: '',       text: '' },
  { cls: 'muted',  text: `Last login: ${new Date().toDateString()}` },
  { cls: '',       text: "Type 'help' for available commands." },
]

export default function Terminal({ isOpen, onClose }) {
  const [lines, setLines] = useState(BOOT_LINES)
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus()
  }, [isOpen])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault()
        isOpen ? onClose() : null
      }
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  function handleSubmit(e) {
    if (e.key !== 'Enter') return
    const cmd = input.trim().toLowerCase()
    setInput('')

    const newLines = [
      ...lines,
      { cls: 'prompt', text: `christopher@portfolio:~$ ${cmd}` },
    ]

    if (cmd === 'clear') {
      setLines(BOOT_LINES)
      return
    }
    if (cmd === 'exit') {
      onClose()
      return
    }

    const handler = COMMANDS[cmd]
    if (handler) {
      setLines([...newLines, ...handler()])
    } else if (cmd) {
      setLines([...newLines, { cls: 'red', text: `bash: ${cmd}: command not found. Type 'help'.` }])
    } else {
      setLines(newLines)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.terminal}>
        <div className={styles.titlebar}>
          <div className={`${styles.dot} ${styles.red}`} onClick={onClose} />
          <div className={`${styles.dot} ${styles.yellow}`} />
          <div className={`${styles.dot} ${styles.green}`} />
          <div className={styles.title}>christopher-cordero — bash — 80x24</div>
        </div>
        <div className={styles.body} ref={bodyRef}>
          {lines.map((l, i) => (
            <div key={i} className={`${styles.line} ${styles[l.cls] || ''}`}>
              {l.cls === 'prompt'
                ? <>
                    <span className={styles.promptText}>{l.text.split('$ ')[0]}$&nbsp;</span>
                    <span>{l.text.split('$ ')[1]}</span>
                  </>
                : l.text
              }
            </div>
          ))}
        </div>
        <div className={styles.inputRow}>
          <span className={styles.promptText}>christopher@portfolio:~$&nbsp;</span>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleSubmit}
            autoComplete="off"
            spellCheck="false"
            placeholder="type a command..."
          />
        </div>
      </div>
    </div>
  )
}
