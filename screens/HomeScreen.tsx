import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Song, Songbook } from "../models/SongsApiModels";
import { fetchSongbooks, fetchSongs } from "../services/SongsApi";
import SongList from "../components/SongList";
import SongbookList from "../components/SongbookList";

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Songbook[]>([]);

  const getSongbooks = async () => {
    const songbooks = await fetchSongbooks();
    setData(songbooks);
    setLoading(false);
  }

  const navigateToSonglist = (songbook: Songbook) => {
    navigation.navigate('Songlist', { songbookId: songbook.id, title: songbook.fullName })
  }

  useEffect(() => {
    getSongbooks();
  }, [])

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (<SongbookList songbooks={data} onPress={navigateToSonglist}></SongbookList>)} 
    </View>
  );
};

export default HomeScreen;
