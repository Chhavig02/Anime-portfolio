import AGFadeIn from '../ag/AGFadeIn';
import AGTimeline from '../ag/AGTimeline';
import './sections.css';

const Education = () => {
    const educationItems = [
        {
            year: '2023 — 2027',
            title: 'Chandigarh University',
            subtitle: 'B.E. Computer Science & Engineering (AI & ML)'
        },
        {
            year: '2022 — 2023',
            title: 'Sahara Comprehensive School',
            subtitle: 'Class XII — Senior Secondary'
        },
        {
            year: '2020 — 2021',
            title: 'Sahara Comprehensive School',
            subtitle: 'Class X — Secondary'
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <AGFadeIn>
                    <div className="section-title">
                        <span className="section-subtitle">// Academy of Power</span>
                        <h2>Education</h2>
                    </div>
                </AGFadeIn>

                <AGTimeline items={educationItems} />
            </div>
        </section>
    );
};

export default Education;
