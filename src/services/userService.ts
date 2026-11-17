import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

import { auth, db } from './firebase';
import type { User } from '../types/models';

export type ProfileUpdates = Partial<
  Pick<User, 'username' | 'displayName' | 'bio' | 'photoURL'>
>;

export async function createUserProfile(
  uid: string,
  username: string,
  displayName: string
): Promise<void> {
  if (auth.currentUser?.uid !== uid) {
    throw new Error('Not authorized to create this profile.');
  }

  const cleanUsername = username.trim();
  const cleanName = displayName.trim();

  if (!/^[a-zA-Z0-9._]{3,30}$/.test(cleanUsername)) {
    throw new Error(
      'Username must be 3–30 characters and contain only letters, numbers, dots, or underscores.'
    );
  }

  if (!cleanName || cleanName.length > 80) {
    throw new Error('Display name must be 1–80 characters.');
  }

  const userRef = doc(db, 'users', uid);
  const existing = await getDoc(userRef);

  if (existing.exists()) {
    return;
  }

  await setDoc(userRef, {
    uid,
    username: cleanUsername,
    displayName: cleanName,
    bio: '',
    photoURL: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function getUserProfile(
  uid: string
): Promise<User | null> {
  const snapshot = await getDoc(doc(db, 'users', uid));

  return snapshot.exists()
    ? (snapshot.data() as User)
    : null;
}

export async function updateUserProfile(
  uid: string,
  updates: ProfileUpdates
): Promise<void> {
  if (auth.currentUser?.uid !== uid) {
    throw new Error('Not authorized to edit this profile.');
  }

  if (
    updates.username !== undefined &&
    !/^[a-zA-Z0-9._]{3,30}$/.test(updates.username.trim())
  ) {
    throw new Error('Invalid username.');
  }

  if (
    updates.displayName !== undefined &&
    (!updates.displayName.trim() ||
      updates.displayName.trim().length > 80)
  ) {
    throw new Error('Invalid display name.');
  }

  if (updates.bio !== undefined && updates.bio.length > 300) {
    throw new Error('Bio cannot exceed 300 characters.');
  }

  if (Object.keys(updates).length === 0) {
    return;
  }

  await updateDoc(doc(db, 'users', uid), {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}
