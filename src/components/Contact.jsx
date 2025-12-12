import { Mail, Phone, MapPin } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section" style={{ marginTop: '4rem', paddingBottom: '8rem' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <SectionReveal>
                    <div className="glass" style={{ padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>
                            {t('contact.title')} <span className="text-gradient">{t('contact.title_accent')}</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
                            {t('contact.description')}
                        </p>

                        <a href="mailto:gitcarlosgarcia@gmail.com" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                            <Mail style={{ marginRight: '0.5rem' }} /> {t('contact.btn_contact')}
                        </a>

                        <div style={{
                            marginTop: '4rem',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '4rem',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={24} className="text-accent" />
                                <span style={{ color: 'var(--text-muted)' }}>gitcarlosgarcia@gmail.com</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={24} className="text-accent" />
                                <span style={{ color: 'var(--text-muted)' }}>849-209-1192</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={24} className="text-accent" />
                                <span style={{ color: 'var(--text-muted)' }}>Santo Domingo, RD</span>
                            </div>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Contact;
