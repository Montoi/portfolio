import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './index.css'
import './i18n' // Initialize i18n
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LanguageSelector from './components/LanguageSelector'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <nav className="glass" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.25rem 2rem',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ fontWeight: '800', fontSize: '1.75rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
          C<span className="text-gradient">G</span>.
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" className="nav-link">{t('nav.about')}</a>
          <a href="#experience" className="nav-link">{t('nav.experience')}</a>
          <a href="#projects" className="nav-link">{t('nav.projects')}</a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeToggle />
            <LanguageSelector />
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            {t('nav.contact')}
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '4rem 0',
        textAlign: 'center',
        color: 'var(--text-muted)',
        borderTop: 'var(--border-light)',
        marginTop: '8rem',
        background: 'rgba(0,0,0,0.2)'
      }}>
        <p>© {new Date().getFullYear()} Carlos García. Construido con <span style={{ color: 'var(--accent)' }}>♥</span> y React.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
