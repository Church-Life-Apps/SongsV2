import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Song, SongWithLyrics } from "../models/SongsApiModels";
import { fetchSongDetails, fetchSongs } from "../services/SongsApi";
import LyricComponent from "../components/LyricComponent";

const LyricScreen = ({ route }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<SongWithLyrics>();

  const songbookId = route.params.songbookId;
  const songNumber = route.params.songNumber;

  const loadLyrics = async () => {
    const lyrics = await fetchSongDetails(songbookId,songNumber);
    setData(lyrics);
    setLoading(false);
  };

  useEffect(() => {
    loadLyrics();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? <ActivityIndicator /> : <Text>Test</Text>}
    </SafeAreaView>
  );
};

export default LyricScreen;

//need to finish by using LyricComponent instead of placeholder Text - DL
