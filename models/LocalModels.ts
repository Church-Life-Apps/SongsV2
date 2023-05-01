/**
 * LyricBlock Data Type
 */
export interface LyricBlock {
  verseShorthand: string;
  verseTitle: string;
  lyrics: LineWithChords[];
}

/**
 * Single line with chords object. Multiple of these create a verse.
 */
export interface LineWithChords {
  line: string;
  chords: ChordWithIndex[];
}

// Map of index of the string where the chord is to the chord string.
export interface ChordWithIndex {
  index: number;
  text: string;
}
