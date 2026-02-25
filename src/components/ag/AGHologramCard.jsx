import { motion } from 'framer-motion';
import './ag-components.css';

const AGHologramCard = ({
    children,
    className = '',
    glowColor = 'cyan',
    rank = null,
    animeLabel = null
}) => {
    const glowMap = {
        cyan: 'var(--neon-cyan)',
        pink: 'var(--neon-pink)',
        purple: 'var(--neon-purple)',
        blue: 'var(--neon-blue)'
    };

    const color = glowMap[glowColor] || glowMap.cyan;

    return (
        <motion.div
            className={`ag-hologram-card ${className}`}
            style={{ '--card-glow': color }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            {/* Scan line effect */}
            <div className="ag-hologram-scanline" />

            {/* Corner accents */}
            <div className="ag-corner ag-corner-tl" />
            <div className="ag-corner ag-corner-tr" />
            <div className="ag-corner ag-corner-bl" />
            <div className="ag-corner ag-corner-br" />

            {/* Rank badge */}
            {rank && (
                <div className="ag-rank-badge" style={{ '--badge-color': color }}>
                    {rank}
                </div>
            )}

            {/* Content */}
            <div className="ag-hologram-content">
                {children}
            </div>

            {/* Anime label */}
            {animeLabel && (
                <div className="ag-anime-label" style={{ '--label-color': color }}>
                    ⚔ {animeLabel}
                </div>
            )}
        </motion.div>
    );
};

export default AGHologramCard;
