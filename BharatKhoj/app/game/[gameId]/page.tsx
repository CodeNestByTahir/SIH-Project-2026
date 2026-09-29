'use client';
import { use, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Star, RotateCcw, Play, Check, X } from 'lucide-react';
import { states } from '@/data/states';
import type { Game, QuizQuestion } from '@/types';

// ============================================================
// QUIZ GAME
// ============================================================
function QuizGame({ game, onComplete }: { game: Game; onComplete: (score: number) => void }) {
  const questions = game.data as QuizQuestion[];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(game.duration);

  useEffect(() => {
    if (timeLeft <= 0) { onComplete(score); return; }
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === questions[current].correctAnswer;
    const newScore = correct ? score + 10 : score;
    if (correct) setScore(newScore);
    setTimeout(() => {
      if (current + 1 >= questions.length) { onComplete(newScore); return; }
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }, 1500);
  };

  const q = questions[current];
  const progress = (current / questions.length) * 100;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '12px', padding: '0.6rem 1rem' }}>
          <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#AB5419' }}>{score}</span>
          <span style={{ color: '#928464', fontSize: '0.75rem', marginLeft: '4px' }}>pts</span>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '12px', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={14} color={timeLeft < 30 ? '#dc2626' : '#928464'} />
          <span style={{ fontFamily: 'monospace', fontWeight: '700', color: timeLeft < 30 ? '#dc2626' : '#1A0F08', fontSize: '0.9rem' }}>
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </span>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '12px', padding: '0.6rem 1rem' }}>
          <span style={{ color: '#928464', fontSize: '0.8rem' }}>{current + 1} / {questions.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: '4px', background: '#E8D5BC', borderRadius: '9999px', marginBottom: '2rem', overflow: 'hidden' }}>
        <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #AB5419, #E0B17D)', borderRadius: '9999px' }} />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ marginBottom: '1.5rem' }}>
          <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '20px', padding: '1.75rem' }}>
            <p style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.05rem', color: '#1A0F08', lineHeight: '1.5' }}>{q.question}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {q.options.map((opt, i) => {
          let bg = '#ffffff', borderColor = '#E8D5BC', color = '#1A0F08';
          if (answered) {
            if (i === q.correctAnswer) { bg = '#f0fdf4'; borderColor = '#16a34a'; color = '#15803d'; }
            else if (i === selected) { bg = '#fef2f2'; borderColor = '#dc2626'; color = '#b91c1c'; }
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
              style={{
                width: '100%', padding: '1rem 1.25rem',
                background: bg, border: `1.5px solid ${borderColor}`,
                borderRadius: '14px', textAlign: 'left',
                color, fontSize: '0.875rem', fontWeight: '500',
                cursor: answered ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                fontFamily: 'var(--font-inter)',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: answered && i === q.correctAnswer ? '#16a34a' : answered && i === selected ? '#dc2626' : '#FBF0E4',
                border: `1.5px solid ${answered && i === q.correctAnswer ? '#16a34a' : answered && i === selected ? '#dc2626' : '#E8D5BC'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem', fontWeight: '700', flexShrink: 0,
                color: answered && (i === q.correctAnswer || i === selected) ? '#fff' : '#928464',
              }}>
                {answered && i === q.correctAnswer ? <Check size={12} /> : answered && i === selected ? <X size={12} /> : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {answered && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: '1rem', padding: '0.875rem 1.25rem', borderRadius: '12px',
              background: selected === q.correctAnswer ? '#f0fdf4' : '#fef2f2',
              border: `1px solid ${selected === q.correctAnswer ? '#86efac' : '#fca5a5'}`,
              fontSize: '0.82rem', color: '#1A0F08', lineHeight: '1.6',
            }}
          >💡 {q.explanation}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// MEMORY GAME
// ============================================================
function MemoryGame({ game, onComplete }: { game: Game; onComplete: (score: number) => void }) {
  const allCards = game.data as { id: string; image: string; label: string; matchId: string }[];
  const [cards] = useState(() => [...allCards].sort(() => Math.random() - 0.5));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(game.duration);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) { setTimeout(() => onComplete(score), 500); return; }
    if (timeLeft <= 0) { onComplete(score); return; }
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, matched.length]);

  const handleFlip = (cardId: string) => {
    if (flipped.length === 2 || flipped.includes(cardId) || matched.includes(cardId)) return;
    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      const [a, b] = newFlipped;
      const cardA = cards.find(c => c.id === a);
      if (cardA?.matchId === b || cards.find(c => c.id === b)?.matchId === a) {
        setMatched(m => [...m, a, b]);
        setScore(s => s + 15);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '12px', padding: '0.5rem 1rem' }}>
          <span style={{ fontWeight: '800', color: '#AB5419' }}>{score}</span><span style={{ color: '#928464', fontSize: '0.75rem', marginLeft: '3px' }}>pts</span>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '12px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={14} color="#928464" />
          <span style={{ fontFamily: 'monospace', fontWeight: '700', color: timeLeft < 20 ? '#dc2626' : '#1A0F08', fontSize: '0.85rem' }}>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
        </div>
        <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '12px', padding: '0.5rem 1rem' }}>
          <span style={{ color: '#928464', fontSize: '0.78rem' }}>{matched.length / 2}/{cards.length / 2} matched</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
        {cards.map(card => {
          const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
          const isMatched = matched.includes(card.id);
          return (
            <motion.button key={card.id} whileHover={!isFlipped ? { scale: 1.05 } : {}} whileTap={!isFlipped ? { scale: 0.95 } : {}}
              onClick={() => handleFlip(card.id)}
              style={{
                aspectRatio: '1/1', borderRadius: '12px',
                border: `2px solid ${isMatched ? '#E0B17D' : isFlipped ? '#AB5419' : '#E8D5BC'}`,
                background: isMatched ? '#FBF0E4' : isFlipped ? '#fff' : '#FBF0E4',
                cursor: isFlipped ? 'default' : 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '0.2rem', padding: '0.5rem',
                fontFamily: 'var(--font-inter)',
                transition: 'all 0.2s ease',
              }}
            >
              <AnimatePresence mode="wait">
                {isFlipped ? (
                  <motion.div key="front" initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem' }}>{card.image}</div>
                    <div style={{ fontSize: '0.58rem', color: '#928464', lineHeight: 1.2, marginTop: '2px' }}>{card.label}</div>
                  </motion.div>
                ) : (
                  <motion.div key="back" style={{ fontSize: '1.2rem', color: '#E8D5BC' }}>?</motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// TIMELINE GAME
// ============================================================
function TimelineGame({ game, onComplete }: { game: Game; onComplete: (score: number) => void }) {
  const events = game.data as { id: string; event: string; year: string; description: string }[];
  const [order, setOrder] = useState(() => [...events].sort(() => Math.random() - 0.5).map(e => e.id));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const move = (fromIdx: number, dir: -1 | 1) => {
    const toIdx = fromIdx + dir;
    if (toIdx < 0 || toIdx >= order.length) return;
    const newOrder = [...order];
    [newOrder[fromIdx], newOrder[toIdx]] = [newOrder[toIdx], newOrder[fromIdx]];
    setOrder(newOrder);
  };

  const handleSubmit = () => {
    const correct = events.map(e => e.id);
    let pts = 0;
    order.forEach((id, i) => { if (id === correct[i]) pts += Math.floor(game.points / events.length); });
    setScore(pts);
    setSubmitted(true);
    setTimeout(() => onComplete(pts), 2000);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <p style={{ color: '#928464', fontSize: '0.82rem', textAlign: 'center', marginBottom: '1.5rem' }}>Use ↑↓ buttons to arrange events from earliest to latest</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
        {order.map((id, idx) => {
          const evt = events.find(e => e.id === id)!;
          const correctIdx = events.findIndex(e => e.id === id);
          const isCorrect = submitted && idx === correctIdx;
          const isWrong = submitted && idx !== correctIdx;
          return (
            <motion.div key={id} layout style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              background: isCorrect ? '#f0fdf4' : isWrong ? '#fef2f2' : '#fff',
              border: `1.5px solid ${isCorrect ? '#86efac' : isWrong ? '#fca5a5' : '#E8D5BC'}`,
              borderRadius: '14px', padding: '1rem 1.25rem',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <button onClick={() => move(idx, -1)} disabled={submitted || idx === 0}
                  style={{ background: 'none', border: 'none', cursor: idx > 0 && !submitted ? 'pointer' : 'default', color: '#AB5419', fontSize: '0.7rem', lineHeight: 1, padding: '2px', opacity: idx === 0 ? 0.3 : 1 }}>▲</button>
                <span style={{ fontFamily: 'monospace', color: '#928464', fontSize: '0.7rem', textAlign: 'center' }}>{idx + 1}</span>
                <button onClick={() => move(idx, 1)} disabled={submitted || idx === order.length - 1}
                  style={{ background: 'none', border: 'none', cursor: idx < order.length - 1 && !submitted ? 'pointer' : 'default', color: '#AB5419', fontSize: '0.7rem', lineHeight: 1, padding: '2px', opacity: idx === order.length - 1 ? 0.3 : 1 }}>▼</button>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: '600', fontSize: '0.875rem', color: '#1A0F08', marginBottom: '2px' }}>{evt.event}</p>
                <p style={{ fontSize: '0.72rem', color: '#928464' }}>{evt.description}</p>
              </div>
              {submitted && (
                <span style={{ fontWeight: '800', fontSize: '0.8rem', color: isCorrect ? '#16a34a' : '#dc2626', flexShrink: 0 }}>{evt.year}</span>
              )}
            </motion.div>
          );
        })}
      </div>
      {!submitted && (
        <button onClick={handleSubmit} style={{
          width: '100%', padding: '0.875rem', borderRadius: '14px',
          background: '#AB5419', color: '#fff', border: 'none',
          fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer',
          fontFamily: 'var(--font-inter)',
        }}>Submit Order →</button>
      )}
    </div>
  );
}

// ============================================================
// MAIN GAME PAGE
// ============================================================
export default function GamePage({ params }: { params: Promise<{ gameId: string }> }) {
  const { gameId } = use(params);
  const router = useRouter();
  const [phase, setPhase] = useState<'instructions' | 'playing' | 'complete'>('instructions');
  const [finalScore, setFinalScore] = useState(0);

  const game = states.flatMap(s => s.games).find(g => g.id === gameId);

  if (!game) {
    return (
      <div style={{ minHeight: '100vh', background: '#FDF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎮</div>
          <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.4rem', color: '#1A0F08', marginBottom: '0.5rem' }}>Game Not Found</h2>
          <button onClick={() => router.back()} style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', borderRadius: '9999px', background: '#AB5419', color: '#fff', border: 'none', fontWeight: '600', cursor: 'pointer', fontFamily: 'var(--font-inter)' }}>← Go Back</button>
        </div>
      </div>
    );
  }

  const handleComplete = (score: number) => {
    setFinalScore(score);
    setPhase('complete');
  };

  const typeEmoji: Record<string, string> = { quiz: '❓', memory: '🧠', puzzle: '🧩', timeline: '📅', matching: '🎯', word: '📝' };
  const diffColor: Record<string, string> = { easy: '#16a34a', medium: '#d97706', hard: '#dc2626' };

  return (
    <div style={{ minHeight: '100vh', background: '#FDF6EE' }}>
      {/* Game Header — solid background */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(253,246,238,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E8D5BC',
        padding: '1rem 1.5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: 'none', color: '#928464', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: '500' }}>
            <ArrowLeft size={16} /> Back
          </button>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '0.95rem', color: '#1A0F08' }}>{game.name}</h1>
            <span style={{ fontSize: '0.7rem', color: diffColor[game.difficulty], fontWeight: '600', textTransform: 'capitalize' }}>{game.difficulty} • {game.stateName}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#FBF0E4', border: '1px solid #E8D5BC', borderRadius: '9999px', padding: '0.35rem 0.875rem' }}>
            <Star size={12} color="#AB5419" />
            <span style={{ fontSize: '0.75rem', color: '#AB5419', fontWeight: '700' }}>+{game.points}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <AnimatePresence mode="wait">

          {/* Instructions */}
          {phase === 'instructions' && (
            <motion.div key="instructions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto' }}
            >
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>{typeEmoji[game.type]}</div>
              <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.5rem', color: '#1A0F08', marginBottom: '0.5rem' }}>{game.name}</h2>
              <p style={{ color: '#928464', marginBottom: '2rem', lineHeight: '1.7', fontSize: '0.9rem' }}>{game.description}</p>

              <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '20px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
                <h3 style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1A0F08', marginBottom: '1rem' }}>📋 How to Play</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0 }}>
                  {game.instructions.map((inst, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.82rem', color: '#928464', lineHeight: '1.5' }}>
                      <span style={{ color: '#AB5419', fontWeight: '700', flexShrink: 0 }}>{i + 1}.</span>
                      {inst}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '800', fontSize: '1.5rem', color: '#AB5419' }}>{Math.floor(game.duration / 60)}:{String(game.duration % 60).padStart(2, '0')}</div>
                  <div style={{ color: '#928464', fontSize: '0.72rem' }}>Time Limit</div>
                </div>
                <div style={{ width: '1px', background: '#E8D5BC' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '800', fontSize: '1.5rem', color: '#AB5419' }}>+{game.points}</div>
                  <div style={{ color: '#928464', fontSize: '0.72rem' }}>Points</div>
                </div>
                <div style={{ width: '1px', background: '#E8D5BC' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '800', fontSize: '1.5rem', color: diffColor[game.difficulty], textTransform: 'capitalize' }}>{game.difficulty}</div>
                  <div style={{ color: '#928464', fontSize: '0.72rem' }}>Difficulty</div>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPhase('playing')}
                style={{
                  padding: '0.875rem 3rem', borderRadius: '9999px',
                  background: '#AB5419', color: '#fff', border: 'none',
                  fontWeight: '700', fontSize: '1rem',
                  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: '0 8px 24px rgba(171,84,25,0.35)',
                  fontFamily: 'var(--font-inter)',
                }}
              ><Play size={18} /> Start Game</motion.button>
            </motion.div>
          )}

          {/* Playing */}
          {phase === 'playing' && (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {game.type === 'quiz'     && <QuizGame    game={game} onComplete={handleComplete} />}
              {game.type === 'memory'   && <MemoryGame  game={game} onComplete={handleComplete} />}
              {game.type === 'timeline' && <TimelineGame game={game} onComplete={handleComplete} />}
            </motion.div>
          )}

          {/* Complete */}
          {phase === 'complete' && (
            <motion.div key="complete" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', maxWidth: '440px', margin: '0 auto' }}
            >
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5 }} style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🏆</motion.div>
              <h2 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '700', fontSize: '1.75rem', color: '#1A0F08', marginBottom: '0.5rem' }}>Game Complete!</h2>
              <p style={{ color: '#928464', marginBottom: '2rem', fontSize: '0.9rem' }}>Excellent work exploring {game.stateName}&apos;s heritage!</p>

              <div style={{ background: '#fff', border: '1px solid #E8D5BC', borderRadius: '24px', padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '900', fontSize: '3.5rem', color: '#AB5419', lineHeight: 1 }}>{finalScore}</div>
                <div style={{ color: '#928464', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Total Score</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.25rem', color: '#E0B17D' }}>+{Math.round(finalScore * 0.5)}</div>
                    <div style={{ color: '#928464', fontSize: '0.7rem' }}>Points Earned</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem' }}>🏅</div>
                    <div style={{ color: '#928464', fontSize: '0.7rem' }}>Badge Progress</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => { setPhase('instructions'); setFinalScore(0); }}
                  style={{
                    padding: '0.7rem 1.5rem', borderRadius: '9999px',
                    background: '#fff', border: '1.5px solid #E8D5BC',
                    color: '#928464', fontWeight: '600', fontSize: '0.875rem',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: 'var(--font-inter)',
                  }}
                ><RotateCcw size={14} /> Play Again</button>
                <button onClick={() => router.back()}
                  style={{
                    padding: '0.7rem 1.75rem', borderRadius: '9999px',
                    background: '#AB5419', color: '#fff', border: 'none',
                    fontWeight: '600', fontSize: '0.875rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-inter)',
                  }}
                >Continue Exploring →</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
