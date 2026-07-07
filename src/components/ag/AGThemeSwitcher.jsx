import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck, FaTimes } from 'react-icons/fa';
import './ag-components.css';

const themes = [
    { id: 'cyberpunk', name: 'Cyberpunk', colors: ['#ff2d75', '#00f0ff'] },
    { id: 'toxic', name: 'Toxic Wasteland', colors: ['#d800ff', '#39ff14'] },
    { id: 'matrix', name: 'Digital Matrix', colors: ['#00ff00', '#00ff33'] },
    { id: 'synthwave', name: 'Synthwave', colors: ['#ff007f', '#ffaa00'] },
    { id: 'hologram', name: 'Neon Hologram', colors: ['#00f0ff', '#ff77ff'] }
];

const AGThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState('cyberpunk');

    // Close when clicking outside
    useEffect(() => {
        if (!isOpen) return;
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.ag-theme-switcher-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isOpen]);

    // On mount, read from localStorage or default
    useEffect(() => {
        const savedTheme = localStorage.getItem('anime-portfolio-theme') || 'cyberpunk';
        setActiveTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (themeId) => {
        // Remove existing theme classes from body
        themes.forEach(t => {
            document.body.classList.remove(`theme-${t.id}`);
        });
        // Add new one
        document.body.classList.add(`theme-${themeId}`);
        localStorage.setItem('anime-portfolio-theme', themeId);
    };

    const handleThemeChange = (themeId) => {
        setActiveTheme(themeId);
        applyTheme(themeId);
    };

    return (
        <div className="ag-theme-switcher-container">
            {/* Toggle Button */}
            <motion.button
                className="ag-theme-toggle-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Customize Color Scheme"
                style={{
                    border: '1px solid var(--neon-cyan)',
                    background: 'var(--bg-card)',
                    color: 'var(--neon-cyan)',
                    boxShadow: 'var(--glow-cyan)'
                }}
            >
                {isOpen ? <FaTimes /> : <FaPalette />}
            </motion.button>

            {/* Holographic Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="ag-theme-panel"
                        onClick={(e) => e.stopPropagation()}
                        drag
                        dragMomentum={false}
                        style={{ cursor: 'grab', touchAction: 'none' }}
                        whileDrag={{ scale: 1.02, cursor: 'grabbing', zIndex: 1020 }}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="ag-theme-panel-header">
                            <span className="panel-title-tag">// System Tuning</span>
                            <h4>Color Themes</h4>
                        </div>
                        <div className="ag-theme-list">
                            {themes.map((theme) => {
                                const isActive = activeTheme === theme.id;
                                return (
                                    <button
                                        key={theme.id}
                                        className={`ag-theme-item ${isActive ? 'active' : ''}`}
                                        onClick={() => handleThemeChange(theme.id)}
                                        style={{
                                            borderLeft: `4px solid ${theme.colors[0]}`
                                        }}
                                    >
                                        <div className="ag-theme-info">
                                            <span className="theme-name">{theme.name}</span>
                                            <div className="theme-preview-dots">
                                                <span className="dot" style={{ backgroundColor: theme.colors[0] }} />
                                                <span className="dot" style={{ backgroundColor: theme.colors[1] }} />
                                            </div>
                                        </div>
                                        {isActive && (
                                            <span className="theme-check-icon" style={{ color: theme.colors[1] }}>
                                                <FaCheck />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AGThemeSwitcher;
