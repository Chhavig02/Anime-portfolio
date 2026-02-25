import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';
import './sections.css';

const Footer = () => {
    const socials = [
        { icon: <FaGithub />, href: 'https://github.com/Chhavig02', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/chhavi', label: 'LinkedIn' },
        { icon: <FaCode />, href: 'https://leetcode.com/chhavi', label: 'LeetCode' },
        { icon: <FaEnvelope />, href: 'mailto:chhavi02g@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="footer-section">
            <div className="footer-glow-line" />

            <div className="container">
                <div className="footer-content">
                    <motion.div
                        className="footer-name"
                        whileHover={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
                    >
                        Chhavi
                    </motion.div>

                    <div className="footer-socials">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-icon"
                                aria-label={social.label}
                                whileHover={{
                                    scale: 1.2,
                                    color: '#00f0ff',
                                    textShadow: '0 0 15px rgba(0, 240, 255, 0.5)'
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <p className="footer-copy">
                        Built with <FaHeart style={{ color: 'var(--neon-pink)', verticalAlign: 'middle' }} /> by Chhavi — Code Sorceress
                    </p>
                    <p className="footer-year">© 2026 — All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
