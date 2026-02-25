import { motion } from 'framer-motion';

const AGFadeIn = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = ''
}) => {
    const directionMap = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
        none: { y: 0, x: 0 }
    };

    const offset = directionMap[direction] || directionMap.up;

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {children}
        </motion.div>
    );
};

export default AGFadeIn;
