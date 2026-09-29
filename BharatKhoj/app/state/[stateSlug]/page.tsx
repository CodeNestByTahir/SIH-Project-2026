'use client';
import { use, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, Map, Package, Landmark,
  Users, Palette, Gamepad2, Clock, Star,
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { getStateBySlug } from '@/data/states';
import type { Toy, Game, Monument, Personality, FolkArt } from '@/types';

/* ============================================================
   2.5D VIEWER
   Supports four directional views: Front | Right | Back | Left
   ============================================================ */
type FaceName = 'front' | 'right' | 'back' | 'left';
const FACES: FaceName[] = ['front', 'right', 'back', 'left'];

function Viewer2D5({
  itemId,
  itemType,
  placeholderEmoji,
}: {
  itemId: string;
  itemType: 'toy' | 'monument';
  placeholderEmoji: string;
}) {
  const [face, setFace] = useState<FaceName>('front');

  const prev = () => {
    const i = FACES.indexOf(face);
    setFace(FACES[(i - 1 + 4) % 4]);
  };
  const next = () => {
    const i = FACES.indexOf(face);
    setFace(FACES[(i + 1) % 4]);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Viewer Box */}
      <div
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          background: '#FBF0E4',
          border: '1.5px solid #E8D5BC',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={face}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {/*
              ============================================================
              ADD IMAGE HERE — {itemType.toUpperCase()} {face.toUpperCase()} VIEW
              Replace the emoji below with an <img> tag:

              {face === 'front' && (
                <>
                  // TOY FRONT IMAGE  (or MONUMENT FRONT IMAGE)
                  <img
                    src={`/images/${itemType}s/${itemId}-front.jpg`}
                    alt={`${face} view`}
                    style={{ width:'100%', height:'100%', objectFit:'cover' }}
                  />
                </>
              )}
              {face === 'right' && (
                <>
                  // TOY RIGHT IMAGE  (or MONUMENT RIGHT IMAGE)
                  <img src={`/images/${itemType}s/${itemId}-right.jpg`} ... />
                </>
              )}
              {face === 'back' && (
                <>
                  // TOY BACK IMAGE  (or MONUMENT BACK IMAGE)
                  <img src={`/images/${itemType}s/${itemId}-back.jpg`} ... />
                </>
              )}
              {face === 'left' && (
                <>
                  // TOY LEFT IMAGE  (or MONUMENT LEFT IMAGE)
                  <img src={`/images/${itemType}s/${itemId}-left.jpg`} ... />
                </>
              )}
              ============================================================
            */}
            <span style={{ fontSize: '4.5rem', lineHeight: 1 }}>{placeholderEmoji}</span>
          </motion.div>
        </AnimatePresence>

        {/* Face label */}
        <div style={{
          position: 'absolute', bottom: '10px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(26,15,8,0.6)', color: '#FDF6EE',
          fontSize: '0.68rem', fontWeight: '600',
          padding: '2px 10px', borderRadius: '9999px',
          textTransform: 'capitalize', pointerEvents: 'none',
        }}>{face} view</div>

        {/* Arrow navigation */}
        <button onClick={prev} style={{
          position: 'absolute', left: '8px', top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(253,246,238,0.9)', border: '1px solid #E8D5BC',
          borderRadius: '50%', width: '30px', height: '30px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 2,
        }}>
          <ChevronLeft size={14} color="#AB5419" />
        </button>
        <button onClick={next} style={{
          position: 'absolute', right: '8px', top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(253,246,238,0.9)', border: '1px solid #E8D5BC',
          borderRadius: '50%', width: '30px', height: '30px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 2,
        }}>
          <ChevronRight size={14} color="#AB5419" />
        </button>
      </div>

      {/* Direction buttons */}
      <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {FACES.map(f => (
          <button key={f} onClick={() => setFace(f)} style={{
            padding: '0.22rem 0.7rem', borderRadius: '9999px',
            border: '1.5px solid',
            borderColor: face === f ? '#AB5419' : '#E8D5BC',
            background: face === f ? '#AB5419' : '#ffffff',
            color: face === f ? '#ffffff' : '#928464',
            fontSize: '0.68rem', fontWeight: '600',
            cursor: 'pointer', textTransform: 'capitalize',
            transition: 'all 0.2s ease', fontFamily: 'var(--font-inter)',
          }}>{f}</button>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   TOY CARD
   Each toy has its own independent div with 2.5D viewer
   ============================================================ */
const TOY_EMOJI: Record<string, string> = {
  traditional: '🪆', wooden: '🪵', clay: '🏺', cloth: '🎎', metal: '⚔️', bamboo: '🎋',
};

function ToyCard({ toy, onOrder }: { toy: Toy; onOrder: (t: Toy) => void }) {
  return (
    /* Each toy is its own independent component */
    <div
      className="historical-object"
      style={{
        background: '#ffffff', border: '1px solid #E8D5BC',
        borderRadius: '20px', overflow: 'hidden', padding: 0,
      }}
    >
      <div style={{ padding: '1rem 1rem 0' }}>
        <Viewer2D5
          itemId={toy.id}
          itemType="toy"
          placeholderEmoji={TOY_EMOJI[toy.category] ?? '🪆'}
        />
      </div>

      <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '0.95rem', color: '#1A0F08', lineHeight: 1.3 }}>
            {toy.name}
          </h3>
          {toy.badge && (
            <span style={{
              background: '#FBF0E4', color: '#AB5419',
              border: '1px solid #E8D5BC',
              fontSize: '0.62rem', fontWeight: '600',
              padding: '2px 8px', borderRadius: '9999px',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>{toy.badge}</span>
          )}
        </div>

        <p style={{ color: '#AB5419', fontSize: '0.7rem', fontWeight: '600', marginBottom: '0.5rem' }}>{toy.period}</p>
        <p style={{ color: '#928464', fontSize: '0.78rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>{toy.description}</p>

        {/* Materials */}
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: '700', color: '#AB5419', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Materials</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
            {toy.materials.map((m, i) => (
              <span key={i} style={{
                background: '#FBF0E4', border: '1px solid #E8D5BC',
                color: '#928464', fontSize: '0.65rem', fontWeight: '500',
                padding: '2px 8px', borderRadius: '9999px',
              }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {toy.price.physical && (
            <span style={{ fontWeight: '800', fontSize: '1rem', color: '#1A0F08' }}>
              ₹{toy.price.physical}
            </span>
          )}
          <button
            onClick={() => onOrder(toy)}
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '9999px',
              background: '#AB5419', color: '#ffffff',
              border: 'none', fontSize: '0.75rem', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'var(--font-inter)',
              transition: 'background 0.2s ease',
            }}
          >Get Toy →</button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MONUMENT CARD
   Each monument has its own independent div with 2.5D viewer
   ============================================================ */
function MonumentCard({ monument }: { monument: Monument }) {
  return (
    /* Each monument is its own independent component */
    <div
      className="historical-object"
      style={{
        background: '#ffffff', border: '1px solid #E8D5BC',
        borderRadius: '20px', overflow: 'hidden', padding: 0,
      }}
    >
      <div style={{ padding: '1rem 1rem 0' }}>
        <Viewer2D5 itemId={monument.id} itemType="monument" placeholderEmoji="🏛️" />
      </div>
      <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
        <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '0.95rem', color: '#1A0F08', marginBottom: '0.3rem' }}>
          {monument.name}
        </h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', color: '#AB5419', fontWeight: '600' }}>📍 {monument.location}</span>
          <span style={{ fontSize: '0.7rem', color: '#928464' }}>⏳ {monument.period}</span>
        </div>
        <p style={{ color: '#928464', fontSize: '0.78rem', lineHeight: '1.65' }}>{monument.description}</p>
      </div>
    </div>
  );
}

/* ============================================================
   PERSONALITY CARD
   Each personality has its own independent card
   ============================================================ */
function PersonalityCard({ personality }: { personality: Personality }) {
  return (
    /* Each personality is its own independent card */
    <div
      className="personality-card"
      style={{ background: '#ffffff', border: '1px solid #E8D5BC', borderRadius: '20px', overflow: 'hidden' }}
    >
      {/* Image area */}
      <div style={{
        height: '180px',
        background: 'linear-gradient(135deg, #FBF0E4 0%, #F5E6CC 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/*
          ============================================================
          ADD / REPLACE PERSONALITY IMAGE HERE
          Replace the emoji below with:
          <img
            src={`/images/personalities/${personality.id}.jpg`}
            alt={personality.name}
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}
          />
          ============================================================
        */}
        {/* REPLACE OBJECT ICON HERE */}
        <span style={{ fontSize: '4rem' }}>👤</span>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(26,15,8,0.55) 0%, transparent 55%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10px', left: '14px',
          background: 'linear-gradient(135deg, #AB5419, #E0B17D)',
          padding: '2px 10px', borderRadius: '9999px',
          fontSize: '0.62rem', fontWeight: '700', color: '#fff',
        }}>{personality.period}</div>
      </div>

      <div style={{ padding: '1.25rem' }}>
        <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '0.95rem', color: '#1A0F08', marginBottom: '0.2rem', lineHeight: 1.3 }}>
          {personality.name}
        </h3>
        <p style={{ color: '#AB5419', fontSize: '0.72rem', fontWeight: '600', marginBottom: '0.6rem' }}>{personality.role}</p>
        <p style={{ color: '#928464', fontSize: '0.78rem', lineHeight: '1.65' }}>{personality.description}</p>
      </div>
    </div>
  );
}

/* ============================================================
   ART & CULTURE CARD
   Each art item is its own independent div
   ============================================================ */
const ART_ICONS = ['🎨', '🎭', '🎶', '💃', '🖼️', '🧵', '🪘', '✨'];

function ArtCard({ art, index }: { art: FolkArt; index: number }) {
  return (
    /* Each art/culture item is its own independent div */
    <div
      className="bharat-card"
      style={{ background: '#ffffff', border: '1px solid #E8D5BC', borderRadius: '16px', overflow: 'hidden' }}
    >
      {/* Image area */}
      <div style={{
        height: '150px',
        background: 'linear-gradient(135deg, #FBF0E4 0%, #F0E0C8 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/*
          ============================================================
          ADD / REPLACE ART & CULTURE IMAGE HERE
          Replace with:
          <img
            src={`/images/art/${art.name.toLowerCase().replace(/ /g, '-')}.jpg`}
            alt={art.name}
            style={{ width:'100%', height:'100%', objectFit:'cover' }}
          />
          ============================================================
        */}
        {/* REPLACE OBJECT ICON HERE */}
        <span style={{ fontSize: '3.5rem' }}>{ART_ICONS[index % ART_ICONS.length]}</span>
      </div>
      <div style={{ padding: '1rem 1.25rem' }}>
        <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '0.9rem', color: '#1A0F08', marginBottom: '0.35rem' }}>
          {art.name}
        </h3>
        <p style={{ color: '#928464', fontSize: '0.76rem', lineHeight: '1.65' }}>{art.description}</p>
      </div>
    </div>
  );
}

/* ============================================================
   GAME CARD
   Each game is its own independent game-card div
   ============================================================ */
const GAME_EMOJI: Record<string, string> = {
  quiz: '❓', memory: '🧠', puzzle: '🧩', timeline: '📅', matching: '🎯', word: '📝',
};
const DIFF_COLOR: Record<string, string> = {
  easy: '#16a34a', medium: '#d97706', hard: '#dc2626',
};

function GameCard({ game, onClick }: { game: Game; onClick: () => void }) {
  return (
    /* Each game is its own independent game-card div */
    <div className="game-card" onClick={onClick} style={{
      background: '#1A0F08', border: '1px solid rgba(224,177,125,0.15)',
      borderRadius: '20px', padding: '1.5rem', cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2.5rem' }}>{GAME_EMOJI[game.type] ?? '🎮'}</span>
        <span style={{
          fontSize: '0.65rem', fontWeight: '600',
          padding: '3px 10px', borderRadius: '9999px', textTransform: 'capitalize',
          background: `${DIFF_COLOR[game.difficulty]}18`,
          color: DIFF_COLOR[game.difficulty],
          border: `1px solid ${DIFF_COLOR[game.difficulty]}35`,
        }}>{game.difficulty}</span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '0.95rem', color: '#FDF6EE', marginBottom: '0.45rem', lineHeight: 1.3 }}>
        {game.name}
      </h3>
      <p style={{ color: 'rgba(253,246,238,0.5)', fontSize: '0.76rem', lineHeight: '1.6', marginBottom: '1rem' }}>
        {game.description}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Clock size={12} color="rgba(253,246,238,0.35)" />
          <span style={{ fontSize: '0.7rem', color: 'rgba(253,246,238,0.35)' }}>
            {Math.floor(game.duration / 60)}:{String(game.duration % 60).padStart(2, '0')} min
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Star size={12} color="#E0B17D" />
          <span style={{ fontSize: '0.7rem', color: '#E0B17D', fontWeight: '600' }}>+{game.points} pts</span>
        </div>
      </div>

      <button style={{
        width: '100%', padding: '0.6rem',
        background: 'rgba(171,84,25,0.18)',
        border: '1px solid rgba(171,84,25,0.38)',
        borderRadius: '10px', color: '#E0B17D',
        fontSize: '0.76rem', fontWeight: '600',
        cursor: 'pointer', fontFamily: 'var(--font-inter)',
        transition: 'background 0.2s ease',
      }}>Play Now →</button>
    </div>
  );
}

/* ============================================================
   ORDER MODAL
   ============================================================ */
function OrderModal({ toy, onClose }: { toy: Toy; onClose: () => void }) {
  const [type, setType]       = useState<'physical' | '3d_print'>('physical');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '', pincode: '', address: '' });
  const upd = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(26,15,8,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: '#FDF6EE', borderRadius: '24px',
          padding: '2rem', maxWidth: '440px', width: '100%',
          maxHeight: '90vh', overflowY: 'auto', border: '1px solid #E8D5BC',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.2rem', color: '#1A0F08', marginBottom: '0.5rem' }}>
              Order Submitted!
            </h3>
            <p style={{ color: '#928464', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Your request for <strong>{toy.name}</strong> has been placed. Our artisan partners will contact you within 48 hours.
            </p>
            <button onClick={onClose} style={{
              padding: '0.7rem 2rem', borderRadius: '9999px',
              background: '#AB5419', color: '#fff', border: 'none',
              fontWeight: '600', cursor: 'pointer', fontFamily: 'var(--font-inter)',
            }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.05rem', color: '#1A0F08' }}>
                Get {toy.name}
              </h3>
              <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#928464', fontSize: '1.4rem', lineHeight: 1, padding: 0 }}>×</button>
            </div>

            {/* Type selector */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {(['physical', '3d_print'] as const).filter(t => t === 'physical' || toy.price.printed3D).map(t => (
                <button key={t} onClick={() => setType(t)} style={{
                  flex: 1, padding: '0.6rem', borderRadius: '10px',
                  border: '1.5px solid',
                  borderColor: type === t ? '#AB5419' : '#E8D5BC',
                  background: type === t ? '#AB5419' : '#fff',
                  color: type === t ? '#fff' : '#928464',
                  fontSize: '0.76rem', fontWeight: '600', cursor: 'pointer',
                  fontFamily: 'var(--font-inter)',
                }}>
                  {t === 'physical' ? `Physical ₹${toy.price.physical}` : `3D Print ₹${toy.price.printed3D}`}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { p: 'Full Name', k: 'name', t: 'text' },
                { p: 'Phone Number', k: 'phone', t: 'tel' },
                { p: 'City', k: 'city', t: 'text' },
                { p: 'PIN Code', k: 'pincode', t: 'text' },
              ].map(f => (
                <input key={f.k} type={f.t} placeholder={f.p} required
                  value={(form as Record<string, string>)[f.k]}
                  onChange={e => upd(f.k, e.target.value)}
                  style={{
                    padding: '0.75rem 1rem', border: '1.5px solid #E8D5BC',
                    borderRadius: '10px', fontSize: '0.85rem', outline: 'none',
                    fontFamily: 'var(--font-inter)', background: '#fff',
                  }}
                />
              ))}
              <textarea placeholder="Delivery Address" required value={form.address}
                onChange={e => upd('address', e.target.value)}
                style={{
                  padding: '0.75rem 1rem', border: '1.5px solid #E8D5BC',
                  borderRadius: '10px', fontSize: '0.85rem', outline: 'none',
                  resize: 'none', height: '80px',
                  fontFamily: 'var(--font-inter)', background: '#fff',
                }}
              />
              <button type="submit" disabled={loading} style={{
                padding: '0.875rem', borderRadius: '12px',
                background: loading ? '#c4845a' : '#AB5419',
                color: '#fff', border: 'none', fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-inter)',
              }}>
                {loading ? 'Placing Order…' : 'Place Order →'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   TABS CONFIG
   ============================================================ */
const TABS = [
  { id: 'overview',      label: 'Overview',     icon: Map       },
  { id: 'toys',          label: 'Toys',          icon: Package   },
  { id: 'monuments',     label: 'Monuments',     icon: Landmark  },
  { id: 'personalities', label: 'Personalities', icon: Users     },
  { id: 'culture',       label: 'Art & Culture', icon: Palette   },
  { id: 'games',         label: 'Games',         icon: Gamepad2  },
] as const;
type TabId = typeof TABS[number]['id'];

/* ============================================================
   MAIN STATE PAGE
   ============================================================ */
export default function StatePage({ params }: { params: Promise<{ stateSlug: string }> }) {
  const { stateSlug } = use(params);
  const router        = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [orderToy, setOrderToy]   = useState<Toy | null>(null);

  const state = getStateBySlug(stateSlug);

  /* 404 */
  if (!state) {
    return (
      <div style={{ minHeight: '100vh', background: '#FDF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</div>
          <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.5rem' }}>
            State Not Found
          </h2>
          <p style={{ color: '#928464', marginBottom: '1.5rem' }}>
            This state isn't in our journey yet — it's coming soon!
          </p>
          <Link href="/explore" style={{
            padding: '0.7rem 1.75rem', background: '#AB5419', color: '#fff',
            borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', fontSize: '0.875rem',
          }}>← Back to Map</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FDF6EE' }}>
      <Navbar />

      {/* ============================================================
          STATE HERO SECTION
          ============================================================ */}
      <section style={{
        position: 'relative', minHeight: '78vh',
        display: 'flex', alignItems: 'center',
        background: '#1A0F08', overflow: 'hidden',
      }}>
        {/*
          ============================================================
          ADD / REPLACE STATE BACKGROUND IMAGE HERE
          Replace the div below with a background image:

          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: "url('/images/states/{stateSlug}-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.38)',
          }} />

          Recommended: 1920×1080px high quality photo of the state's
          famous monument, landscape, or cultural scene.
          ============================================================
        */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `linear-gradient(135deg, ${state.accentColor}35 0%, #2C1A0E 55%, #1A0F08 100%)`,
        }} />

        {/* Overlay — solid gradient ensures text readability */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to right, rgba(26,15,8,0.92) 0%, rgba(26,15,8,0.5) 65%, transparent 100%)',
        }} />

        {/* Hero content */}
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '1280px', margin: '0 auto',
          padding: '7rem 1.5rem 4rem', width: '100%',
        }}>
          <button
            onClick={() => router.back()}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(253,246,238,0.08)', border: '1px solid rgba(253,246,238,0.18)',
              color: 'rgba(253,246,238,0.65)', borderRadius: '9999px',
              padding: '0.4rem 1rem', fontSize: '0.75rem', fontWeight: '500',
              cursor: 'pointer', marginBottom: '2rem', fontFamily: 'var(--font-inter)',
            }}
          >
            <ArrowLeft size={14} /> Back to Map
          </button>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#E0B17D', marginBottom: '0.65rem' }}
          >
            {state.region} • {state.capital}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-cinzel)', fontWeight: '900',
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              color: '#FDF6EE', lineHeight: 1.05, marginBottom: '0.75rem',
            }}
          >{state.name}</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ color: '#E0B17D', fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.75rem' }}
          >{state.tagline}</motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ color: 'rgba(253,246,238,0.6)', fontSize: '0.875rem', maxWidth: '560px', lineHeight: '1.75', marginBottom: '2rem' }}
          >{state.description}</motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}
          >
            {[
              { label: 'Toys', value: state.toys.length },
              { label: 'Games', value: state.games.length },
              { label: 'Monuments', value: state.monuments.length },
              { label: 'Personalities', value: state.personalities.length },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(253,246,238,0.07)',
                border: '1px solid rgba(253,246,238,0.13)',
                borderRadius: '12px', padding: '0.55rem 1rem', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '800', fontSize: '1.4rem', color: '#E0B17D' }}>{s.value}</div>
                <div style={{ fontSize: '0.62rem', color: 'rgba(253,246,238,0.45)', fontWeight: '500' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          STICKY TABS
          SOLID background — no scroll-through bleed
          ============================================================ */}
      <div style={{
        position: 'sticky', top: '68px', zIndex: 50,
        background: '#FDF6EE',       /* SOLID — no transparency */
        borderBottom: '1px solid #E8D5BC',
        boxShadow: '0 2px 12px rgba(171,84,25,0.06)',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', gap: '0.25rem', overflowX: 'auto',
        }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '1rem 1.1rem',
                background: 'none', border: 'none',
                borderBottom: activeTab === tab.id ? '2.5px solid #AB5419' : '2.5px solid transparent',
                color: activeTab === tab.id ? '#AB5419' : '#928464',
                fontSize: '0.8rem', fontWeight: '600',
                cursor: 'pointer', whiteSpace: 'nowrap',
                fontFamily: 'var(--font-inter)',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
            >
              <tab.icon size={14} />{tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================
          TAB CONTENT
          ============================================================ */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <AnimatePresence mode="wait">

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              {/* History + Culture */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div className="historical-object">
                  {/* REPLACE OBJECT ICON HERE */}
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>📜</div>
                  <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.15rem', color: '#1A0F08', marginBottom: '0.75rem' }}>History</h2>
                  <p style={{ color: '#928464', lineHeight: '1.8', fontSize: '0.85rem' }}>{state.history}</p>
                </div>
                <div className="historical-object">
                  {/* REPLACE OBJECT ICON HERE */}
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🎨</div>
                  <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.15rem', color: '#1A0F08', marginBottom: '0.75rem' }}>Culture</h2>
                  <p style={{ color: '#928464', lineHeight: '1.8', fontSize: '0.85rem' }}>{state.culture}</p>
                </div>
              </div>

              {/* Traditions */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.35rem', color: '#1A0F08', marginBottom: '1.25rem' }}>Traditions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
                  {state.traditions.map((t, i) => (
                    /* Each tradition is its own independent div */
                    <div key={i} className="historical-object">
                      {/* REPLACE OBJECT ICON HERE */}
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🙏</div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1A0F08', marginBottom: '0.35rem' }}>{t.name}</h3>
                      <p style={{ color: '#928464', fontSize: '0.76rem', lineHeight: '1.65' }}>{t.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Festivals */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.35rem', color: '#1A0F08', marginBottom: '1.25rem' }}>Festivals</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
                  {state.festivals.map((f, i) => (
                    /* Each festival is its own independent div */
                    <div key={i} className="historical-object">
                      {/* REPLACE OBJECT ICON HERE */}
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉</div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1A0F08', marginBottom: '0.2rem' }}>{f.name}</h3>
                      <p style={{ color: '#AB5419', fontSize: '0.7rem', fontWeight: '600', marginBottom: '0.35rem' }}>{f.month}</p>
                      <p style={{ color: '#928464', fontSize: '0.76rem', lineHeight: '1.65' }}>{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.35rem', color: '#1A0F08', marginBottom: '1.25rem' }}>Traditional Food</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
                  {state.food.map((f, i) => (
                    /* Each food item is its own independent div */
                    <div key={i} className="historical-object">
                      {/* REPLACE OBJECT ICON HERE */}
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🍽️</div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1A0F08', marginBottom: '0.35rem' }}>{f.name}</h3>
                      <p style={{ color: '#928464', fontSize: '0.76rem', lineHeight: '1.65' }}>{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TOYS TAB */}
          {activeTab === 'toys' && (
            <motion.div key="toys" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.25rem' }}>Traditional Toys</h2>
                <p style={{ color: '#928464', fontSize: '0.84rem' }}>Handcrafted cultural objects from {state.name}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {state.toys.map(toy => (
                  <ToyCard key={toy.id} toy={toy} onOrder={setOrderToy} />
                ))}
              </div>
            </motion.div>
          )}

          {/* MONUMENTS TAB */}
          {activeTab === 'monuments' && (
            <motion.div key="monuments" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.25rem' }}>Famous Monuments</h2>
                <p style={{ color: '#928464', fontSize: '0.84rem' }}>Architectural wonders of {state.name}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {state.monuments.map(m => (
                  <MonumentCard key={m.id} monument={m} />
                ))}
              </div>
            </motion.div>
          )}

          {/* PERSONALITIES TAB */}
          {activeTab === 'personalities' && (
            <motion.div key="personalities" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.25rem' }}>Historical Personalities</h2>
                <p style={{ color: '#928464', fontSize: '0.84rem' }}>Icons who shaped the legacy of {state.name}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {state.personalities.map(p => (
                  <PersonalityCard key={p.id} personality={p} />
                ))}
              </div>
            </motion.div>
          )}

          {/* ART & CULTURE TAB */}
          {activeTab === 'culture' && (
            <motion.div key="culture" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.25rem' }}>Art & Culture</h2>
                <p style={{ color: '#928464', fontSize: '0.84rem' }}>Folk arts and cultural expressions of {state.name}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
                {state.folkArts.map((art, i) => (
                  <ArtCard key={i} art={art} index={i} />
                ))}
              </div>

              {/* Clothing */}
              <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.25rem', color: '#1A0F08', marginBottom: '1rem' }}>Traditional Clothing</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                {state.clothing.map((c, i) => (
                  /* Each clothing item is its own independent div */
                  <div key={i} className="historical-object">
                    {/* REPLACE OBJECT ICON HERE */}
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>👘</div>
                    <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1A0F08', marginBottom: '0.2rem' }}>{c.name}</h3>
                    <p style={{ color: '#AB5419', fontSize: '0.68rem', fontWeight: '600', textTransform: 'capitalize', marginBottom: '0.35rem' }}>{c.gender}</p>
                    <p style={{ color: '#928464', fontSize: '0.76rem', lineHeight: '1.65' }}>{c.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* GAMES TAB */}
          {activeTab === 'games' && (
            <motion.div key="games" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.25rem' }}>Play & Learn</h2>
                <p style={{ color: '#928464', fontSize: '0.84rem' }}>Test your knowledge of {state.name}'s heritage</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {state.games.map(g => (
                  <GameCard key={g.id} game={g} onClick={() => router.push(`/game/${g.id}`)} />
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Order Modal */}
      <AnimatePresence>
        {orderToy && <OrderModal toy={orderToy} onClose={() => setOrderToy(null)} />}
      </AnimatePresence>
    </div>
  );
}
