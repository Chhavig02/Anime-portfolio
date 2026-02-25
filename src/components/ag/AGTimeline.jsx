import { motion } from 'framer-motion';
import AGFadeIn from './AGFadeIn';
import './ag-components.css';

const AGTimeline = ({ items = [] }) => {
    return (
        <div className="ag-timeline">
            <div className="ag-timeline-line" />
            {items.map((item, index) => (
                <AGFadeIn key={index} direction="up" delay={index * 0.15}>
                    <div className={`ag-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <motion.div
                            className="ag-timeline-node"
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                        <motion.div
                            className="ag-timeline-card"
                            whileHover={{
                                borderColor: 'rgba(0, 240, 255, 0.5)',
                                boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)'
                            }}
                        >
                            {item.year && (
                                <span className="ag-timeline-year">{item.year}</span>
                            )}
                            <h3 className="ag-timeline-title">{item.title}</h3>
                            {item.subtitle && (
                                <p className="ag-timeline-subtitle">{item.subtitle}</p>
                            )}
                            {item.detail && (
                                <span className="ag-timeline-detail">{item.detail}</span>
                            )}
                        </motion.div>
                    </div>
                </AGFadeIn>
            ))}
        </div>
    );
};

export default AGTimeline;
