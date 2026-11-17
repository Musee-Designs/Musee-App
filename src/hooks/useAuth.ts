import { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  type User as FirebaseUser,
  type Unsubscribe,
} from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

import { auth, db } from '../services/firebase';
import type { User as MuseeUser } from '../types/models';

export function useAuth() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<MuseeUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribeProfile: Unsubscribe | undefined;

    const unsubscribeAuth = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        unsubscribeProfile?.();
        unsubscribeProfile = undefined;

        setUser(firebaseUser);
        setProfile(null);
        setError(null);

        if (!firebaseUser) {
          setLoading(false);
          return;
        }

        setLoading(true);

        unsubscribeProfile = onSnapshot(
          doc(db, 'users', firebaseUser.uid),
          (snapshot) => {
            setProfile(
              snapshot.exists()
                ? (snapshot.data() as MuseeUser)
                : null
            );
            setLoading(false);
          },
          (snapshotError) => {
            setError(snapshotError.message);
            setLoading(false);
          }
        );
      },
      (authError) => {
        setError(authError.message);
        setLoading(false);
      }
    );

    return () => {
      unsubscribeAuth();
      unsubscribeProfile?.();
    };
  }, []);

  return {
    user,
    profile,
    loading,
    error,
    isAuthenticated: user !== null,
    hasProfile: profile !== null,
  };
}
