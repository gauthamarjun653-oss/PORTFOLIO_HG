const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">Passionate About AI & Innovation</h2>
                    <p className="section-subtitle">
                        A driven B.Tech student with a vision to build impactful AI solutions
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-content animate-on-scroll">
                        <div className="about-text">
                            <p>
                                I am a <strong>B.Tech student</strong> passionate about <span className="highlight">Artificial Intelligence</span>,
                                <span className="highlight"> Machine Learning</span>, and <span className="highlight">Generative AI</span>.
                                Currently advancing my skills in AIDL/ML and GenAI, with hands-on experience in Python
                                integrated with AI tools and frameworks.
                            </p>
                            <p>
                                I actively practice <strong>Data Structures & Algorithms</strong> in Python and continuously
                                improve my problem-solving abilities. I am proficient with <strong>Git and GitHub</strong> for
                                version control and collaborative development.
                            </p>
                            <p>
                                Certified in <strong>Communicative Language Teaching & Speaking (CLTS)</strong> from
                                Sash Institute, I value clear communication and teamwork.
                            </p>
                            <p>
                                I am a proactive team player who enjoys building real-world AI solutions and continuously
                                learning emerging technologies. My goal is to contribute to <span className="highlight">impactful AI-driven products</span> while
                                strengthening my technical foundation and communication skills.
                            </p>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight-card glass-card">
                                <div className="highlight-icon">🎯</div>
                                <div>
                                    <h4>Goal Oriented</h4>
                                    <p>Building impactful AI-driven products</p>
                                </div>
                            </div>
                            <div className="highlight-card glass-card">
                                <div className="highlight-icon">💡</div>
                                <div>
                                    <h4>Continuous Learner</h4>
                                    <p>Always exploring emerging technologies</p>
                                </div>
                            </div>
                            <div className="highlight-card glass-card">
                                <div className="highlight-icon">🤝</div>
                                <div>
                                    <h4>Team Player</h4>
                                    <p>CLTS certified, values communication</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual animate-on-scroll">
                        <div className="code-window">
                            <div className="code-header">
                                <div className="code-dots">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                </div>
                                <span className="code-filename">harish_gautham.py</span>
                            </div>
                            <div className="code-body">
                                <pre><code>{`class Developer:
    def __init__(self):
        self.name = "S. Harish Gautham"
        self.role = "B.Tech Student"
        self.interests = [
            "Artificial Intelligence",
            "Machine Learning",
            "Generative AI",
        ]
        self.skills = {
            "languages": ["Python"],
            "ai_tools": ["AIDL/ML", "GenAI"],
            "other": ["DSA", "Git", "GitHub"]
        }
        self.certified = "CLTS - Sash Institute"

    def goal(self):
        return "Build impactful AI products"

    def motto(self):
        return "Learn. Build. Repeat. 🚀"`}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
