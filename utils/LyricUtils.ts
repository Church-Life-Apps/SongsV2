import { LyricBlock } from "../models/LocalModels";
import { Lyric, LyricType, SongWithLyrics } from "../models/SongsApiModels";
import { removeDoubleSpaces, removePunctuation } from "./StringUtils";

/**
 * Converts a SongWithLyrics object to a LyricBlock List for visualizing the right lyrics in the right order.
 */
export function convertSongToLyricBlocks(songWithLyrics: SongWithLyrics, skipDuplicates: boolean): LyricBlock[] {
  // Get presentation order of lyrics for the song.
  const presentationOrder = getPresentationOrder(songWithLyrics.song.presentationOrder, skipDuplicates);
  const lyrics = songWithLyrics.lyrics;

  // Create a map of presentation order string to LyricBlock using just the lyrics of the song object
  // ie: "v1" -> {<lyric block object>}
  let lyricsMap = new Map<string, LyricBlock>();

  for (let i = 0; i < lyrics.length; i++) {
    const lyric = lyrics[i];
    const verseShorthand = getVerseShorthand(lyric);
    const lyricBlock: LyricBlock = {
      verseShorthand: verseShorthand,
      verseTitle: getVerseTitle(lyrics, i),
      lyrics: lyric.lyrics,
    };
    lyricsMap.set(verseShorthand, lyricBlock);
  }

  // Create an array of LyricBlock objects and add to it based on presentationOrder.
  let lyricBlocks: LyricBlock[] = [];
  for (let i = 0; i < presentationOrder.length; i++) {
    const block = lyricsMap.get(presentationOrder[i]);
    if (block != null) {
      lyricBlocks.push(block);
    }
  }

  // In case presentation order does not contain all the verses available to the song,
  // for added robustness, add all unused lyrics to the back of the lyric block list.
  for (let i = 0; i < presentationOrder.length; i++) {
    lyricsMap.delete(presentationOrder[i]);
  }
  for (let leftoverLyric of lyricsMap.values()) {
    lyricBlocks.push(leftoverLyric);
  }

  // Return the final set of lyric blocks.
  return lyricBlocks;
}

/**
 * Turns presentation order string to the corresponding array of shorthand verse names.
 */
export function getPresentationOrder(presentationOrderString: string, skipDuplicates: boolean): string[] {
  const verseList = removePunctuation(removeDoubleSpaces(presentationOrderString.trim())).split(" ");
  if (skipDuplicates) {
    return [...new Set(verseList)];
  } else {
    return verseList;
  }
}

/**
 * Converts LyricType object to its string form
 */
export function lyricTypeToString(lyricType: LyricType): string {
  if (lyricType === LyricType.LYRIC_TYPE_BRIDGE) {
    return "Bridge";
  } else if (lyricType === LyricType.LYRIC_TYPE_CHORUS) {
    return "Chorus";
  } else if (lyricType === LyricType.LYRIC_TYPE_PRECHORUS) {
    return "Pre-Chorus";
  } else {
    return "Verse";
  }
}

/**
 * Parses the verse shorthand out of a Lyric object.
 */
export function getVerseShorthand(lyric: Lyric): string {
  let lyricType = "";
  if (lyric.lyricType === LyricType.LYRIC_TYPE_BRIDGE) {
    lyricType = "b";
  } else if (lyric.lyricType === LyricType.LYRIC_TYPE_CHORUS) {
    lyricType = "c";
  } else if (lyric.lyricType === LyricType.LYRIC_TYPE_PRECHORUS) {
    lyricType = "p";
  } else {
    lyricType = "v";
  }
  return lyricType + lyric.verseNumber;
}

/**
 * Gets the verse title from a list of lyrics and index.
 * With knowledge of the whole list this function makes 1 optimization by omitting the number if
 * there is only 1 type of that lyricType in the song.
 * ie: Chorus 1 is only needed if there are multiple choruses. If there's only 1 we can omit the "1" and just say "Chorus"
 */
export function getVerseTitle(lyrics: Lyric[], index: number): string {
  const lyricInQuestion = lyrics[index];

  const lyricType = lyricInQuestion.lyricType;

  let containsMultipleOfThisLyricType = false;
  for (let i = 0; i < lyrics.length; i++) {
    const currentLyric = lyrics[i];
    if (i != index && currentLyric.lyricType == lyricType) {
      containsMultipleOfThisLyricType = true;
      break;
    }
  }
  const lyricTypeString = lyricTypeToString(lyricType);
  if (containsMultipleOfThisLyricType) {
    return `${lyricTypeString} ${lyricInQuestion.verseNumber}`;
  } else {
    return lyricTypeString;
  }
}
