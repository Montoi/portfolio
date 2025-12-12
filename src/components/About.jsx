import { CheckCircle2 } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    fontWeight: '800'
                }}>
                    {t('about.title')} <span className="text-gradient">{t('about.title_accent')}</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 800px)',
                    justifyContent: 'center',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            <Trans i18nKey="about.p1" components={{ 1: <strong />, 3: <strong />, 7: <strong />, 9: <strong />, 11: <strong /> }} />
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                            {t('about.p2')}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            {[
                                t('about.skills.leadership'),
                                t('about.skills.architecture'),
                                t('about.skills.scrum'),
                                t('about.skills.security')
                            ].map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle2 size={20} className="text-accent" />
                                    <span style={{ fontWeight: '500' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
