import { LyricBlock } from "../../models/LocalModels";
import { Lyric, LyricType, SongWithLyrics } from "../../models/SongsApiModels";
import {
  TEST_CHORUS_C1,
  TEST_LYRIC_V1,
  TEST_LYRIC_V2,
  TEST_LYRIC_V3,
  TEST_SONG,
  TEST_SONG_WITH_LYRIC,
} from "../../models/TempApiObjects";
import {
  convertSongToLyricBlocks,
  getVerseShorthand,
  getVerseTitle,
  getPresentationOrder,
  lyricTypeToString,
} from "../../utils/LyricUtils";

const v1lb: LyricBlock = {
  verseShorthand: "v1",
  verseTitle: "Verse 1",
  lyrics: TEST_LYRIC_V1.lyrics,
};
const v2lb: LyricBlock = {
  verseShorthand: "v2",
  verseTitle: "Verse 2",
  lyrics: TEST_LYRIC_V2.lyrics,
};
const v3lb: LyricBlock = {
  verseShorthand: "v3",
  verseTitle: "Verse 3",
  lyrics: TEST_LYRIC_V3.lyrics,
};
const c1lb: LyricBlock = {
  verseShorthand: "c1",
  verseTitle: "Chorus",
  lyrics: TEST_CHORUS_C1.lyrics,
};

const lyrics = [TEST_LYRIC_V1, TEST_LYRIC_V2, TEST_LYRIC_V3, TEST_CHORUS_C1];

test("Test LyricType toString Method", () => {
  expect(lyricTypeToString(LyricType.LYRIC_TYPE_BRIDGE)).toBe("Bridge");
  expect(lyricTypeToString(LyricType.LYRIC_TYPE_CHORUS)).toBe("Chorus");
  expect(lyricTypeToString(LyricType.LYRIC_TYPE_PRECHORUS)).toBe("Pre-Chorus");
  expect(lyricTypeToString(LyricType.LYRIC_TYPE_VERSE)).toBe("Verse");
});

test("Test GetPresentationOrder method", () => {
  assertJsonEquality(getPresentationOrder("v1 c1 v2 c1 v3 c1", false), ["v1", "c1", "v2", "c1", "v3", "c1"]);
  assertJsonEquality(getPresentationOrder("v1 c1 v2 c1 v3 c1", true), ["v1", "c1", "v2", "v3"]);
  assertJsonEquality(getPresentationOrder("v1, c1, v2, c1, v3, c1", true), ["v1", "c1", "v2", "v3"]);
});

test("Test GetLyricShorthand Method", () => {
  expect(getVerseShorthand(TEST_LYRIC_V1)).toBe("v1");
  expect(getVerseShorthand(TEST_LYRIC_V2)).toBe("v2");
  expect(getVerseShorthand(TEST_LYRIC_V3)).toBe("v3");
  expect(getVerseShorthand(TEST_CHORUS_C1)).toBe("c1");
  const testBridge: Lyric = {
    ...TEST_CHORUS_C1,
    lyricType: LyricType.LYRIC_TYPE_BRIDGE,
  };
  const testPrechorus: Lyric = {
    ...TEST_CHORUS_C1,
    lyricType: LyricType.LYRIC_TYPE_PRECHORUS,
  };
  expect(getVerseShorthand(testBridge)).toBe("b1");
  expect(getVerseShorthand(testPrechorus)).toBe("p1");
});

test("Test GetLyricTitle Method", () => {
  expect(getVerseTitle(lyrics, 0)).toBe("Verse 1");
  expect(getVerseTitle(lyrics, 1)).toBe("Verse 2");
  expect(getVerseTitle(lyrics, 2)).toBe("Verse 3");
  expect(getVerseTitle(lyrics, 3)).toBe("Chorus");
});

test("Test Convert Song to Lyric Blocks", () => {
  assertJsonEquality(convertSongToLyricBlocks(TEST_SONG_WITH_LYRIC, false), [v1lb, c1lb, v2lb, c1lb, v3lb, c1lb]);
  assertJsonEquality(convertSongToLyricBlocks(TEST_SONG_WITH_LYRIC, true), [v1lb, c1lb, v2lb, v3lb]);

  const alternativeSong: SongWithLyrics = {
    song: {
      ...TEST_SONG,
      presentationOrder: "   c1,.. v1,   v5 p1    v3 v3.. v3  ", // wonky on purpose to test for robustness.
    },
    lyrics: lyrics,
  };

  assertJsonEquality(convertSongToLyricBlocks(alternativeSong, false), [c1lb, v1lb, v3lb, v3lb, v3lb, v2lb]);
  assertJsonEquality(convertSongToLyricBlocks(alternativeSong, true), [c1lb, v1lb, v3lb, v2lb]);
});

function assertJsonEquality(one: any, two: any) {
  expect(JSON.stringify(one)).toBe(JSON.stringify(two));
}
