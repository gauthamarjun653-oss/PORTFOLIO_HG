import { useState, useRef, useEffect } from 'react';

const Hero = ({ user }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = [
        'AI & ML Enthusiast',
        'GenAI Developer',
        'Python Developer',
        'Problem Solver',
        'B.Tech Student'
    ];

    useEffect(() => {
        const phrase = phrases[currentPhraseIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < phrase.length) {
                timeout = setTimeout(() => {
                    setDisplayText(phrase.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentPhraseIndex]);

    return (
        <section className="hero" id="home">
            {/* Animated background particles */}
            <div className="hero-particles">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            '--tx': `${Math.random() * 100 - 50}px`,
                            '--ty': `${Math.random() * 100 - 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 5 + 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Gradient orbs */}
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>

            <div className="hero-content container">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">S. Harish</span>
                        <br />
                        <span className="gradient-text-pink">Gautham</span>
                    </h1>
                    <div className="hero-typing">
                        <span className="typing-text">{displayText}</span>
                        <span className="typing-cursor">|</span>
                    </div>
                    <p className="hero-description">
                        B.Tech student passionate about building AI-driven solutions.
                        Currently advancing skills in AIDL/ML, GenAI, and Python with
                        hands-on experience in cutting-edge AI tools and frameworks.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Get in Touch
                        </a>
                        <a href="https://github.com/gauthamarjun653-oss" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View GitHub
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">AI/ML</span>
                            <span className="stat-label">Focus Area</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">Python</span>
                            <span className="stat-label">Primary Language</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">DSA</span>
                            <span className="stat-label">Problem Solving</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-ring">
                        <div className="profile-image">
                            <img src="/images/photo2.jpg" alt="S. Harish Gautham" />
                        </div>
                    </div>
                    <div className="floating-badge floating-badge-1">
                        <span>🤖</span> AI/ML
                    </div>
                    <div className="floating-badge floating-badge-2">
                        <span>🐍</span> Python
                    </div>
                    <div className="floating-badge floating-badge-3">
                        <span>🧠</span> GenAI
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
