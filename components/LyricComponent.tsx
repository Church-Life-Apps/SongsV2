import React from "react";
import { View, Text } from "react-native";
import { SongWithLyrics } from "../models/SongsApiModels";
import { lyricStyles } from "../styles/GlobalStyles";
import { convertSongToLyricBlocks } from "../utils/LyricUtils";

// Define the component props
interface LyricComponentProps {
  songData: SongWithLyrics;
  removeDuplicates: boolean;
}

const LyricComponent: React.FC<LyricComponentProps> = ({ songData, removeDuplicates }) => {
  const song = songData.song;
  const lyricBlocks = convertSongToLyricBlocks(songData, removeDuplicates);

  return (
    <View style={lyricStyles.container}>
      <Text style={lyricStyles.title}>{song.title}</Text>
      <Text style={lyricStyles.author}>by {song.author}</Text>
      {lyricBlocks.map((lyric, index) => (
        <View key={`View ${index}`}>
          <Text key={`${index}:verseTitle`} style={lyricStyles.verseTitle}>
            {lyric.verseTitle}
          </Text>
          <Text key={`${index}:${lyric.verseShorthand}`} style={lyricStyles.lyrics}>
            {lyric.lyrics}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default LyricComponent;
