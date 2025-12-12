import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="btn glass"
            style={{
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}
            aria-label="Toggle Language"
        >
            <Globe size={18} className="text-accent" />
            <span style={{ fontWeight: '600', textTransform: 'uppercase' }}>
                {i18n.language === 'es' ? 'ES' : 'EN'}
            </span>
        </button>
    );
};

export default LanguageSelector;
