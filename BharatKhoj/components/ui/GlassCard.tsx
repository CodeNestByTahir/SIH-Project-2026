'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  golden?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className, hover = false, golden = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        'rounded-2xl transition-all duration-300',
        golden ? 'glass-gold' : 'glass',
        hover && 'cursor-pointer hover:shadow-cultural',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
