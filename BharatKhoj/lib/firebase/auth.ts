import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './config';
import { UserProgress } from '@/types';

const googleProvider = new GoogleAuthProvider();

export const signUpWithEmail = async (
  email: string,
  password: string,
  displayName: string
): Promise<UserCredential> => {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName });
  await createUserProfile(credential.user, displayName);
  return credential;
};

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async (): Promise<UserCredential> => {
  const credential = await signInWithPopup(auth, googleProvider);
  const userRef = doc(db, 'users', credential.user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await createUserProfile(credential.user, credential.user.displayName || 'Explorer');
  }
  return credential;
};

export const logOut = async (): Promise<void> => {
  return signOut(auth);
};

export const resetPassword = async (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

const createUserProfile = async (user: User, displayName: string): Promise<void> => {
  const userRef = doc(db, 'users', user.uid);
  const initialProgress: Omit<UserProgress, 'uid'> = {
    displayName,
    photoURL: user.photoURL || '',
    email: user.email || '',
    points: 0,
    level: 1,
    badges: [],
    exploredStates: [],
    completedGames: [],
    viewedToys: [],
    orders: [],
    createdAt: new Date().toISOString(),
  };
  await setDoc(userRef, { uid: user.uid, ...initialProgress });
};

export const getUserProfile = async (uid: string): Promise<UserProgress | null> => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data() as UserProgress;
  }
  return null;
};
