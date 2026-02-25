import { useState } from 'react';
import { motion } from 'framer-motion';
import AGFadeIn from '../ag/AGFadeIn';
import AGHologramCard from '../ag/AGHologramCard';
import AGNeonButton from '../ag/AGNeonButton';
import './sections.css';

const Contact = () => {
    const [focused, setFocused] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult('Sending...');
        const formData = new FormData(e.target);
        formData.append('access_key', 'da8020fe-9c4b-4892-8d8d-b80a3231097b');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setResult('Message sent successfully! ⚡');
                e.target.reset();
            } else {
                setResult('Something went wrong. Try again.');
            }
        } catch {
            setResult('Network error. Please try again.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <AGFadeIn>
                    <div className="section-title">
                        <span className="section-subtitle">// Holographic Terminal</span>
                        <h2>Contact Me</h2>
                    </div>
                </AGFadeIn>

                <div className="contact-grid">
                    {/* Left side — contact info card */}
                    <AGFadeIn direction="left" className="contact-art-area">
                        <div className="contact-info-card">
                            <div className="contact-info-avatar">
                                <img src="/pm.jpeg" alt="Chhavi" className="contact-avatar-img" />
                                <div className="contact-avatar-ring" />
                            </div>

                            <h3 className="contact-info-name">Chhavi</h3>
                            <p className="contact-info-role">Full-Stack Engineer × AI Sorceress</p>

                            <div className="contact-info-details">
                                <a href="mailto:chhavi02g@gmail.com" className="contact-detail-item">
                                    <span className="contact-detail-icon">📧</span>
                                    <span>chhavi02g@gmail.com</span>
                                </a>
                                <a href="https://linkedin.com/in/chhavi" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                                    <span className="contact-detail-icon">💼</span>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://github.com/Chhavig02" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                                    <span className="contact-detail-icon">⚡</span>
                                    <span>GitHub</span>
                                </a>
                            </div>

                            <p className="contact-quote">
                                "Let's build something legendary together."
                            </p>
                        </div>
                    </AGFadeIn>

                    {/* Right side — form */}
                    <AGFadeIn direction="right" delay={0.2} className="contact-form-area">
                        <AGHologramCard glowColor="purple" className="contact-form-card">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className={`form-group ${focused === 'name' ? 'focused' : ''}`}>
                                    <label htmlFor="contact-name">Name</label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused('')}
                                        placeholder="Your name, adventurer..."
                                        required
                                    />
                                </div>

                                <div className={`form-group ${focused === 'email' ? 'focused' : ''}`}>
                                    <label htmlFor="contact-email">Email</label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className={`form-group ${focused === 'message' ? 'focused' : ''}`}>
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused('')}
                                        placeholder="Your message..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <AGNeonButton color="pink" type="submit" className="contact-submit">
                                    ⚡ Send Message
                                </AGNeonButton>

                                {result && (
                                    <p className="contact-result" style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.85rem',
                                        color: result.includes('success') ? 'var(--neon-cyan)' : result === 'Sending...' ? 'var(--neon-purple)' : 'var(--neon-pink)',
                                        marginTop: '12px',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {result}
                                    </p>
                                )}
                            </form>
                        </AGHologramCard>
                    </AGFadeIn>
                </div>
            </div>
        </section>
    );
};

export default Contact;
