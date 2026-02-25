import AGFadeIn from '../ag/AGFadeIn';
import AGHologramCard from '../ag/AGHologramCard';
import { FaBolt, FaClock, FaChartBar, FaEye, FaShieldAlt, FaRocket, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './sections.css';

const Projects = () => {
    const projects = [
        {
            title: 'URL Shortener Microservice',
            rank: 'SSR RANK',
            glowColor: 'cyan',
            animeLabel: 'Performance Demon',
            features: [
                { icon: <FaBolt />, text: '12k req/sec throughput' },
                { icon: <FaClock />, text: '<100ms latency' },
                { icon: <FaShieldAlt />, text: 'Redis caching layer' },
                { icon: <FaChartBar />, text: 'Analytics dashboard' },
                { icon: <FaEye />, text: 'Prometheus + Grafana' },
            ],
            description: 'High-performance URL shortener built for scale with Redis caching, server-side rendering, and real-time analytics monitoring.',
            tech: ['Node.js', 'Redis', 'PostgreSQL', 'Docker'],
            liveUrl: 'https://url-shortener-microservice-main.onrender.com/',
            githubUrl: 'https://github.com/Chhavig02/URL-Shortener-Microservice-main'
        },
        {
            title: 'Job Offer Letter Analyzer',
            rank: 'LEGENDARY',
            glowColor: 'pink',
            animeLabel: 'Insight Conjurer',
            features: [
                { icon: <FaEye />, text: '97% OCR accuracy' },
                { icon: <FaShieldAlt />, text: '25+ risk detections' },
                { icon: <FaChartBar />, text: '40+ page support' },
                { icon: <FaClock />, text: '<4 sec processing' },
            ],
            description: 'AI-powered document analyzer that extracts, parses, and evaluates job offers for hidden risks and unfavorable clauses.',
            tech: ['Python', 'NLP', 'OCR', 'ONNX'],
            githubUrl: 'https://github.com/Chhavig02'
        },
        {
            title: 'Smart Student Attendance',
            rank: 'ELITE',
            glowColor: 'purple',
            animeLabel: 'Vision Guardian',
            features: [
                { icon: <FaEye />, text: '96.8% face accuracy' },
                { icon: <FaRocket />, text: '40 faces/sec' },
                { icon: <FaChartBar />, text: 'Admin dashboard' },
                { icon: <FaShieldAlt />, text: 'Role-based access' },
            ],
            description: 'Real-time face recognition attendance system with multi-face detection, comprehensive admin dashboard, and role-based access control.',
            tech: ['Python', 'OpenCV', 'Flask', 'SSIM'],
            githubUrl: 'https://github.com/Chhavig02'
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
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-features">
                                    {project.features.map((feat, i) => (
                                        <div key={i} className="project-feature">
                                            <span className="feature-icon">{feat.icon}</span>
                                            <span>{feat.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link-github">
                                            <FaGithub /> Source
                                        </a>
                                    )}
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
