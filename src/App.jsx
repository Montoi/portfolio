import { useState, useEffect } from 'react'
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

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function AppContent() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <nav className="glass navbar">
        <div style={{ fontWeight: '800', fontSize: '1.75rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', zIndex: 101 }}>
          C<span className="text-gradient">G</span>.
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
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

        {/* Mobile Toggle - Ensure High Z-Index to be clickable over everything */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', zIndex: 1002, position: 'relative' }} className="mobile-nav-toggle">
          <ThemeToggle />
          <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </nav>

      {/* Mobile Sidebar & Backdrop - Rendered outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-backdrop"
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mobile-menu-sidebar"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                <a href="#about" onClick={closeMenu} className="mobile-nav-link">{t('nav.about')}</a>
                <a href="#experience" onClick={closeMenu} className="mobile-nav-link">{t('nav.experience')}</a>
                <a href="#projects" onClick={closeMenu} className="mobile-nav-link">{t('nav.projects')}</a>
                <a href="#contact" onClick={closeMenu} className="mobile-nav-link">{t('nav.contact')}</a>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: 'var(--border-light)' }}>
                <LanguageSelector />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
