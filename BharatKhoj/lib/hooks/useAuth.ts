'use client';
import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { getUserProfile } from '@/lib/firebase/auth';
import { UserProgress } from '@/types';

interface AuthState {
  user: User | null;
  userProgress: UserProgress | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = (): AuthState => {
  const [state, setState] = useState<AuthState>({
    user: null,
    userProgress: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const progress = await getUserProfile(user.uid);
          setState({ user, userProgress: progress, loading: false, error: null });
        } catch (err) {
          setState({ user, userProgress: null, loading: false, error: 'Failed to load profile' });
        }
      } else {
        setState({ user: null, userProgress: null, loading: false, error: null });
      }
    });
    return () => unsubscribe();
  }, []);

  return state;
};
