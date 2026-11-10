
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Category = 'Songs' | 'People' | 'Top Posts';
type Genre = 'All' | 'Pop' | 'Indie' | 'R&B' | 'Chill';

type Song = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration?: string;
  genre: Genre;
  color: string;
  initials: string;
};

type Person = {
  id: string;
  username: string;
  description: string;
  initials: string;
  color: string;
};

type Post = {
  id: string;
  username: string;
  initials: string;
  color: string;
  time: string;
  content: string;
  likes: number;
  song: Song;
};

// Temporary sample data
const songResults: Song[] = [
  {
    id: 's1',
    title: 'Pink + White',
    artist: 'Frank Ocean',
    album: 'Blonde',
    duration: '3:06',
    genre: 'R&B',
    color: '#B56682',
    initials: 'P+W',
  },
  {
    id: 's2',
    title: 'Lost',
    artist: 'Frank Ocean',
    album: 'channel ORANGE',
    duration: '3:53',
    genre: 'R&B',
    color: '#B86D5F',
    initials: 'LST',
  },
  {
    id: 's3',
    title: 'Thinkin Bout You',
    artist: 'Frank Ocean',
    album: 'channel ORANGE',
    duration: '3:09',
    genre: 'R&B',
    color: '#92978C',
    initials: 'TBY',
  },
];

const people: Person[] = [
  {
    id: 'p1',
    username: 'jazz_lover92',
    description: 'Music fan · 32 posts',
    initials: 'JL',
    color: '#B99ABE',
  },
  {
    id: 'p2',
    username: 'melodybird',
    description: 'Music fan · 18 posts',
    initials: 'MB',
    color: '#CBD5AB',
  },
  {
    id: 'p3',
    username: 'retrowave_kid',
    description: 'Music fan · 31 posts',
    initials: 'RW',
    color: '#F5CEA3',
  },
];

const topSongs: Song[] = [
  {
    id: 't1',
    title: 'Make It Better',
    artist: 'Anderson .Paak',
    genre: 'Pop',
    color: '#F4CB91',
    initials: 'MIB',
  },
  {
    id: 't2',
    title: 'Late Night Feels',
    artist: 'Lofi Beats',
    genre: 'Chill',
    color: '#96809F',
    initials: 'LNF',
  },
  {
    id: 't3',
    title: "Let's Go",
    artist: 'The Happy Band',
    genre: 'Indie',
    color: '#AE7779',
    initials: 'LG',
  },
];

const posts: Post[] = [
  {
    id: 'post1',
    username: 'jazz_lover92',
    initials: 'JL',
    color: '#B99ABE',
    time: '2h ago',
    content:
      '"Pink + White" on repeat today — this song just hits different every single time 🎵',
    likes: 248,
    song: songResults[0],
  },
  {
    id: 'post2',
    username: 'melodybird',
    initials: 'MB',
    color: '#CBD5AB',
    time: '5h ago',
    content:
      'Late night chill session 🌙 nothing like "Late Night Feels" after a long day',
    likes: 191,
    song: topSongs[1],
  },
];

// Small reusable album artwork
function AlbumArt({
  song,
  size = 38,
}: {
  song: Song;
  size?: number;
}) {
  return (
    <View
      style={[
        styles.albumArt,
        {
          width: size,
          height: size,
          backgroundColor: song.color,
        },
      ]}
    >
      <Text style={styles.albumText}>{song.initials}</Text>
    </View>
  );
}

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('Songs');
  const [genre, setGenre] = useState<Genre>('All');

  const [savedSongs, setSavedSongs] = useState<string[]>([]);
  const [friends, setFriends] = useState<string[]>(['p2']);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const categories: Category[] = ['Songs', 'People', 'Top Posts'];
  const genres: Genre[] = ['All', 'Pop', 'Indie', 'R&B', 'Chill'];

  const query = search.trim().toLowerCase();

  // Search and filter
  const matchesSong = (song: Song) =>
    `${song.title} ${song.artist} ${song.album ?? ''}`
      .toLowerCase()
      .includes(query);

  const matchesGenre = (song: Song) =>
    genre === 'All' || song.genre === genre;

  const filteredSongs = songResults.filter(
    (song) => matchesSong(song) && matchesGenre(song)
  );

  const filteredTopSongs = topSongs.filter(
    (song) => matchesSong(song) && matchesGenre(song)
  );

  const filteredPeople = people.filter((person) =>
    `${person.username} ${person.description}`
      .toLowerCase()
      .includes(query)
  );

  const filteredPosts = posts.filter((post) =>
    `${post.username} ${post.content} ${post.song.title}`
      .toLowerCase()
      .includes(query)
  );

  // Temporary local interactions
  const toggleSaved = (id: string) => {
    setSavedSongs((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const toggleFriend = (id: string) => {
    setFriends((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const toggleLike = (id: string) => {
    setLikedPosts((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const previewSong = () => {
    Alert.alert(
      'Preview unavailable',
      'Audio previews will be available after connecting a music source.'
    );
  };

  const openSpotify = async (song: Song) => {
    const term = encodeURIComponent(
      `${song.title} ${song.artist}`
    );

    try {
      await Linking.openURL(
        `https://open.spotify.com/search/${term}`
      );
    } catch {
      Alert.alert('Error', 'Unable to open Spotify.');
    }
  };

  return (
    <View style={styles.background}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* SEARCH BAR */}
        <View style={styles.searchBar}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#2E1D26"
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search people, songs, posts..."
            placeholderTextColor="#86747D"
            value={search}
            onChangeText={setSearch}
            autoCapitalize="none"
            returnKeyType="search"
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons
                name="close-circle-outline"
                size={19}
                color="#86747D"
              />
            </TouchableOpacity>
          )}
        </View>

        {/* SPOTIFY LABEL */}
        <View style={styles.spotifyRow}>
          <View style={styles.spotifyBadge}>
            <Ionicons
              name="musical-note-outline"
              size={13}
              color="#FFFFFF"
            />
            <Text style={styles.spotifyBadgeText}>
              Spotify links
            </Text>
          </View>
        </View>

        {/* CATEGORY FILTERS */}
        <View style={styles.filterRow}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.categoryButton,
                category === item && styles.selectedButton,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  category === item && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* GENRE FILTERS */}
        {category === 'Songs' && (
          <View style={styles.genreRow}>
            {genres.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.genreButton,
                  genre === item && styles.selectedButton,
                ]}
                onPress={() => setGenre(item)}
              >
                <Text
                  style={[
                    styles.filterText,
                    genre === item && styles.selectedText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* SONG RESULTS */}
        {category === 'Songs' && (
          <View>
            <Text style={styles.sectionTitle}>Song Results</Text>

            {filteredSongs.length === 0 && (
              <Text style={styles.emptyText}>No songs found.</Text>
            )}

            {filteredSongs.map((song) => (
              <View key={song.id} style={styles.songCard}>
                <View style={styles.songTopRow}>
                  <AlbumArt song={song} size={40} />

                  <View style={styles.songInformation}>
                    <Text style={styles.songTitle}>
                      {song.title}
                    </Text>

                    <Text style={styles.songArtist}>
                      {song.artist}
                      {song.album ? ` · ${song.album}` : ''}
                    </Text>

                    <Text style={styles.songDuration}>
                      {song.duration}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => toggleSaved(song.id)}
                  >
                    <Ionicons
                      name={
                        savedSongs.includes(song.id)
                          ? 'checkmark-circle'
                          : 'add-circle-outline'
                      }
                      size={23}
                      color="#B32D44"
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.songActions}>
                  <TouchableOpacity
                    style={styles.previewButton}
                    onPress={previewSong}
                  >
                    <Ionicons
                      name="play"
                      size={11}
                      color="#2E1D26"
                    />
                    <Text style={styles.previewText}>
                      Preview
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.spotifyButton}
                    onPress={() => openSpotify(song)}
                  >
                    <Ionicons
                      name="open-outline"
                      size={12}
                      color="#FFFFFF"
                    />
                    <Text style={styles.spotifyButtonText}>
                      Open in Spotify
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* PEOPLE */}
        {category !== 'Top Posts' && (
          <View>
            <Text style={styles.sectionTitle}>People</Text>

            {filteredPeople.length === 0 && (
              <Text style={styles.emptyText}>No people found.</Text>
            )}

            {filteredPeople.map((person) => {
              const isFriend = friends.includes(person.id);

              return (
                <View key={person.id} style={styles.personCard}>
                  <View
                    style={[
                      styles.avatar,
                      { backgroundColor: person.color },
                    ]}
                  >
                    <Text style={styles.avatarText}>
                      {person.initials}
                    </Text>
                  </View>

                  <View style={styles.personInformation}>
                    <Text style={styles.personName}>
                      {person.username}
                    </Text>
                    <Text style={styles.personDescription}>
                      {person.description}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.friendButton,
                      isFriend && styles.alreadyFriendButton,
                    ]}
                    onPress={() => toggleFriend(person.id)}
                  >
                    <Text
                      style={[
                        styles.friendButtonText,
                        isFriend && styles.alreadyFriendText,
                      ]}
                    >
                      {isFriend ? 'Friends' : 'Add Friend'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}

        {/* TOP SONGS */}
        {category === 'Songs' && (
          <View>
            <Text style={styles.sectionTitle}>Top Songs</Text>

            {filteredTopSongs.length === 0 && (
              <Text style={styles.emptyText}>
                No top songs found.
              </Text>
            )}

            {filteredTopSongs.map((song) => (
              <View key={song.id} style={styles.topSongCard}>
                <AlbumArt song={song} size={38} />

                <View style={styles.topSongInformation}>
                  <Text style={styles.songTitle}>
                    {song.title}
                  </Text>
                  <Text style={styles.songArtist}>
                    {song.artist}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => openSpotify(song)}
                >
                  <Ionicons
                    name="play-circle-outline"
                    size={21}
                    color="#86747D"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {/* TOP POSTS */}
        {category !== 'People' && (
          <View>
            <Text style={styles.sectionTitle}>Top Posts</Text>

            {filteredPosts.length === 0 && (
              <Text style={styles.emptyText}>No posts found.</Text>
            )}

            {filteredPosts.map((post) => {
              const isLiked = likedPosts.includes(post.id);

              return (
                <View key={post.id} style={styles.postCard}>
                  <View style={styles.postHeader}>
                    <View
                      style={[
                        styles.postAvatar,
                        { backgroundColor: post.color },
                      ]}
                    >
                      <Text style={styles.postAvatarText}>
                        {post.initials}
                      </Text>
                    </View>

                    <View style={styles.postUserInformation}>
                      <Text style={styles.personName}>
                        {post.username}
                      </Text>
                      <Text style={styles.postTime}>
                        {post.time}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.likesButton}
                      onPress={() => toggleLike(post.id)}
                    >
                      <Ionicons
                        name={isLiked ? 'heart' : 'heart-outline'}
                        size={16}
                        color="#B32D44"
                      />
                      <Text style={styles.likesText}>
                        {post.likes + (isLiked ? 1 : 0)}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.postContent}>
                    {post.content}
                  </Text>

                  <TouchableOpacity
                    style={styles.embeddedSong}
                    onPress={() => openSpotify(post.song)}
                  >
                    <AlbumArt song={post.song} size={30} />

                    <View style={styles.embeddedSongInformation}>
                      <Text style={styles.embeddedSongTitle}>
                        {post.song.title}
                      </Text>
                      <Text style={styles.embeddedSongArtist}>
                        {post.song.artist}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFECCC',
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 35,
  },

  // Search bar
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F5',
    borderWidth: 1,
    borderColor: '#E6CEC4',
    borderRadius: 12,
    height: 45,
    paddingHorizontal: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: '#2E1D26',
  },

  // Spotify label
  spotifyRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    marginBottom: 10,
  },

  spotifyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 4,
  },

  spotifyBadgeText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // Filters
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  genreRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 10,
  },

  categoryButton: {
    backgroundColor: '#F3D3A8',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
  },

  genreButton: {
    backgroundColor: '#F3D3A8',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 25,
  },

  selectedButton: {
    backgroundColor: '#A52D40',
  },

  filterText: {
    color: '#2E1D26',
    fontSize: 12,
    fontWeight: '600',
  },

  selectedText: {
    color: '#FFFFFF',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E1D26',
    marginTop: 18,
    marginBottom: 10,
  },

  emptyText: {
    fontSize: 12,
    color: '#86747D',
    marginBottom: 12,
  },

  // Album artwork
  albumArt: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  albumText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 10,
  },

  // Song result cards
  songCard: {
    backgroundColor: '#FFF9F5',
    borderWidth: 1,
    borderColor: '#E6CEC4',
    borderRadius: 15,
    padding: 10,
    marginBottom: 9,
  },

  songTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  songInformation: {
    flex: 1,
    marginLeft: 10,
  },

  songTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2E1D26',
  },

  songArtist: {
    fontSize: 11,
    color: '#86747D',
    marginTop: 3,
  },

  songDuration: {
    fontSize: 11,
    color: '#A52D40',
    marginTop: 3,
  },

  songActions: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 8,
  },

  previewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3D3A8',
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },

  previewText: {
    fontSize: 10,
    color: '#2E1D26',
    fontWeight: 'bold',
  },

  spotifyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },

  spotifyButtonText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // People cards
  personCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F5',
    borderWidth: 1,
    borderColor: '#E6CEC4',
    borderRadius: 14,
    padding: 9,
    marginBottom: 7,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#4C3040',
    fontWeight: 'bold',
    fontSize: 13,
  },

  personInformation: {
    flex: 1,
    marginLeft: 10,
  },

  personName: {
    fontSize: 12,
    color: '#2E1D26',
    fontWeight: 'bold',
  },

  personDescription: {
    fontSize: 10,
    color: '#86747D',
    marginTop: 3,
  },

  friendButton: {
    backgroundColor: '#A52D40',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 7,
  },

  friendButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },

  alreadyFriendButton: {
    backgroundColor: '#F3D3A8',
  },

  alreadyFriendText: {
    color: '#2E1D26',
  },

  // Top Songs
  topSongCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F5',
    borderWidth: 1,
    borderColor: '#E6CEC4',
    borderRadius: 14,
    padding: 10,
    marginBottom: 8,
  },

  topSongInformation: {
    flex: 1,
    marginLeft: 10,
  },

  // Posts
  postCard: {
    backgroundColor: '#FFF9F5',
    borderWidth: 1,
    borderColor: '#E6CEC4',
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  postAvatarText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  postUserInformation: {
    flex: 1,
    marginLeft: 9,
  },

  postTime: {
    fontSize: 10,
    color: '#86747D',
    marginTop: 2,
  },

  likesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  likesText: {
    fontSize: 11,
    color: '#B32D44',
    fontWeight: 'bold',
  },

  postContent: {
    fontSize: 12,
    color: '#2E1D26',
    lineHeight: 18,
    marginTop: 9,
    marginBottom: 9,
  },

  embeddedSong: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFECCC',
    borderWidth: 1,
    borderColor: '#E6CEC4',
    borderRadius: 10,
    padding: 6,
  },

  embeddedSongInformation: {
    marginLeft: 8,
    flex: 1,
  },

  embeddedSongTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2E1D26',
  },

  embeddedSongArtist: {
    fontSize: 10,
    color: '#86747D',
    marginTop: 2,
  },
});