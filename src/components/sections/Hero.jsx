import { motion } from 'framer-motion';
import AGParticles from '../ag/AGParticles';
import AGNeonButton from '../ag/AGNeonButton';
import './sections.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <AGParticles count={55} />

            {/* Circuit background overlay */}
            <div className="hero-circuit-overlay" />

            {/* Large background text */}
            <div className="hero-bg-text" aria-hidden="true">
                <span>CODE</span>
                <span>SORCERESS</span>
            </div>

            <div className="hero-content container">
                <div className="hero-text-area">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="hero-tag">&#47;&#47; FULL-STACK ENGINEER × AI SORCERESS</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="hero-name">Chhavi</span>
                        <span className="hero-dash">—</span>
                        <span className="hero-role">The Full-Stack<br />Code Sorceress</span>
                    </motion.h1>

                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        ⚡ Building blazing web apps & intelligent AI systems.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <AGNeonButton color="cyan" href="#about">
                            🔮 Explore My World
                        </AGNeonButton>
                        <AGNeonButton color="pink" variant="outline" href="#projects">
                            🚀 View Projects
                        </AGNeonButton>
                    </motion.div>
                </div>

                {/* Hero character / avatar area */}
                <motion.div
                    className="hero-avatar-area"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="hero-avatar-container">
                        {/* Animated aura rings */}
                        <div className="hero-aura-ring hero-aura-1" />
                        <div className="hero-aura-ring hero-aura-2" />
                        <div className="hero-aura-ring hero-aura-3" />

                        {/* Character image */}
                        <motion.div
                            className="hero-character"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src="/pm.jpeg"
                                alt="Chhavi — Code Sorceress"
                                className="hero-character-img"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero-scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-line" />
                <span>SCROLL</span>
            </motion.div>
        </section>
    );
};

export default Hero;
