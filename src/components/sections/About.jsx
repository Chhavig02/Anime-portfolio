import { motion } from 'framer-motion';
import AGFadeIn from '../ag/AGFadeIn';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import './sections.css';

const About = () => {
    const quickInfo = [
        { icon: <FaEnvelope />, text: 'chhavi02g@gmail.com', href: 'mailto:chhavi02g@gmail.com' },
        { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://linkedin.com/in/chhavi' },
        { icon: <FaGithub />, text: 'GitHub', href: 'https://github.com/Chhavig02' },
        { icon: <FaCode />, text: 'LeetCode', href: 'https://leetcode.com/chhavi' },
    ];

    return (
        <section id="about" className="about-section">
            {/* Background oversized text like Evangelion layout */}
            <div className="about-bg-text" aria-hidden="true">
                <span>ORIGIN</span>
                <span>ARC</span>
            </div>

            <div className="container about-eva-layout">
                {/* Left column — avatar with dramatic framing */}
                <AGFadeIn direction="left" className="about-avatar-col">
                    <div className="about-avatar-frame">
                        {/* Corner accents */}
                        <div className="avatar-corner avatar-corner-tl" />
                        <div className="avatar-corner avatar-corner-tr" />
                        <div className="avatar-corner avatar-corner-bl" />
                        <div className="avatar-corner avatar-corner-br" />

                        {/* Glowing rings */}
                        <div className="avatar-ring avatar-ring-1" />
                        <div className="avatar-ring avatar-ring-2" />

                        <img
                            src="/PM.png"
                            alt="Chhavi — The Code Sorceress"
                            className="about-avatar-img"
                        />

                        {/* Label overlay */}
                        <div className="avatar-label">
                            <span className="avatar-label-tag">UNIT_01</span>
                            <span className="avatar-label-name">CODE SORCERESS</span>
                        </div>
                    </div>
                </AGFadeIn>

                {/* Right column — text content */}
                <div className="about-text-col">
                    <AGFadeIn>
                        <div className="about-header">
                            <span className="about-episode">// Episode 01</span>
                            <h2 className="about-title-eva">
                                <span className="about-title-small">The</span>
                                <span className="about-title-big">Origin</span>
                                <span className="about-title-accent">Arc</span>
                            </h2>
                        </div>
                    </AGFadeIn>

                    <AGFadeIn delay={0.1}>
                        <p className="about-intro-eva">
                            Forged at <span className="neon-text-pink">Chandigarh University</span>.
                        </p>
                    </AGFadeIn>

                    <AGFadeIn delay={0.2}>
                        <p className="about-desc-eva">
                            A sorceress mastering the dual arts of <strong>Full-Stack Engineering</strong> and <strong>Artificial Intelligence</strong>.
                            I build high-performance web applications that push boundaries and craft intelligent AI systems that solve real-world problems.
                        </p>
                    </AGFadeIn>

                    <AGFadeIn delay={0.3}>
                        <p className="about-desc-eva">
                            From architecting microservices handling <span className="neon-text-cyan">12,000+ req/sec</span> to building
                            face recognition systems with <span className="neon-text-pink">96.8% accuracy</span> — I thrive at the intersection
                            of engineering and innovation.
                        </p>
                    </AGFadeIn>

                    <AGFadeIn delay={0.4}>
                        <div className="about-stats-row">
                            <div className="about-stat">
                                <span className="about-stat-number">12K+</span>
                                <span className="about-stat-label">REQ/SEC</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat-number">96.8%</span>
                                <span className="about-stat-label">AI ACCURACY</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat-number">∞</span>
                                <span className="about-stat-label">CURIOSITY</span>
                            </div>
                        </div>
                    </AGFadeIn>

                    <AGFadeIn delay={0.5}>
                        <div className="about-quick-info">
                            {quickInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href || '#'}
                                    className="about-info-item"
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: 'rgba(0, 240, 255, 0.5)'
                                    }}
                                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                >
                                    <span className="about-info-icon">{item.icon}</span>
                                    <span>{item.text}</span>
                                </motion.a>
                            ))}
                        </div>
                    </AGFadeIn>
                </div>
            </div>
        </section>
    );
};

export default About;
