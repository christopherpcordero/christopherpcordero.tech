import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ThreatFeed from './components/ThreatFeed'
import StatsBar from './components/StatsBar'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import FieldNotes from './components/FieldNotes'
import Leadership from './components/Leadership'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import TerminalHint from './components/TerminalHint'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  // Global scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    }, 100)
    return () => { clearTimeout(timer); obs.disconnect() }
  }, [])

  // Global keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault()
        setTerminalOpen(prev => !prev)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <Nav />
      <Hero onOpenTerminal={() => setTerminalOpen(true)} />
      <ThreatFeed />
      <StatsBar />
      <Skills />
      <Experience />
      <Projects />
      <FieldNotes />
      <Leadership />
      <Credentials />
      <Contact />
      <Footer />
      <TerminalHint onOpen={() => setTerminalOpen(true)} />
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  )
}
