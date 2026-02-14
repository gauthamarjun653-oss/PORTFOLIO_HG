const Skills = () => {
    const skillCategories = [
        {
            title: 'AI & Machine Learning',
            icon: '🤖',
            color: 'var(--accent-primary)',
            skills: [
                { name: 'Artificial Intelligence', level: 78 },
                { name: 'Machine Learning', level: 75 },
                { name: 'Generative AI', level: 72 },
                { name: 'AIDL/ML', level: 70 },
            ]
        },
        {
            title: 'Programming',
            icon: '💻',
            color: 'var(--accent-cyan)',
            skills: [
                { name: 'Python', level: 85 },
                { name: 'Data Structures & Algorithms', level: 75 },
                { name: 'AI Frameworks & Tools', level: 70 },
            ]
        },
        {
            title: 'Tools & Collaboration',
            icon: '🛠️',
            color: 'var(--accent-green)',
            skills: [
                { name: 'Git & GitHub', level: 80 },
                { name: 'Version Control', level: 78 },
                { name: 'Collaborative Development', level: 82 },
            ]
        },
        {
            title: 'Soft Skills',
            icon: '🗣️',
            color: 'var(--accent-pink)',
            skills: [
                { name: 'Communication (CLTS Certified)', level: 88 },
                { name: 'Teamwork', level: 90 },
                { name: 'Problem Solving', level: 82 },
                { name: 'Continuous Learning', level: 95 },
            ]
        }
    ];

    const techIcons = [
        { name: 'Python', emoji: '🐍' },
        { name: 'AI', emoji: '🤖' },
        { name: 'ML', emoji: '🧠' },
        { name: 'GenAI', emoji: '✨' },
        { name: 'Git', emoji: '📦' },
        { name: 'GitHub', emoji: '🐙' },
        { name: 'DSA', emoji: '🔢' },
        { name: 'CLTS', emoji: '🗣️' },
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Skills & Tech</span>
                    <h2 className="section-title">Technical Arsenal</h2>
                    <p className="section-subtitle">
                        Technologies and skills I work with to build AI-driven solutions
                    </p>
                </div>

                {/* Floating tech icons marquee */}
                <div className="tech-marquee animate-on-scroll">
                    <div className="marquee-track">
                        {[...techIcons, ...techIcons].map((tech, i) => (
                            <div key={i} className="marquee-item">
                                <span className="marquee-emoji">{tech.emoji}</span>
                                <span className="marquee-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card glass-card animate-on-scroll">
                            <div className="skill-card-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3 className="skill-card-title">{category.title}</h3>
                            </div>
                            <div className="skill-bars">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-bar-item">
                                        <div className="skill-bar-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-track">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                                                    animationDelay: `${i * 0.1}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
