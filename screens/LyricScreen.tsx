import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { SongWithLyrics } from "../models/SongsApiModels";
import { fetchSongDetails } from "../services/SongsApi";
import LyricComponent from "../components/LyricComponent";
import { TEST_SONG_WITH_LYRIC } from "../models/TempApiObjects";

const LyricScreen = ({ route }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<SongWithLyrics>(TEST_SONG_WITH_LYRIC);

  const songbookId = route.params.songbookId;
  const songNumber = route.params.number;

  const loadLyrics = async () => {
    const lyrics = await fetchSongDetails(songbookId, songNumber);
    setData(lyrics);
    setLoading(false);
  };

  useEffect(() => {
    loadLyrics();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? <ActivityIndicator /> : <LyricComponent songData={data} removeDuplicates={false}></LyricComponent>}
    </SafeAreaView>
  );
};

export default LyricScreen;