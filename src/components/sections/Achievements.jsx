import { motion } from 'framer-motion';
import AGFadeIn from '../ag/AGFadeIn';
import { FaTrophy, FaGraduationCap, FaFire, FaStar, FaPaintBrush } from 'react-icons/fa';
import './sections.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <FaTrophy />,
            title: 'DevBhoomi Cyber Hackathon',
            detail: 'Winner',
            color: '#ffd700'
        },
        {
            icon: <FaGraduationCap />,
            title: 'GSSoC Ambassador',
            detail: 'Community Leader',
            color: '#00f0ff'
        },
        {
            icon: <FaFire />,
            title: '200+ LeetCode Questions',
            detail: 'Problem Solver',
            color: '#ff2d75'
        },
        {
            icon: <FaStar />,
            title: '1500+ Rating',
            detail: 'Competitive Coder',
            color: '#b84dff'
        },
        {
            icon: <FaPaintBrush />,
            title: '50+ Graphic Designs',
            detail: 'Creative Designer',
            color: '#39ff14'
        }
    ];

    return (
        <section id="achievements" className="achievements-section circuit-bg">
            <div className="container">
                <AGFadeIn>
                    <div className="section-title">
                        <span className="section-subtitle">// Badge Wall</span>
                        <h2>Achievements</h2>
                    </div>
                </AGFadeIn>

                <div className="achievements-grid">
                    {achievements.map((ach, index) => (
                        <AGFadeIn key={index} direction="up" delay={index * 0.1}>
                            <motion.div
                                className="achievement-badge"
                                style={{ '--badge-glow': ach.color }}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: `0 0 30px ${ach.color}40, 0 0 60px ${ach.color}20`,
                                    borderColor: `${ach.color}80`
                                }}
                            >
                                <div className="achievement-icon" style={{ color: ach.color }}>
                                    {ach.icon}
                                </div>
                                <h3 className="achievement-title">{ach.title}</h3>
                                <span className="achievement-detail">{ach.detail}</span>
                            </motion.div>
                        </AGFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
