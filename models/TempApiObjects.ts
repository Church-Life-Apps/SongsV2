import { v4 as uuidv4 } from "uuid";
import { Songbook, Song, Lyric, LyricType, SongWithLyrics } from "./SongsApiModels";

// hard coded Data object for individual songbook in Songbooks List API
export const SHL: Songbook = {
  id: "shl",
  fullName: "Songs and Hymns of Life",
  staticMetadataLink: "https://github.com/Church-Life-Apps/Resources/blob/master/resources/metadata/shl.json",
  imageUrl: "https://i0.wp.com/asweetsavor.org/wp-content/uploads/SHL-on-Piano-e1602105678283.jpg?fit=882%2C686&ssl=1",
};

// hard coded Data object for individual song in songlist
export const TEST_SONG: Song = {
  id: uuidv4(),
  songbookId: "shl",
  number: 1,
  title: "Great Is Thy Faithfulness",
  author: "Thomas O. Chisholm",
  music: "William Marion Runyan (1870-1957)",
  presentationOrder: "v1 c1 v2 c1 v3 c1",
  imageUrl: "https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/images/shl/SHL_010.png",
  audioUrl: "https://raw.githubusercontent.com/brandonxia01/CodingClub/master/websites/piano/notes/c-4.mp3",
};

export const TEST_SONG_2: Song = {
  id: uuidv4(),
  songbookId: "shl",
  number: 2,
  title: "Glory Be To God The Father",
  author: "J. F. Garland",
  music: "Ira David Sankey (1840-1908)",
  presentationOrder: "v1 v2 v3 v4",
  imageUrl: "https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/images/shl/SHL_002.png",
  audioUrl: "https://raw.githubusercontent.com/brandonxia01/CodingClub/master/websites/piano/notes/c-4.mp3",
};

// hard coded Data object for Lyrics
export const TEST_LYRIC_V1: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 1,
  lyrics: `[Eb]"Great is Thy [Ab]faithfulness," [Bb7]O God my [Ab/Eb]Fa[Eb]ther,\n[Ab]There is no [Eb/G]shadow of [F/C]turn[C7]ing [F7]with [Bb]Thee;\n[Bb7]Thou changest [Eb]not, Thy com[Eb]passions, they [Ab]fail not;\n[Adim7]As Thou hast [Eb/Bb]been Thou forever [Bb7]wilt [Eb]be.`,
};
export const TEST_LYRIC_V2: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 2,
  lyrics: `Summer and winter, and springtime and harvest.\nSun, moon and stars in their courses above,\nJoin with all nature in manifold witness,\nTo Thy great faithfulness, mercy and love.`,
};
export const TEST_LYRIC_V3: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_VERSE,
  verseNumber: 3,
  lyrics: `Pardon for sin and a peace that endureth.\nThy own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!`,
};
export const TEST_CHORUS_C1: Lyric = {
  songId: uuidv4(),
  lyricType: LyricType.LYRIC_TYPE_CHORUS,
  verseNumber: 1,
  lyrics: `[Bb]"Great is Thy [Ab/Eb]faithful[Eb]ness!"\n[C7]"Great is Thy [Bbm/F]faithful[Fm]ness!"\n[Bb7]Morning by [Eb]morning new [Bb/F]mercies [F7]I [Bb]see;\n[Bb7]All I have [Eb]needed Thy [Eb]hand [Fm]hath [Eb/G]pro[Fm]vided -\n[Adim7]"Great is Thy [Eb/Bb]faithfulness," Lord, [Bb7]unto [Eb]me!`,
};

// hard coded Data object for Songs with Lyrics
export const TEST_SONG_WITH_LYRIC: SongWithLyrics = {
  song: TEST_SONG,
  lyrics: [TEST_LYRIC_V1, TEST_LYRIC_V2, TEST_LYRIC_V3, TEST_CHORUS_C1],
};

export const TEST_SONG_LIST: Song[] = [TEST_SONG, TEST_SONG_2];
