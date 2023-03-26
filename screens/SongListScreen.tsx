import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Song } from "../models/SongsApiModels";
import { fetchSongs } from "../services/SongsApi";
import SongList from "../components/SongList";

const SongListScreen = ({ route }) => {
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

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SongList
          songs={data}
          onPress={(songNumber: Number) => console.log("Go to song view for", songbookId, " #", songNumber)}
        ></SongList>
      )}
    </SafeAreaView>
  );
};

export default SongListScreen;
