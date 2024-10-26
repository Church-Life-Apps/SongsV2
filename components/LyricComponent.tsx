import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SongWithLyrics } from "../models/SongsApiModels";
import { convertSongToLyricBlocks, expandChordMap } from "../utils/LyricUtils";
import { isMobile } from "../utils/PlatformUtils";

// Define the component props
interface LyricComponentProps {
  songData: SongWithLyrics;
  removeDuplicates: boolean;
  displayChords: boolean;
}

const LyricComponent: React.FC<LyricComponentProps> = ({ songData, removeDuplicates, displayChords }) => {
  const lyricBlocks = convertSongToLyricBlocks(songData, removeDuplicates);

  const content = (
    <>
      <Text className="text-4xl font-bold my-2 dark:text-gray-200">{songData.song.title}</Text>
      { songData.song.author.length > 0 && <Text className="dark:text-gray-400 mb-2">by {songData.song.author}</Text>}
      {lyricBlocks.map((lyric, lyricIndex) => (
        <View key={`View ${lyricIndex}`}>
          <Text key={`${lyricIndex}:verseTitle`} className="text-base font-bold mt-4 dark:text-gray-200">
            {lyric.verseTitle}
          </Text>
          {lyric.lyrics.map((lineWithChords, lineIndex) => (
            <View key={`View ${lyric.verseShorthand}:${lineIndex}`}>
              {displayChords && lineWithChords.chords.length > 0 ? (
                <Text key={`${lineIndex}:${lyric.verseShorthand}`} className="text-base ms-6 dark:text-gray-200">
                  {expandChordMap(lineWithChords)}
                </Text>
              ) : null}
              <Text key={`${lyric.verseShorthand} Line ${lineIndex}`} className="dark:text-gray-200">
                {lineWithChords.line}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </>
  );

  return isMobile() ? (
    <ScrollView className="py-4 px-1">{content}</ScrollView>
  ) : (
    <View className="p-4 flex-1">{content}</View>
  );
};

export default LyricComponent;
