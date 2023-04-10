import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Song } from "../models/SongsApiModels";
import { fetchSongs } from "../services/SongsApi";
import SongList from "../components/SongList";

const SongListScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Song[]>([]);

  const songbookId = route.params.songbookId;

  const loadSongs = async () => {
    const songs = await fetchSongs(songbookId);
    setData(songs);
    setLoading(false);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const navigateToSong = (song: Song) => {
    navigation.navigate("Song", {
      songbookId: song.songbookId,
      number: song.number,
    });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? <ActivityIndicator /> : <SongList songs={data} onPress={navigateToSong} />}
    </SafeAreaView>
  );
};

export default SongListScreen;
