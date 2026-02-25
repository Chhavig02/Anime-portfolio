import AGFadeIn from '../ag/AGFadeIn';
import AGSkillTree from '../ag/AGSkillTree';
import './sections.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '⚡',
            skills: ['React.js', 'Next.js', 'Svelte', 'Tailwind', 'Framer Motion', 'HTML/CSS', 'JavaScript']
        },
        {
            title: 'Backend',
            icon: '🔧',
            skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'JWT Auth', 'REST APIs']
        },
        {
            title: 'AI Sorcery',
            icon: '🧠',
            skills: ['Python', 'ML', 'Deep Learning', 'NLP', 'OCR', 'LLMs', 'ONNX Runtime']
        },
        {
            title: 'DevOps',
            icon: '🚀',
            skills: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'Prometheus', 'Grafana']
        }
    ];

    return (
        <section id="skills" className="skills-section circuit-bg">
            <div className="container">
                <AGFadeIn>
                    <div className="section-title">
                        <span className="section-subtitle">// Domain Expansion</span>
                        <h2>Skills</h2>
                    </div>
                </AGFadeIn>

                <AGSkillTree categories={skillCategories} />
            </div>
        </section>
    );
};

export default Skills;
