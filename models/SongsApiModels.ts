// Data object for individual songbook in Songbooks List API
export interface Songbook {
  id: string;
  fullName: string;
  staticMetadataLink: string;
  imageUrl: string;
  audioUrl: string;
}

// Data object for individual song in songlist, so we have a songlist, and also the view when we click on a song which shows us either the sheet music or just the lyrics depending on what mode we choose. I'm going to call them SHEET MUSIC and LYRIC mode.
export interface Song {
  id: string; // uuid
  songbookId: string;
  number: number;
  title: string;
  author: string;
  music: string;
  presentationOrder: string /* this won't be shown in the songlist UI, but is required to order the verses of the lyrics in LYRIC mode */;
  imageUrl: string /* optional image of the sheet music as not every song will have sheet music */;
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
export interface SongWithLyrics {
  song: Song;
  lyrics: Lyric[];
}

// after pressing create new songbook in Songbooks List UI
export function toSongbook(data: any): Songbook {
  return {
    id: data.id ?? "",
    fullName: data.fullName ?? "",
    staticMetadataLink: data.staticMetadataLink ?? "",
    imageUrl: data.imageUrl ?? "",
    audioUrl: data.audioUrl ?? "",
  };
}
