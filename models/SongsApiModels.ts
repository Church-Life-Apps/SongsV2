// Data object for individual songbook in Songbooks List API
export interface Songbook {
  id: string;
  fullName: string;
  staticMetadataLink: string;
  imageUrl: string;
}

// Data object for a song as represented in a book's list.
export interface Song {
  id: string; // uuid
  songbookId: string;
  number: number;
  title: string;
  author: string;
  music: string;
  presentationOrder: string /* this won't be shown in the songlist UI, but is required to order the verses of the lyrics in LYRIC mode */;
  imageUrl: string /* optional image of the sheet music as not every song will have sheet music */;
  audioUrl: string /* optional audio recording of the song */;
}

// Lyric Type Enum
export enum LyricType {
  LYRIC_TYPE_VERSE = "LYRIC_TYPE_VERSE",
  LYRIC_TYPE_PRECHORUS = "LYRIC_TYPE_PRECHORUS",
  LYRIC_TYPE_CHORUS = "LYRIC_TYPE_CHORUS",
  LYRIC_TYPE_BRIDGE = "LYRIC_TYPE_BRIDGE",
}

// Data object for Lyrics
export interface Lyric {
  songId: string; // uuid
  lyricType: LyricType;
  verseNumber: number;
  lyrics: string;
}

// Data object for Songs with Lyrics
export interface SongWithLyrics extends Song {
  lyrics: Lyric[];
}

// Data object for Pending Songs
export interface PendingSong {
  id: string; // uuid
  songbookId: string;
  number: number;
  title: string;
  author: string;
  music: string;
  presentationOrder: string;
  imageUrl: string;
  audioUrl: string;
  lyrics: Lyric[];
  requesterName: string;
  requesterEmail: string;
  requesterNote: string;
}
