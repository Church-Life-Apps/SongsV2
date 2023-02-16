import { v4 as uuidv4 } from "uuid";
import {
  Songbook,
  Song,
  Lyric,
  LyricType,
  SongWithLyrics,
} from "./SongsApiModels";

// hard coded Data object for individual songbook in Songbooks List API
const SHL: Songbook = {
  id: "shl",
  fullName: "Songs and Hymns of Life",
  staticMetadataLink:
    "https://github.com/Church-Life-Apps/Resources/blob/master/resources/metadata/shl.json",
  imageUrl: "not sure where to find the URL right now",
};

// hard coded Data object for individual song in songlist
const Glory: Song = {
  id: uuidv4,
  songbookId: "shl",
  number: 1,
  title: "Glory Be To God The Father",
  author: "Horatius Bonar",
  music: "Henry Thomas Smart (1813-1879)",
  presentationOrder: "v1 v2 v3 v4",
  imageUrl:
    "https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/images/shl/SHL_001.png",
};

// hard coded Data object for Lyrics
const Glory_V1: Lyric = {
  songId: uuidv4,
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 1,
  lyrics: `"Glory be to God the Father,",
   "Glory be to God the Son,",
   "Glory be to God the Spirit,",
   "Great Jehovah, Three in One!",
   "As it was, is now, and shall be",
   "While the endless ages run."`,
};
const Glory_V2: Lyric = {
  songId: uuidv4,
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 2,
  lyrics: `"Glory be to Him Who loved us,",
  "Washed us from each spot and stain!",
  "Glory be to Him Who bought us,",
  "Made us kings with Him to reign!",
  "Glory, glory, glory, glory",
  "To the Lamb that once was slain!"`,
};
const Glory_V3: Lyric = {
  songId: uuidv4,
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 3,
  lyrics: `"Glory to the King of angels,",
  "Glory to the Church's King,",
  "Glory to the King of nations!",
  "Heav'n and earth, your praises bring;",
  "Glory, glory, glory, glory",
  "To the King of glory bring!"`,
};

// hard coded Data object for Songs with Lyrics
const Glory_with_Lyrics: SongWithLyrics = {
  song: Glory,
  lyrics: [Glory_V1, Glory_V2, Glory_V3],
};
