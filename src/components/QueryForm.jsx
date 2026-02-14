import { useState } from 'react';
import { supabase } from '../lib/supabase';

const QueryForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', question: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.question.trim()) {
            setErrorMsg('Please fill in your name and question.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMsg('');

        try {
            const { error } = await supabase.from('queries').insert([
                {
                    name: formData.name.trim(),
                    email: formData.email.trim() || null,
                    question: formData.question.trim(),
                }
            ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', question: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('Error submitting query:', err);
            setErrorMsg('Something went wrong. Please try again later.');
            setStatus('error');
        }
    };

    return (
        <section className="query-section" id="contact">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Ask Me</span>
                    <h2 className="section-title">Have a Question?</h2>
                    <p className="section-subtitle">
                        Feel free to ask me anything — about AI, projects, tech, or collaboration!
                    </p>
                </div>

                <div className="query-wrapper animate-on-scroll">
                    <div className="query-info">
                        <div className="query-info-card glass-card">
                            <div className="query-info-icon">💬</div>
                            <h3>Let's Connect</h3>
                            <p>
                                Whether you have a question about my work, want to discuss AI/ML,
                                or just want to say hi — I'd love to hear from you!
                            </p>
                            <div className="query-contact-items">
                                <div className="contact-item">
                                    <span className="contact-icon">📧</span>
                                    <a href="mailto:gauthamarjun653@gmail.com">gauthamarjun653@gmail.com</a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">💬</span>
                                    <a href="https://wa.me/917603997724" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <span>Chennai, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="query-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="query-name">Your Name <span className="required">*</span></label>
                            <input
                                id="query-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="query-email">Email <span className="optional">(optional)</span></label>
                            <input
                                id="query-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="query-question">Your Question <span className="required">*</span></label>
                            <textarea
                                id="query-question"
                                name="question"
                                value={formData.question}
                                onChange={handleChange}
                                placeholder="Ask me anything about AI, projects, collaboration..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-submit"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    Send Question
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="form-message success">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                Question sent successfully! I'll get back to you soon. 🙌
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="form-message error">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                                {errorMsg}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default QueryForm;
