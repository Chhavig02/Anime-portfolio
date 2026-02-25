import { motion } from 'framer-motion';

const AGHoverGlow = ({
    children,
    color = 'var(--neon-cyan)',
    className = '',
    intensity = 20
}) => {
    return (
        <motion.div
            className={className}
            whileHover={{
                boxShadow: `0 0 ${intensity}px ${color}40, 0 0 ${intensity * 2}px ${color}20`,
                borderColor: `${color}80`,
                transition: { duration: 0.3 }
            }}
            style={{ transition: 'all 0.3s ease' }}
        >
            {children}
        </motion.div>
    );
};

export default AGHoverGlow;
