import { Calendar, Building2, Briefcase } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();
    const experiences = t('experience.items', { returnObjects: true });

    return (
        <section id="experience" className="section">
            <div className="container">
                <SectionReveal>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: '800' }}>
                        {t('experience.title')} <span className="text-gradient">{t('experience.title_accent')}</span>
                    </h2>
                </SectionReveal>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <SectionReveal key={index} delay={index * 0.1}>
                            <div style={{
                                marginBottom: '3rem',
                                position: 'relative',
                                paddingLeft: '2.5rem',
                                borderLeft: '2px solid rgba(255, 61, 0, 0.2)'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-9px',
                                    top: '0',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    background: 'var(--accent)',
                                    boxShadow: '0 0 15px var(--accent)'
                                }}></div>

                                <div className="glass" style={{
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                                        <Briefcase size={22} className="text-accent" /> {exp.role}
                                    </h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Building2 size={16} /> {exp.company}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Calendar size={16} /> {exp.period}
                                        </span>
                                    </div>

                                    <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-secondary)' }}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                                <span style={{ marginTop: '6px', height: '6px', width: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
