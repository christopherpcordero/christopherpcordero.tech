import styles from "./Hero.module.css";

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgText}>SECURE</div>
      <div className={styles.inner}>
        <div className={styles.tag}>Security Engineer · Hamilton, NJ</div>
        <h1 className={styles.h1}>
          Christopher
          <br />
          <span className={styles.accent}>Cordero</span>
        </h1>
        <p className={styles.sub}>
          Network &amp; Systems Administrator → Security Engineer
        </p>
        <p className={styles.desc}>
          Security-focused engineer with enterprise-scale experience across
          endpoint protection, identity security, cloud administration, and
          detection engineering. Veteran leader. Builder of automation.
          Protector of infrastructure.
        </p>
        <div className={styles.cta}>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a
            href="/portfolio/ChristopherCordero-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            ↓ Resume
          </a>
          <a href="#experience" className="btn btn-ghost">
            View Experience
          </a>
          <button className="btn btn-ghost" onClick={onOpenTerminal}>
            $ open terminal
          </button>
        </div>
      </div>
    </section>
  );
}
