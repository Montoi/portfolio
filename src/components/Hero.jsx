import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="section" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // Offset for fixed header
        }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 61, 0, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <h2 style={{
                        color: 'var(--accent)',
                        fontSize: '1.1rem',
                        marginBottom: '1.5rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <span style={{ height: '2px', width: '40px', background: 'var(--accent)' }}></span>
                        {t('hero.role')}
                    </h2>

                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                        lineHeight: 1.1,
                        marginBottom: '2rem',
                        fontWeight: '800'
                    }}>
                        {t('hero.title_main')} <br />
                        <span className="text-gradient neon-text">{t('hero.title_accent')}</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3.5rem',
                        maxWidth: '600px',
                        lineHeight: '1.8'
                    }}>
                        {t('hero.description')}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            {t('hero.btn_projects')} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            {t('hero.btn_contact')}
                        </a>
                    </div>

                    <div style={{ marginTop: '5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '1px' }}>{t('hero.social_label')}</span>
                        <div style={{ height: '1px', width: '50px', background: 'var(--border-light)' }}></div>
                        <a href="https://github.com/gitcarlosgarcia" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: '0.3s' }}>
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: '0.3s' }}>
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:gitcarlosgarcia@gmail.com" style={{ color: 'var(--text-primary)', transition: '0.3s' }}>
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
