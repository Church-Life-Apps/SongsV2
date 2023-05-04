import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { SongWithLyrics, Songbook } from "../models/SongsApiModels";
import { fetchSongDetails, fetchSongbooks } from "../services/SongsApi";
import LyricComponent from "../components/LyricComponent";
import { TEST_SONG_WITH_LYRIC } from "../models/TempApiObjects";
import { HeaderBackButton } from "@react-navigation/elements";

const SongScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<SongWithLyrics>(TEST_SONG_WITH_LYRIC);
  let songbookFullName: String;

  const songbookId = route.params.songbookId;
  const songNumber = route.params.number;

  const loadLyrics = async () => {
    const lyrics = await fetchSongDetails(songbookId, songNumber);
    setData(lyrics);
    setLoading(false);

    songbookFullName = (await fetchSongbooks()).find(
      (value: Songbook, index: number, obj: Songbook[]) =>
        value.id === songbookId
    ).fullName;
    navigation.setOptions({
      title: `${songbookFullName} #${songNumber}`,
      headerLeft: () => (
        <HeaderBackButton
          onPress={() =>
            navigation.navigate("Songlist", {
              songbookId: songbookId,
            })
          }
        />
      ),
    });
  };

  useEffect(() => {
    loadLyrics();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        // TODO: Make these configurable from user preferences.
        <LyricComponent
          songData={data}
          removeDuplicates={false}
          displayChords={false}
        ></LyricComponent>
      )}
    </SafeAreaView>
  );
};

export default SongScreen;
