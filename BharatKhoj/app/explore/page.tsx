'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import IndiaMap from '@/components/map/IndiaMap';
import { MapPin, Compass, Gamepad2, Package } from 'lucide-react';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const ACTIVE_STATES = [
  {
    slug: 'maharashtra',
    name: 'Maharashtra',
    emoji: '🏯',
    tagline: 'Land of Warriors, Wisdom & Wonders',
    accent: '#AB5419',
    facts: ['Ajanta & Ellora Caves', 'Maratha Empire', 'Warli Art'],
  },
  {
    slug: 'bihar',
    name: 'Bihar',
    emoji: '🕌',
    tagline: 'Cradle of Civilization & Spiritual Wisdom',
    accent: '#2D6A4F',
    facts: ['Nalanda University', 'Maurya Empire', 'Madhubani Art'],
  },
  {
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    emoji: '🛕',
    tagline: 'Land of Temples, Classical Arts & Dravidian Heritage',
    accent: '#6B3FA0',
    facts: ['Chola Dynasty', 'Bharatanatyam', 'Kanjivaram Silk'],
  },
];

const COMING_SOON_STATES = [
  'Rajasthan',
  'Gujarat',
  'Uttar Pradesh',
  'West Bengal',
  'Karnataka',
  'Kerala',
  'Andhra Pradesh',
  'Madhya Pradesh',
  'Odisha',
  'Assam',
  'Punjab',
  'Goa',
  'Himachal Pradesh',
  'Uttarakhand',
  'Jharkhand',
];

const STATS = [
  { icon: MapPin,    label: 'States & UTs',     value: '28+' },
  { icon: Compass,   label: 'Years of History',  value: '5000+' },
  { icon: Package,   label: 'Cultural Objects',  value: '100+' },
  { icon: Gamepad2,  label: 'Games & Quizzes',   value: '30+' },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ExplorePage() {
  const router = useRouter();

  const handleStateSelect = (slug: string) => {
    router.push(`/state/${slug}`);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FDF6EE' }}>
      <Navbar dark={false} />

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        style={{ paddingTop: '8rem', paddingBottom: '4rem', background: '#FDF6EE' }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            textAlign: 'center',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#AB5419',
              marginBottom: '1rem',
            }}
          >
            🇮🇳 Begin Your Cultural Journey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#1A0F08',
              lineHeight: '1.15',
              marginBottom: '1rem',
            }}
          >
            Discover{' '}
            <span style={{ color: '#AB5419' }}>India&apos;s</span> Living Heritage
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#928464',
              fontSize: '1rem',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.7',
            }}
          >
            Select a state on the map to explore its history, culture, monuments,
            traditional toys, and heritage games.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #E8D5BC',
                  borderRadius: '14px',
                  padding: '1rem 1.5rem',
                  textAlign: 'center',
                  minWidth: '110px',
                }}
              >
                <s.icon size={20} style={{ color: '#AB5419', marginBottom: '0.4rem' }} />
                <div
                  style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontWeight: '800',
                    fontSize: '1.4rem',
                    color: '#1A0F08',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#928464', fontWeight: '500' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Map Section                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="states"
        style={{ padding: '2rem 1.5rem 5rem', background: '#FBF0E4' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontWeight: '700',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#1A0F08',
                marginBottom: '0.5rem',
              }}
            >
              Interactive Map of India
            </h2>
            <p style={{ color: '#928464', fontSize: '0.875rem' }}>
              Click on a highlighted state to begin exploring
            </p>

            {/* Map Legend */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: '#928464',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#AB5419',
                    border: '2px solid #fff',
                    boxShadow: '0 0 6px rgba(171,84,25,0.5)',
                  }}
                />
                Available
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: '#928464',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#D4BFA0',
                    border: '1.5px solid #fff',
                  }}
                />
                Coming Soon
              </div>
            </div>
          </motion.div>

          <IndiaMap onStateSelect={handleStateSelect} />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Featured States                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ padding: '5rem 1.5rem', background: '#FDF6EE' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: '600',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#AB5419',
                marginBottom: '0.75rem',
              }}
            >
              Available Now
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontWeight: '700',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#1A0F08',
              }}
            >
              Explore These States
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {ACTIVE_STATES.map((state, i) => (
              <motion.div
                key={state.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 50px rgba(171,84,25,0.15)',
                }}
                onClick={() => router.push(`/state/${state.slug}`)}
                style={{
                  background: '#ffffff',
                  border: `1.5px solid ${state.accent}25`,
                  borderRadius: '20px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {state.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    color: '#1A0F08',
                    marginBottom: '0.4rem',
                  }}
                >
                  {state.name}
                </h3>
                <p
                  style={{
                    color: '#928464',
                    fontSize: '0.82rem',
                    marginBottom: '1.25rem',
                    lineHeight: '1.5',
                  }}
                >
                  {state.tagline}
                </p>

                {/* Fact bullets */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {state.facts.map((f, j) => (
                    <div
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.78rem',
                        color: '#928464',
                      }}
                    >
                      <div
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: state.accent,
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '9999px',
                    background: state.accent,
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  Explore {state.name} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Coming Soon Grid                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ padding: '4rem 1.5rem 5rem', background: '#FBF0E4' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#928464',
              marginBottom: '0.75rem',
            }}
          >
            Coming Soon
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontWeight: '700',
              fontSize: '1.5rem',
              color: '#1A0F08',
              marginBottom: '2rem',
            }}
          >
            More States on the Way
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {COMING_SOON_STATES.map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #E8D5BC',
                  borderRadius: '9999px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.8rem',
                  color: '#928464',
                  fontWeight: '500',
                }}
              >
                {state}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
