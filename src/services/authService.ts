import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth } from './firebase';
import { createUserProfile } from './userService';

export async function signUp(
  email: string,
  password: string,
  displayName: string,
  username: string
) {
  const cleanEmail = email.trim();
  const cleanName = displayName.trim();
  const cleanUsername = username.trim();

  if (!cleanEmail || !cleanName || !cleanUsername) {
    throw new Error('Please complete all fields.');
  }

  if (!/^[a-zA-Z0-9._]{3,30}$/.test(cleanUsername)) {
    throw new Error('Enter a valid username (3–30 characters).');
  }

  if (cleanName.length > 80) {
    throw new Error('Display name is too long.');
  }

  if (password.length < 6) {
    throw new Error('Password must contain at least 6 characters.');
  }

  const credential = await createUserWithEmailAndPassword(
    auth,
    cleanEmail,
    password
  );

  await updateProfile(credential.user, {
    displayName: cleanName,
  });

  await createUserProfile(
    credential.user.uid,
    cleanUsername,
    cleanName
  );

  return credential.user;
}

export async function logIn(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  return credential.user;
}

export async function logOut() {
  await signOut(auth);
}

export async function resetPassword(email: string) {
  if (!email.trim()) {
    throw new Error('Enter your email address first.');
  }

  await sendPasswordResetEmail(auth, email.trim());
}

export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Please choose a stronger password.';
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        return 'Incorrect email or password.';
      case 'auth/network-request-failed':
        return 'Network error. Check your connection.';
      case 'permission-denied':
        return 'Unable to save your profile. Check Firestore permissions.';
      default:
        return 'Something went wrong. Please try again.';
    }
  }

  return error instanceof Error
    ? error.message
    : 'Something went wrong. Please try again.';
}
