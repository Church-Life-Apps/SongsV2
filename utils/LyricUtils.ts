import { LyricField } from "../components/forms/components/VerseCreator";
import { LyricBlock, LineWithChords, ChordWithIndex } from "../models/LocalModels";
import { Lyric, LyricType, SongWithLyrics } from "../models/SongsApiModels";
import { removeDoubleSpaces, removePunctuation, removeSquareBrackets } from "./StringUtils";

const SQUARE_BRACKETS_REGEX = /\[([^\]]+)\]/g;

/**
 * Converts a SongWithLyrics object to a LyricBlock List for visualizing the right lyrics in the right order.
 */
export function convertSongToLyricBlocks(song: SongWithLyrics, skipDuplicates: boolean): LyricBlock[] {
  // Get presentation order of lyrics for the song.
  const presentationOrder = getPresentationOrder(song.presentationOrder, skipDuplicates);
  const lyrics = song.lyrics;

  // Create a map of presentation order string to LyricBlock using just the lyrics of the song object
  // ie: "v1" -> {<lyric block object>}
  const lyricsMap = new Map<string, LyricBlock>();

  for (let i = 0; i < lyrics.length; i++) {
    const lyric = lyrics[i];
    const verseShorthand = getVerseShorthand(lyric);
    const lyricBlock: LyricBlock = {
      verseShorthand: verseShorthand,
      verseTitle: getVerseTitle(lyrics, i),
      lyrics: parseLyricsWithChords(lyric.lyrics),
    };
    lyricsMap.set(verseShorthand, lyricBlock);
  }

  // Create an array of LyricBlock objects and add to it based on presentationOrder.
  const lyricBlocks: LyricBlock[] = [];
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
  for (const leftoverLyric of lyricsMap.values()) {
    lyricBlocks.push(leftoverLyric);
  }

  // Return the final set of lyric blocks.
  return lyricBlocks;
}

/**
 * Converts a SongWithLyrics object to a LyricField List in Presentation order
 */
export function convertSongToLyricFields(song: SongWithLyrics): LyricField[] {
  // Get presentation order of lyrics for the song.
  const presentationOrder = getPresentationOrder(song.presentationOrder, true);
  const lyrics = song.lyrics;

  // Create a map of presentation order string to LyricField using just the lyrics of the song object
  // ie: "v1" -> {<lyric field object>}
  const lyricsMap = new Map<string, LyricField>();

  for (let i = 0; i < lyrics.length; i++) {
    const lyric = lyrics[i];
    const verseShorthand = getVerseShorthand(lyric);
    const lyricBlock: LyricField = {
      text: lyric.lyrics,
      lyricType: lyric.lyricType,
    };
    lyricsMap.set(verseShorthand, lyricBlock);
  }

  // Create an ordered array of LyricField objects in Presentation order.
  const lyricFields: LyricField[] = [];
  for (let i = 0; i < presentationOrder.length; i++) {
    const block = lyricsMap.get(presentationOrder[i]);
    if (block != null) {
      lyricFields.push(block);
    }
  }

  // In case presentation order does not contain all the verses available to the song,
  // for added robustness, add all unused lyrics to the back of the lyric block list.
  for (let i = 0; i < presentationOrder.length; i++) {
    lyricsMap.delete(presentationOrder[i]);
  }
  for (const leftoverLyric of lyricsMap.values()) {
    lyricFields.push(leftoverLyric);
  }

  // Return the final set of lyric blocks.
  return lyricFields;
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

/**
 * Parses the chords out of the lyrics interwoven with chords,
 * returning the lyrics without chords, and the chords by themselves.
 */
export function parseLyricsWithChords(lyrics: string): LineWithChords[] {
  const lines = lyrics.split("\n");

  return lines.map((l) => {
    const line = l.trim();
    const chordsMap: ChordWithIndex[] = [];
    let offset = 0;
    let match: RegExpExecArray | null;
    while ((match = SQUARE_BRACKETS_REGEX.exec(line)) !== null) {
      const index = match.index - offset;
      const chordWithBracket = match[0];
      const chord = match[1];
      chordsMap.push({ index: index, text: chord });
      offset += chordWithBracket.length;
    }
    return { line: removeSquareBrackets(line), chords: chordsMap };
  });
}

/**
 * Expands chord to render as a line of text above the lyrics.
 *
 * TODO: Enhance this: This only renders space between the chords according to the number of
 * characters between each one, but not every character takes up the same number of
 * pixels, so the spacing is gonna be a little off. Possible solution of using a monospaced font.
 */
export function expandChordMap(lineWithChords: LineWithChords): string {
  let chordLine = "";
  let offset = 0;
  lineWithChords.chords.forEach((chord) => {
    chordLine += " ".repeat(chord.index - offset);
    chordLine += chord.text;
    offset = chord.index;
  });
  return chordLine;
}
