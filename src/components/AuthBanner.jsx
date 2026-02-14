import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthBanner = ({ user, setUser }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check for existing session on mount
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUser(session.user);
                logVisitor(session.user);
            }
        };
        getSession();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === 'SIGNED_IN' && session?.user) {
                    setUser(session.user);
                    logVisitor(session.user);
                } else if (event === 'SIGNED_OUT') {
                    setUser(null);
                }
            }
        );

        return () => subscription?.unsubscribe();
    }, []);

    const logVisitor = async (userData) => {
        try {
            await supabase.from('visitors').insert([
                {
                    gmail: userData.email,
                    display_name: userData.user_metadata?.full_name || userData.email,
                    avatar_url: userData.user_metadata?.avatar_url || null,
                }
            ]);
        } catch (err) {
            console.error('Error logging visitor:', err);
        }
    };

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                }
            });
            if (error) throw error;
        } catch (err) {
            console.error('Error signing in:', err);
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <div className="auth-banner">
            {user ? (
                <div className="auth-user">
                    {user.user_metadata?.avatar_url && (
                        <img
                            src={user.user_metadata.avatar_url}
                            alt="avatar"
                            className="auth-avatar"
                        />
                    )}
                    <span className="auth-name">
                        {user.user_metadata?.full_name || user.email}
                    </span>
                    <button onClick={signOut} className="auth-btn auth-signout">
                        Sign Out
                    </button>
                </div>
            ) : (
                <button
                    onClick={signInWithGoogle}
                    className="auth-btn auth-signin"
                    disabled={loading}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    {loading ? 'Signing in...' : 'Sign in with Google'}
                </button>
            )}
        </div>
    );
};

export default AuthBanner;
