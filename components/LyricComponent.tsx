import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SongWithLyrics } from "../models/SongsApiModels";
import { lyricStyles } from "../styles/GlobalStyles";
import { convertSongToLyricBlocks, expandChordMap } from "../utils/LyricUtils";
import { isMobile } from "../utils/PlatformUtils";

// Define the component props
interface LyricComponentProps {
  songData: SongWithLyrics;
  removeDuplicates: boolean;
  displayChords: boolean;
}

const LyricComponent: React.FC<LyricComponentProps> = ({ songData, removeDuplicates, displayChords }) => {
  const song = songData.song;
  const lyricBlocks = convertSongToLyricBlocks(songData, removeDuplicates);

  const content = (
    <>
      <Text style={lyricStyles.title}>{song.title}</Text>
      <Text style={lyricStyles.author}>by {song.author}</Text>
      {lyricBlocks.map((lyric, lyricIndex) => (
        <View key={`View ${lyricIndex}`}>
          <Text key={`${lyricIndex}:verseTitle`} style={lyricStyles.verseTitle}>
            {lyric.verseTitle}
          </Text>
          {lyric.lyrics.map((lineWithChords, lineIndex) => (
            <View key={`View ${lyric.verseShorthand}:${lineIndex}`}>
              {displayChords && lineWithChords.chords.length > 0 ? (
                <Text key={`${lineIndex}:${lyric.verseShorthand}`} style={lyricStyles.chords}>
                  {expandChordMap(lineWithChords)}
                </Text>
              ) : null}
              <Text key={`${lyric.verseShorthand} Line ${lineIndex}`} style={lyricStyles.lyrics}>
                {lineWithChords.line}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </>
  );

  return isMobile() ? (
    <ScrollView contentContainerStyle={lyricStyles.scrollViewContainer}>{content}</ScrollView>
  ) : (
    <View style={lyricStyles.container}>{content}</View>
  );
};

export default LyricComponent;
