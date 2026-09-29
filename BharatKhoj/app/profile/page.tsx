'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, Map, Gamepad2, Package, Award, Lock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { useAuth } from '@/lib/hooks/useAuth';
import { BADGE_DEFINITIONS, getLevelTitle, formatPoints } from '@/lib/utils';

const DEMO_STATES = [
  { slug: 'maharashtra', name: 'Maharashtra', emoji: '🏯', color: '#FF6B35' },
  { slug: 'rajasthan', name: 'Rajasthan', emoji: '🏰', color: '#E8562A' },
];

const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 2000, 5000];

function getLevelProgress(points: number, level: number): number {
  const current = LEVEL_THRESHOLDS[level - 1] || 0;
  const next = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return Math.min(((points - current) / (next - current)) * 100, 100);
}

export default function ProfilePage() {
  const { user, userProgress, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen bg-midnight-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-saffron-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/50">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-midnight-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h2 className="font-display text-2xl text-white mb-2">Sign In Required</h2>
          <p className="text-white/50 mb-6">Create an account to track your journey across India</p>
          <Link href="/auth" className="px-8 py-3 rounded-full font-semibold text-white inline-block" style={{ background: 'linear-gradient(135deg, #FF6B35, #D4A843)' }}>
            Sign In / Register
          </Link>
        </div>
      </div>
    );
  }

  const points = userProgress?.points || 0;
  const level = userProgress?.level || 1;
  const badges = userProgress?.badges || [];
  const exploredStates = userProgress?.exploredStates || [];
  const completedGames = userProgress?.completedGames || [];
  const orders = userProgress?.orders || [];
  const levelProgress = getLevelProgress(points, level);
  const levelTitle = getLevelTitle(level);

  return (
    <div className="min-h-screen bg-midnight-900 text-cream">
      <Navbar />

      {/* Hero Profile Section */}
      <section
        className="pt-24 pb-12 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(255,107,53,0.08) 0%, transparent 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center font-display font-black text-4xl text-white"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #D4A843)', boxShadow: '0 0 40px rgba(255,107,53,0.4)' }}
              >
                {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'E'}
              </div>
              <div
                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-midnight-900"
                style={{ background: `linear-gradient(135deg, #D4A843, #FF6B35)` }}
              >
                {level}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-display font-bold text-4xl text-white mb-1">
                {user.displayName || 'Explorer'}
              </h1>
              <p className="text-white/40 mb-2">{user.email}</p>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
                <Star className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 font-semibold">{formatPoints(points)} points</span>
                <span className="text-white/20">•</span>
                <span className="text-saffron-400">{levelTitle}</span>
              </div>

              {/* Level progress bar */}
              <div className="max-w-xs md:max-w-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/40">Level {level}</span>
                  <span className="text-xs text-white/40">Level {level + 1}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${levelProgress}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #FF6B35, #D4A843)' }}
                  />
                </div>
                <p className="text-xs text-white/30 mt-1">{Math.round(levelProgress)}% to next level</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Map, label: 'States Explored', value: exploredStates.length || DEMO_STATES.length, color: '#FF6B35' },
              { icon: Gamepad2, label: 'Games Completed', value: completedGames.length, color: '#10B981' },
              { icon: '🏺', label: 'Toys Viewed', value: userProgress?.viewedToys?.length || 0, color: '#F59E0B' },
              { icon: Package, label: 'Orders Placed', value: orders.length, color: '#7C3AED' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                {typeof stat.icon === 'string' ? (
                  <div className="text-3xl mb-3">{stat.icon}</div>
                ) : (
                  <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: stat.color }} />
                )}
                <div className="font-display font-bold text-3xl text-white mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white mb-6">🏅 Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BADGE_DEFINITIONS.map((badge, i) => {
              const earned = badges.includes(badge.id);
              return (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`glass rounded-2xl p-5 text-center relative overflow-hidden ${
                    !earned ? 'opacity-40' : ''
                  }`}
                >
                  {!earned && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white/20" />
                    </div>
                  )}
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{badge.name}</h3>
                  <p className="text-white/40 text-xs">{badge.requirement}</p>
                  {earned && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={{ background: badge.color }}
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* States Explored */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-white">🗺️ States Explored</h2>
            <Link href="/explore" className="text-saffron-400 text-sm hover:text-saffron-300">Explore More →</Link>
          </div>
          {exploredStates.length === 0 && DEMO_STATES.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DEMO_STATES.map((state) => (
                <Link key={state.slug} href={`/state/${state.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-xl p-4 text-center cursor-pointer hover:shadow-cultural transition-all"
                    style={{ borderColor: `${state.color}30`, borderWidth: '1px' }}
                  >
                    <div className="text-4xl mb-2">{state.emoji}</div>
                    <p className="text-white text-sm font-medium">{state.name}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          ) : exploredStates.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-white/50">No states explored yet. Start your journey!</p>
              <Link href="/explore" className="text-saffron-400 text-sm mt-3 inline-block">Explore India →</Link>
            </div>
          ) : null}
        </div>
      </section>

      {/* Recent Games */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white mb-6">🎮 Recent Games</h2>
          {completedGames.length === 0 ? (
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎮</div>
              <p className="text-white/50">No games played yet. Play a game to earn points!</p>
              <Link href="/explore" className="text-saffron-400 text-sm mt-3 inline-block">Find Games →</Link>
            </div>
          ) : (
            <div className="space-y-3">
              {completedGames.slice(0, 5).map((game, i) => (
                <div key={i} className="glass rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{game.gameName}</p>
                    <p className="text-white/40 text-xs">{new Date(game.completedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold-400 font-bold">{game.score}</p>
                    <p className="text-white/30 text-xs">/ {game.maxScore}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
