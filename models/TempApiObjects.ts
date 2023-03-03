import { v4 as uuidv4 } from "uuid";
import { Songbook, Song, Lyric, LyricType, SongWithLyrics } from "./SongsApiModels";

// hard coded Data object for individual songbook in Songbooks List API
export const SHL: Songbook = {
  id: "shl",
  fullName: "Songs and Hymns of Life",
  staticMetadataLink: "https://github.com/Church-Life-Apps/Resources/blob/master/resources/metadata/shl.json",
  imageUrl: "https://i0.wp.com/asweetsavor.org/wp-content/uploads/SHL-on-Piano-e1602105678283.jpg?fit=882%2C686&ssl=1",
  audioUrl: "https://raw.githubusercontent.com/brandonxia01/CodingClub/master/websites/piano/notes/c-4.mp3",
};

// hard coded Data object for individual song in songlist
export const TEST_SONG: Song = {
  id: uuidv4(),
  songbookId: "shl",
  number: 1,
  title: "Great Is Thy Faithfulness",
  author: "Thomas O. Chrisholm",
  music: "William Marion Runyan (1870-1957)",
  presentationOrder: "v1 c1 v2 c1 v3 c1",
  imageUrl: "https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/images/shl/SHL_010.png",
};

// hard coded Data object for Lyrics
export const TEST_LYRIC_V1: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 1,
  lyrics: `"Great is Thy faithfulness," O God my Father,
  There is no shadow of turning with Thee;
  Thou changest not, Thy compassions, they fail not;
  As Thou hast been Thou forever wilt be.`,
};
export const TEST_LYRIC_V2: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 2,
  lyrics: `Summer and winter, and springtime and harvest.
  Sun, moon and stars in their courses above,
  Join with all nature in manifold witness,
  To Thy great faithfulness, mercy and love.`,
};
export const TEST_LYRIC_V3: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 3,
  lyrics: `Pardon for sin and a peace that endureth.
  Thy own dear presence to cheer and to guide;
  Strength for today and bright hope for tomorrow,
  Blessings all mine, with ten thousand beside!`,
};
export const TEST_CHORUS_C1: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_CHORUS,
  verseNumber: 1,
  lyrics: `"Great is Thy faithfulness!"
  "Great is Thy faithfulness!"
  Morning by morning new mercies I see;
  All I have needed Thy hand hath provided \u2014
  "Great is Thy faithfulness," Lord, unto me!`,
};

// hard coded Data object for Songs with Lyrics
export const TEST_SONG_WITH_LYRIC: SongWithLyrics = {
  song: TEST_SONG,
  lyrics: [TEST_LYRIC_V1, TEST_LYRIC_V2, TEST_LYRIC_V3, TEST_CHORUS_C1],
};
