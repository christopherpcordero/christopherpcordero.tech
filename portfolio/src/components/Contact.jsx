import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className="dark">
      <div className={styles.inner}>
        <div className="section-label" style={{ justifyContent: 'center' }}>07 — Contact</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Let's Connect</h2>
        <p className={styles.sub}>Open to Security Engineer roles. Based in Hamilton, NJ.</p>
        <div className={styles.links}>
          <a href="mailto:ccordero@arcellum.com" className="btn btn-primary">ccordero@arcellum.com</a>
          <a href="https://linkedin.com/in/christopherpcordero" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
          <a href="https://github.com/christopherpcordero" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub ↗</a>
        </div>
        <div className={styles.info}>
          📍 Hamilton, New Jersey &nbsp;·&nbsp; 📞 (609) 571-6721
        </div>
      </div>
    </section>
  )
}
