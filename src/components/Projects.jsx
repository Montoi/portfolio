import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const projectMeta = [
    {
        tech: ["React", "TypeScript", "CSS Modules", "Axios"],
        color: "#00acc1", // Teal/Cyan
        gradient: "linear-gradient(135deg, #004d40 0%, #00acc1 100%)"
    },
    {
        tech: [".NET Core", "SQL Server", "Angular", "Docker"],
        color: "#304ffe", // Deep Blue
        gradient: "linear-gradient(135deg, #1a237e 0%, #304ffe 100%)"
    },
    {
        tech: ["Power BI", "Power Automate", "Azure"],
        color: "#ff6d00", // Deep Orange
        gradient: "linear-gradient(135deg, #e65100 0%, #ff6d00 100%)"
    },
    {
        tech: ["Flutter", "Dart", "Firebase", "Bloc"],
        color: "#424242", // Dark Grey
        gradient: "linear-gradient(135deg, #212121 0%, #424242 100%)"
    }
];

const Projects = () => {
    const { t } = useTranslation();
    const projectsContent = t('projects.items', { returnObjects: true });

    // Merge content with meta
    const projects = projectsContent.map((p, i) => ({ ...p, ...projectMeta[i] }));

    return (
        <section id="projects" className="section">
            <div className="container">
                <SectionReveal>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center', fontWeight: '800', letterSpacing: '-1px' }}>
                        {t('projects.title')} <span className="text-gradient">{t('projects.title_accent')}</span>
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '5rem', maxWidth: '600px', margin: '0 auto 5rem auto' }}>
                        Transforming concepts into digital reality.
                    </p>
                </SectionReveal>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '3rem'
                }}>
                    {projects.map((project, index) => (
                        <SectionReveal key={index} delay={index * 0.1}>
                            <motion.div
                                className="glass"
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                style={{
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    position: 'relative'
                                }}
                            >
                                {/* Browser Window Header Mockup */}
                                <div style={{
                                    background: project.gradient,
                                    padding: '0.75rem 1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                                    <div style={{
                                        marginLeft: 'auto',
                                        background: 'rgba(0,0,0,0.2)',
                                        padding: '2px 10px',
                                        borderRadius: '4px',
                                        fontSize: '0.7rem',
                                        color: 'rgba(255,255,255,0.7)',
                                        fontFamily: 'monospace'
                                    }}>
                                        project-0{index + 1}.tsx
                                    </div>
                                </div>

                                {/* Project "Preview" Area */}
                                <div style={{
                                    height: '200px',
                                    background: `linear-gradient(to bottom, ${project.color}22, var(--bg-secondary))`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 150%)'
                                    }}></div>
                                    <h3 style={{
                                        fontSize: '3rem',
                                        fontWeight: '900',
                                        color: 'rgba(255,255,255,0.05)',
                                        zIndex: 1,
                                        letterSpacing: '-2px'
                                    }}>
                                        {t('projects.title').toUpperCase()}
                                    </h3>
                                </div>

                                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>{project.title}</h3>
                                        <ArrowUpRight size={24} className="text-accent" />
                                    </div>

                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', flex: 1, fontSize: '1rem' }}>
                                        {project.description}
                                    </p>

                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                            {project.tech.map(t => (
                                                <span key={t} style={{
                                                    fontSize: '0.8rem',
                                                    padding: '0.35rem 1rem',
                                                    border: '1px solid var(--border-light)',
                                                    borderRadius: '6px',
                                                    color: 'var(--text-primary)',
                                                    background: 'var(--bg-tertiary)',
                                                    fontWeight: '500'
                                                }}>{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                        <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.9rem', padding: '0.8rem', display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                                            <ExternalLink size={18} /> {t('projects.demo')}
                                        </button>
                                        <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.9rem', padding: '0.8rem', display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Github size={18} /> {t('projects.code')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
