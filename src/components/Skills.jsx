import { Code2, Database, Layout, Settings } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useTranslation } from 'react-i18next';

// This data structure remains static for the items, but keys map to translations
const skillsData = {
    "Frontend": ["React", "Angular", "HTML5", "CSS3", "PrimeNg", "TailwindCSS"],
    "Backend": [".NET Core", "NestJS", "Node.js", "C#"],
    "Database": ["SQL Server", "MySQL", "MongoDB"],
    "Mobile": ["Flutter", "Ionic"],
    "DevOps & Tools": ["Git", "Docker", "GitLab", "Azure DevOps", "Scrum"]
};

// Map original keys to translation keys in JSON
const categoryTranslationKeys = {
    "Frontend": "Frontend",
    "Backend": "Backend",
    "Database": "Database",
    "Mobile": "Mobile",
    "DevOps & Tools": "DevOps & Tools"
};

const iconMap = {
    "Frontend": <Layout size={24} />,
    "Backend": <Code2 size={24} />,
    "Database": <Database size={24} />,
    "Mobile": <Settings size={24} />,
    "DevOps & Tools": <Settings size={24} />
};

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionReveal>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: '800' }}>
                        {t('skills.title')} <span className="text-gradient">{t('skills.title_accent')}</span>
                    </h2>
                </SectionReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {Object.entries(skillsData).map(([category, items], index) => (
                        <div key={category} style={{ display: 'flex', flexDirection: 'column', minHeight: '0' }}>
                            <SectionReveal delay={index * 0.1} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div className="glass" style={{
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-md)',
                                    transition: 'var(--transition-fast)',
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 'auto'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            background: 'rgba(255, 61, 0, 0.1)',
                                            padding: '0.75rem',
                                            borderRadius: '12px',
                                            color: 'var(--accent)',
                                            boxShadow: '0 0 15px rgba(255, 61, 0, 0.2)'
                                        }}>
                                            {iconMap[category] || <Code2 size={24} />}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                                            {t(`skills.categories.${categoryTranslationKeys[category]}`)}
                                        </h3>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                        {items.map(skill => (
                                            <span key={skill} style={{
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.85rem',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SectionReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
