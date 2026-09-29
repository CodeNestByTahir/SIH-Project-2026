'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [skipCountdown, setSkipCountdown] = useState(5);
  const [canSkip, setCanSkip]             = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [exiting, setExiting]             = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 5-second countdown before skip is enabled
  useEffect(() => {
    const interval = setInterval(() => {
      setSkipCountdown(prev => {
        if (prev <= 1) { clearInterval(interval); setCanSkip(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    setVideoProgress((vid.currentTime / vid.duration) * 100);
  }, []);

  const handleExit = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    setTimeout(onComplete, 700);
  }, [exiting, onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: '#1A0F08',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* ============================================================
              ADD INTRO VIDEO HERE
              Replace the <source> src with your video file path.
              Supports: MP4 (H.264), WebM
              Minimum duration: 2.5 minutes
              Recommended resolution: 1920×1080
              Example:
                <source src="/videos/bharatkhoj-intro.mp4" type="video/mp4" />

              To add a WebM version for better browser support:
                <source src="/videos/bharatkhoj-intro.webm" type="video/webm" />
              ============================================================ */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleExit}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              opacity: 0.5,
            }}
          >
            {/* ADD INTRO VIDEO HERE — replace src below */}
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(26,15,8,0.5) 0%, rgba(26,15,8,0.3) 50%, rgba(26,15,8,0.7) 100%)',
            zIndex: 1,
          }} />

          {/* Decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', width: '400px', height: '400px',
              borderRadius: '50%',
              border: '1px solid rgba(224,177,125,0.08)',
              zIndex: 1,
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', width: '280px', height: '280px',
              borderRadius: '50%',
              border: '1px solid rgba(224,177,125,0.06)',
              zIndex: 1,
            }}
          />

          {/* Centered Content */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>

            {/* ==========================================
                ADD / REPLACE WEBSITE LOGO HERE
                Replace the markup below with your logo:
                <img
                  src="/logo-white.svg"
                  alt="BharatKhoj"
                  style={{ height: '60px', marginBottom: '2rem' }}
                />
                ========================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '54px', height: '54px',
                  background: 'linear-gradient(135deg, #AB5419, #E0B17D)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', fontWeight: '700', color: '#fff',
                  fontFamily: 'var(--font-cinzel)',
                  boxShadow: '0 8px 24px rgba(171,84,25,0.4)',
                }}>B</div>
                <span style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  fontWeight: '700',
                  color: '#E0B17D',
                  letterSpacing: '0.05em',
                }}>BharatKhoj</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              style={{
                color: 'rgba(253,246,238,0.65)',
                fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: '400',
              }}
            >
              Explore the Past. Experience the Legacy.
            </motion.p>
          </div>

          {/* Skip Button — top right */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={() => canSkip && handleExit()}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              zIndex: 3,
              background: canSkip ? 'rgba(171,84,25,0.85)' : 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              border: canSkip ? '1px solid rgba(171,84,25,0.5)' : '1px solid rgba(255,255,255,0.15)',
              borderRadius: '9999px',
              padding: '0.5rem 1.25rem',
              fontSize: '0.82rem', fontWeight: '600',
              cursor: canSkip ? 'pointer' : 'default',
              transition: 'all 0.4s ease',
              fontFamily: 'var(--font-inter)',
            }}
          >
            {canSkip ? 'Skip →' : `Skip in ${skipCountdown}s`}
          </motion.button>

          {/* Progress Bar — bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '3px', background: 'rgba(255,255,255,0.08)', zIndex: 3,
          }}>
            <motion.div
              animate={{ width: `${videoProgress || Math.max(0, ((5 - skipCountdown) / 5) * 15)}%` }}
              transition={{ duration: 0.3 }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #AB5419, #E0B17D)',
                borderRadius: '0 2px 2px 0',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
