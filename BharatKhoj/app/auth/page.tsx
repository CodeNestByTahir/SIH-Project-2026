'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Globe } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { signInWithEmail, signUpWithEmail, signInWithGoogle } from '@/lib/firebase/auth';

type AuthMode = 'login' | 'signup';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 0.875rem 0.8rem 2.6rem',
  background: '#ffffff',
  border: '1.5px solid #E8D5BC',
  borderRadius: '12px',
  fontSize: '0.875rem',
  color: '#1A0F08',
  fontFamily: 'var(--font-inter)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

export default function AuthPage() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode]             = useState<AuthMode>(
    searchParams.get('mode') === 'signup' ? 'signup' : 'login'
  );
  const [loading, setLoading]       = useState(false);
  const [showPass, setShowPass]     = useState(false);
  const [form, setForm]             = useState({
    name: '', email: '', password: '', confirmPassword: '', rememberMe: false,
  });

  const upd = (k: string, v: string | boolean) =>
    setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (mode === 'signup') {
      if (!form.name.trim())                        { toast.error('Please enter your name'); return; }
      if (form.password !== form.confirmPassword)   { toast.error('Passwords do not match'); return; }
      if (form.password.length < 6)                 { toast.error('Password must be at least 6 characters'); return; }
    }
    setLoading(true);
    try {
      if (mode === 'login') {
        await signInWithEmail(form.email, form.password);
        toast.success('Welcome back!');
      } else {
        await signUpWithEmail(form.email, form.password, form.name);
        toast.success('Welcome to BharatKhoj!');
      }
      router.push('/explore');
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      const msg =
        code === 'auth/user-not-found'       ? 'No account found with this email'  :
        code === 'auth/wrong-password'        ? 'Incorrect password'                :
        code === 'auth/email-already-in-use'  ? 'Email already registered'          :
        code === 'auth/invalid-email'         ? 'Invalid email address'             :
        code === 'auth/invalid-credential'    ? 'Invalid email or password'         :
                                               'Authentication failed. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success('Welcome to BharatKhoj!');
      router.push('/explore');
    } catch {
      toast.error('Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#FDF6EE' }}>

      {/* ====================================================
          LEFT PANEL — Cultural Background Image
          ==================================================== */}
      <div
        className="hidden lg:flex"
        style={{
          width: '50%',
          position: 'relative',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '3rem',

          /* ====================================================
             ADD AUTHENTICATION LEFT-SIDE BACKGROUND IMAGE HERE
             Replace the background below with your image:
             backgroundImage: "url('/images/auth-bg.jpg')"
             Recommended size: 800×1200px, Indian heritage photo
             (temple, palace, monument, art, cultural scene)

             Current fallback: CSS gradient
             ==================================================== */
          backgroundImage: 'linear-gradient(135deg, #1A0F08 0%, #3D1F0A 40%, #6B3316 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark gradient overlay — ensures text readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(26,15,8,0.92) 0%, rgba(26,15,8,0.4) 60%, transparent 100%)',
          zIndex: 1,
        }} />

        {/* Subtle pattern */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(224,177,125,0.07) 0%, transparent 60%)',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* ==========================================
              ADD / REPLACE WEBSITE LOGO HERE
              ========================================== */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2.5rem' }}>
            <div style={{
              width: '40px', height: '40px',
              background: 'linear-gradient(135deg, #AB5419, #E0B17D)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', fontWeight: '700', color: '#fff',
              fontFamily: 'var(--font-cinzel)',
            }}>B</div>
            <span style={{
              fontFamily: 'var(--font-cinzel)', fontSize: '1.4rem',
              fontWeight: '700', color: '#E0B17D', letterSpacing: '0.04em',
            }}>BharatKhoj</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700',
            color: '#FDF6EE', lineHeight: '1.3', marginBottom: '1rem',
          }}>
            Explore the Past.<br />
            <span style={{ color: '#E0B17D' }}>Experience the Legacy.</span>
          </h2>

          <p style={{ color: 'rgba(253,246,238,0.55)', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '320px', marginBottom: '2rem' }}>
            Discover India's civilizations, monuments, traditional toys, folk arts, and heritage games — curated for every curious explorer.
          </p>

          {/* Feature highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {[
              { emoji: '🗺️', text: 'Interactive India Map' },
              { emoji: '🏛️', text: '2.5D Monument Exploration' },
              { emoji: '🎮', text: 'Historical Games & Quizzes' },
              { emoji: '🪆', text: 'Traditional Toy Discovery' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1rem' }}>{item.emoji}</span>
                <span style={{ color: 'rgba(253,246,238,0.65)', fontSize: '0.83rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====================================================
          RIGHT PANEL — Auth Form
          ==================================================== */}
      <div style={{
        flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem 1.5rem',
        background: '#FDF6EE',
        overflowY: 'auto',
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

          {/* Mobile Logo */}
          <div className="lg:hidden" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.6rem', fontWeight: '700', color: '#AB5419' }}>
              BharatKhoj
            </span>
            <p style={{ color: '#928464', fontSize: '0.78rem', marginTop: '0.25rem' }}>
              Explore the Past. Experience the Legacy.
            </p>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cinzel)', fontSize: '1.5rem',
            fontWeight: '700', color: '#1A0F08', marginBottom: '0.25rem',
          }}>
            {mode === 'login' ? 'Welcome Back' : 'Start Your Journey'}
          </h1>
          <p style={{ color: '#928464', fontSize: '0.83rem', marginBottom: '2rem' }}>
            {mode === 'login'
              ? "Sign in to continue exploring India's heritage"
              : 'Create your free BharatKhoj account'}
          </p>

          {/* Mode Toggle */}
          <div style={{
            display: 'flex', background: '#FBF0E4',
            borderRadius: '12px', padding: '4px',
            marginBottom: '1.75rem', border: '1px solid #E8D5BC',
          }}>
            {(['login', 'signup'] as AuthMode[]).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '0.6rem', borderRadius: '9px',
                border: 'none', cursor: 'pointer',
                fontWeight: '600', fontSize: '0.83rem',
                fontFamily: 'var(--font-inter)',
                transition: 'all 0.2s ease',
                background: mode === m ? '#AB5419' : 'transparent',
                color: mode === m ? '#ffffff' : '#928464',
                boxShadow: mode === m ? '0 2px 8px rgba(171,84,25,0.25)' : 'none',
              }}>
                {m === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          {/* Animated Form */}
          <AnimatePresence mode="wait">
            <motion.form
              key={mode}
              initial={{ opacity: 0, x: mode === 'login' ? -16 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === 'login' ? 16 : -16 }}
              transition={{ duration: 0.22 }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
            >
              {/* Name field — signup only */}
              {mode === 'signup' && (
                <div style={{ position: 'relative' }}>
                  {/* REPLACE AUTHENTICATION ICON HERE — User icon */}
                  <User size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#928464', pointerEvents: 'none' }} />
                  <input
                    type="text" placeholder="Your Full Name" required
                    value={form.name} onChange={e => upd('name', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              )}

              {/* Email */}
              <div style={{ position: 'relative' }}>
                {/* REPLACE AUTHENTICATION ICON HERE — Mail icon */}
                <Mail size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#928464', pointerEvents: 'none' }} />
                <input
                  type="email" placeholder="Email Address" required
                  value={form.email} onChange={e => upd('email', e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Password */}
              <div style={{ position: 'relative' }}>
                {/* REPLACE AUTHENTICATION ICON HERE — Lock icon */}
                <Lock size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#928464', pointerEvents: 'none' }} />
                <input
                  type={showPass ? 'text' : 'password'} placeholder="Password" required
                  value={form.password} onChange={e => upd('password', e.target.value)}
                  style={{ ...inputStyle, paddingRight: '44px' }}
                />
                <button type="button" onClick={() => setShowPass(v => !v)} style={{
                  position: 'absolute', right: '12px', top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#928464', padding: 0, display: 'flex',
                }}>{showPass ? <EyeOff size={15} /> : <Eye size={15} />}</button>
              </div>

              {/* Confirm Password — signup only */}
              {mode === 'signup' && (
                <div style={{ position: 'relative' }}>
                  <Lock size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#928464', pointerEvents: 'none' }} />
                  <input
                    type="password" placeholder="Confirm Password" required
                    value={form.confirmPassword} onChange={e => upd('confirmPassword', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              )}

              {/* Remember / Forgot — login only */}
              {mode === 'login' && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.8rem', color: '#928464' }}>
                    <input type="checkbox" checked={form.rememberMe} onChange={e => upd('rememberMe', e.target.checked)} style={{ accentColor: '#AB5419' }} />
                    Remember me
                  </label>
                  <button type="button" style={{ background: 'none', border: 'none', color: '#AB5419', fontSize: '0.8rem', cursor: 'pointer', fontWeight: '500', fontFamily: 'var(--font-inter)' }}>
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={loading} style={{
                padding: '0.875rem', borderRadius: '12px',
                background: loading ? '#c4845a' : '#AB5419',
                color: '#fff', border: 'none',
                fontWeight: '600', fontSize: '0.9rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'background 0.2s ease',
                fontFamily: 'var(--font-inter)',
              }}>
                {loading
                  ? <div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                  : <>{mode === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={16} /></>}
              </button>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ flex: 1, height: '1px', background: '#E8D5BC' }} />
                <span style={{ fontSize: '0.72rem', color: '#928464' }}>or</span>
                <div style={{ flex: 1, height: '1px', background: '#E8D5BC' }} />
              </div>

              {/* Google Sign-in */}
              <button type="button" onClick={handleGoogle} disabled={loading} style={{
                padding: '0.875rem', borderRadius: '12px',
                background: '#ffffff', border: '1.5px solid #E8D5BC',
                color: '#1A0F08', fontWeight: '600', fontSize: '0.85rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                fontFamily: 'var(--font-inter)',
              }}>
                {/* REPLACE AUTHENTICATION ICON HERE — Google icon */}
                <Globe size={18} style={{ color: '#AB5419' }} />
                Continue with Google
              </button>
            </motion.form>
          </AnimatePresence>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: '#928464' }}>
            Explore India's heritage 🇮🇳 — Free forever
          </p>
        </div>
      </div>
    </div>
  );
}
