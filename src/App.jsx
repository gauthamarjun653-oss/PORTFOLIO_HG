import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import QueryForm from './components/QueryForm';
import AuthBanner from './components/AuthBanner';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Re-observe after initial render when components mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AuthBanner user={user} setUser={setUser} />
      <Navbar />
      <SocialLinks />
      <main>
        <Hero user={user} />
        <About />
        <Education />
        <Skills />
        <QueryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
