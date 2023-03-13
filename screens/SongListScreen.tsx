import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Song, Songbook } from "../models/SongsApiModels";
import { fetchSongs } from "../services/SongsApi";
import SongList from "../components/SongList";

const SongListScreen = ({naviation, route}) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Song[]>([]);

  const songbookId = route.params.songbookId

  const getSongs = async () => {
    const songs = await fetchSongs(songbookId);
    setData(songs);
    setLoading(false);
  }

  useEffect(() => {
    getSongs();
  }, [])

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (<SongList songs={data} onPress={(songNumber: Number) => console.log("Go to song view for", songbookId, " #", songNumber)}></SongList>)} 
    </View>
  );
};

export default SongListScreen;
