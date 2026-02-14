import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map(l => document.getElementById(l.id));
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].getBoundingClientRect().top <= 150) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container container">
                <a href="#home" className="navbar-logo" onClick={() => handleNavClick('home')}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-text">HG</span>
                    <span className="logo-bracket">/&gt;</span>
                </a>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <a key={link.id} href={`#${link.id}`}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}>
                            {link.label}
                        </a>
                    ))}
                </div>
                <button className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
