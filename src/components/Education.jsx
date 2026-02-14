const Education = () => {
    const educationData = [
        {
            institution: 'Rajalakshmi Engineering College',
            degree: 'Bachelor of Technology — Computer Science & Business System',
            period: 'Oct 2024 – Oct 2028',
            status: 'Currently Pursuing',
            icon: '🎓',
            highlights: [
                'Focused on AI/ML and GenAI coursework',
                'Active in technical communities',
                'Hands-on projects with Python & AI frameworks'
            ],
            color: 'var(--accent-primary)'
        },
        {
            institution: 'TVS Matriculation Higher Secondary School',
            degree: 'Higher Secondary Education',
            period: '2015 – 2024',
            status: 'Completed',
            icon: '🏫',
            highlights: [
                'Strong foundation in Mathematics & Science',
                'CLTS Certification from Sash Institute',
                'Developed passion for technology'
            ],
            color: 'var(--accent-pink)'
        }
    ];

    return (
        <section className="education-section" id="education">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Education</span>
                    <h2 className="section-title">Academic Journey</h2>
                    <p className="section-subtitle">
                        Building a strong foundation in Computer Science and AI
                    </p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`timeline-item animate-on-scroll ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-dot" style={{ background: edu.color }}>
                                <span>{edu.icon}</span>
                            </div>
                            <div className="timeline-card glass-card">
                                <div className="timeline-card-header">
                                    {edu.status === 'Currently Pursuing' && (
                                        <span className="status-badge active">
                                            <span className="pulse-dot"></span>
                                            Currently Pursuing
                                        </span>
                                    )}
                                    {edu.status === 'Completed' && (
                                        <span className="status-badge completed">✓ Completed</span>
                                    )}
                                    <span className="timeline-period">{edu.period}</span>
                                </div>
                                <h3 className="timeline-institution">{edu.institution}</h3>
                                <p className="timeline-degree">{edu.degree}</p>
                                <ul className="timeline-highlights">
                                    {edu.highlights.map((h, i) => (
                                        <li key={i}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={edu.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
