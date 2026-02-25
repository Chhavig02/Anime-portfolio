import { motion } from 'framer-motion';
import AGFadeIn from './AGFadeIn';
import './ag-components.css';

const AGSkillTree = ({ categories = [] }) => {
    const categoryColors = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-purple)', 'var(--neon-green)'];

    return (
        <div className="ag-skill-tree">
            {categories.map((cat, catIndex) => (
                <AGFadeIn key={catIndex} direction="up" delay={catIndex * 0.1}>
                    <div className="ag-skill-category">
                        {/* Hub node */}
                        <motion.div
                            className="ag-skill-hub"
                            style={{ '--hub-color': categoryColors[catIndex % categoryColors.length] }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 40px ${categoryColors[catIndex % categoryColors.length]}40`
                            }}
                        >
                            <span className="ag-skill-hub-icon">{cat.icon}</span>
                            <h3 className="ag-skill-hub-title">{cat.title}</h3>
                        </motion.div>

                        {/* Skill nodes */}
                        <div className="ag-skill-nodes">
                            {cat.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    className="ag-skill-node"
                                    style={{ '--node-color': categoryColors[catIndex % categoryColors.length] }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                    whileHover={{
                                        scale: 1.15,
                                        boxShadow: `0 0 20px ${categoryColors[catIndex % categoryColors.length]}60`,
                                        borderColor: categoryColors[catIndex % categoryColors.length]
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AGFadeIn>
            ))}
        </div>
    );
};

export default AGSkillTree;
