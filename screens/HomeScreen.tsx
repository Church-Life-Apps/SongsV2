import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Songbook } from "../models/SongsApiModels";
import { fetchSongbooks } from "../services/SongsApi";
import SongbookList from "../components/SongbookList";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Songbook[]>([]);

  const getSongbooks = async () => {
    const songbooks = await fetchSongbooks();
    setData(songbooks);
    setLoading(false);
  };

  const navigateToSonglist = (songbook: Songbook) => {
    navigation.navigate("Songlist", {
      songbookId: songbook.id,
      title: songbook.fullName,
    });
  };

  useEffect(() => {
    getSongbooks();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? <ActivityIndicator /> : <SongbookList songbooks={data} onPress={navigateToSonglist}></SongbookList>}
    </SafeAreaView>
  );
};

export default HomeScreen;
