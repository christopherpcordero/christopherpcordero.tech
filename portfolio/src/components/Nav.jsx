import styles from './Nav.module.css'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#field-notes', label: 'Field Notes' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>CC</a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className={styles.status}>Available</div>
    </nav>
  )
}
