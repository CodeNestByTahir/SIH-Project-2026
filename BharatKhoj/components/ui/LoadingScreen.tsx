'use client';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message = 'Exploring India...' }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-midnight-900 flex flex-col items-center justify-center z-50">
      {/* Animated Mandala */}
      <div className="relative w-32 h-32 mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-saffron-500/40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-3 rounded-full border-2 border-dashed border-gold-400/30"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-6 rounded-full border-2 border-dashed border-terracotta-500/20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">🪔</span>
        </div>
      </div>

      {/* Bharat Odyssey */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-display text-2xl text-gradient-saffron mb-2"
      >
        Bharat Odyssey
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-white/50 text-sm"
      >
        {message}
      </motion.p>

      {/* Loading dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            className="w-2 h-2 rounded-full bg-saffron-500"
          />
        ))}
      </div>
    </div>
  );
}
