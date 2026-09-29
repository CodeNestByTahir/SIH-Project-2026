'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CinematicIntro from '@/components/intro/CinematicIntro';

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);
  const router = useRouter();

  const handleIntroComplete = () => {
    setIntroDone(true);
    router.push('/explore');
  };

  return (
    <main style={{ background: '#1A0F08', minHeight: '100vh' }}>
      {!introDone && <CinematicIntro onComplete={handleIntroComplete} />}
    </main>
  );
}
