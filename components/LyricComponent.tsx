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
      <Text className="ms-auto text-xl font-semibold text-zinc-500 dark:text-zinc-400">{songData.number}</Text>
      <Text className="text-center text-4xl font-bold my-2 text-zinc-700 dark:text-gray-200">{songData.title}</Text>
      <View className="mt-2 mb-10">
        {lyricBlocks.map((lyric, lyricIndex) => (
          <View key={`View ${lyricIndex}`} className="my-2">
            <Text
              key={`${lyricIndex}:verseTitle`}
              className="text-xs mb-2 font-semibold uppercase text-zinc-500 dark:text-zinc-400"
            >
              {lyric.verseTitle}
            </Text>
            {lyric.lyrics.map((lineWithChords, lineIndex) => (
              <View key={`View ${lyric.verseShorthand}:${lineIndex}`}>
                {displayChords && lineWithChords.chords.length > 0 ? (
                  <Text key={`${lineIndex}:${lyric.verseShorthand}`} className="text-base ms-6 dark:text-gray-200">
                    {expandChordMap(lineWithChords)}
                  </Text>
                ) : null}
                <Text
                  key={`${lyric.verseShorthand} Line ${lineIndex}`}
                  className="text-lg mb-1 leading-[1.25] ms-6 dark:text-gray-200"
                >
                  {lineWithChords.line}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      {songData.author.length > 0 && (
        <Text className="text-xs text-zinc-500 dark:text-gray-400 mb-2">Words by {songData.author}</Text>
      )}
    </>
  );

  return isMobile() ? (
    <ScrollView className="py-4 px-1">{content}</ScrollView>
  ) : (
    <View className="p-4 flex-1">{content}</View>
  );
};

export default LyricComponent;
