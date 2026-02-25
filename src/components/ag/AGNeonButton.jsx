import { motion } from 'framer-motion';
import './ag-components.css';

const AGNeonButton = ({
    children,
    onClick,
    color = 'cyan',
    variant = 'solid',
    href = null,
    type = 'button',
    className = ''
}) => {
    const colorMap = {
        cyan: { bg: 'var(--neon-cyan)', shadow: 'rgba(0, 240, 255, 0.4)' },
        pink: { bg: 'var(--neon-pink)', shadow: 'rgba(255, 45, 117, 0.4)' },
        purple: { bg: 'var(--neon-purple)', shadow: 'rgba(184, 77, 255, 0.4)' }
    };

    const c = colorMap[color] || colorMap.cyan;

    const style = variant === 'outline' ? {
        '--btn-bg': 'transparent',
        '--btn-border': c.bg,
        '--btn-text': c.bg,
        '--btn-shadow': c.shadow,
        '--btn-hover-bg': c.bg,
        '--btn-hover-text': '#000'
    } : {
        '--btn-bg': c.bg,
        '--btn-border': c.bg,
        '--btn-text': '#000',
        '--btn-shadow': c.shadow,
        '--btn-hover-bg': 'transparent',
        '--btn-hover-text': c.bg
    };

    const handleClick = (e) => {
        if (href) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) onClick(e);
    };

    return (
        <motion.button
            type={type}
            className={`ag-neon-button ${className}`}
            style={style}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="ag-btn-text">{children}</span>
            <span className="ag-btn-glow" />
        </motion.button>
    );
};

export default AGNeonButton;
