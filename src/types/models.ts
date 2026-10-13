import type { Timestamp } from "firebase/firestore";

export interface User {
  uid: string;
  username: string;
  displayName: string;
  bio: string;
  photoURL: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface SpotifyTrack {
  spotifyId: string;
  title: string;
  artistNames: string[];
  albumName: string;
  albumArtURL: string | null;
  spotifyURL: string;
}

export interface MusicPost {
  id: string;
  authorId: string;
  track: SpotifyTrack;
  caption: string;
  mood: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Follow {
  createdAt: Timestamp;
}

export interface Like {
  createdAt: Timestamp;
}

export interface SavedSong {
  track: SpotifyTrack;
  savedAt: Timestamp;
}
