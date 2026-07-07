import AGFadeIn from '../ag/AGFadeIn';
import AGHologramCard from '../ag/AGHologramCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './sections.css';

const Projects = () => {
    const projects = [
        {
            title: 'ScholarlyEdge',
            rank: 'LEGENDARY',
            glowColor: 'pink',
            animeLabel: 'Academy Conjurer',
            image: '/projects/scholarlyedge.png',
            liveUrl: 'https://scholarlyedge-alpha.vercel.app/',
            githubUrl: 'https://github.com/Chhavig02/scholarlyedge'
        },
        {
            title: 'VOCA',
            rank: 'ELITE',
            glowColor: 'purple',
            animeLabel: 'Voice Harmonizer',
            image: '/projects/voca.png',
            liveUrl: 'https://voca-rouge.vercel.app/',
            githubUrl: 'https://github.com/Chhavig02/Voca'
        },
        {
            title: 'GENAI Temperature Tester',
            rank: 'SSR RANK',
            glowColor: 'cyan',
            animeLabel: 'Prompt Alchemist',
            image: '/projects/genai.png',
            liveUrl: 'https://8byhepiiedg9ucwvpwevbj.streamlit.app/',
            githubUrl: 'https://github.com/Chhavig02/GENAI'
        },
        {
            title: 'URL Shortener Microservice',
            rank: 'SSR RANK',
            glowColor: 'blue',
            animeLabel: 'Latency Demon',
            image: '/projects/urlshortener.png',
            liveUrl: 'https://url-shortener-microservice-main.onrender.com/',
            githubUrl: 'https://github.com/Chhavig02/URL-Shortener-Microservice-main'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <AGFadeIn>
                    <div className="section-title">
                        <span className="section-subtitle">// Battle Arena</span>
                        <h2>Projects</h2>
                    </div>
                </AGFadeIn>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <AGFadeIn key={index} direction="up" delay={index * 0.15}>
                            <AGHologramCard
                                glowColor={project.glowColor}
                                rank={project.rank}
                                animeLabel={project.animeLabel}
                                className="project-card"
                            >
                                <div className="project-img-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`} alt={project.title} className="project-img" />
                                    <div className="project-hover-overlay">
                                        <div className="hover-actions">
                                            {project.githubUrl && (
                                                <a 
                                                    href={project.githubUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="hover-action-btn github-btn" 
                                                    title="View Source Code"
                                                    style={{ '--btn-glow': `var(--neon-${project.glowColor})` }}
                                                >
                                                    <FaGithub />
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a 
                                                    href={project.liveUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="hover-action-btn live-btn" 
                                                    title="View Live Demo"
                                                    style={{ '--btn-glow': `var(--neon-${project.glowColor})` }}
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-title-bar">
                                    <h4>{project.title}</h4>
                                </div>
                            </AGHologramCard>
                        </AGFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
