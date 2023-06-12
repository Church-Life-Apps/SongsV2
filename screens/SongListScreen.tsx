import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Song, Songbook } from "../models/SongsApiModels";
import { fetchSongbooks, fetchSongs } from "../services/SongsApi";
import SongList from "../components/SongList";

const SongListScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Song[]>([]);
  var songbookFullName: String;

  const songbookId = route.params.songbookId;

  const loadSongs = async () => {
    const songs = await fetchSongs(songbookId);
    setData(songs);
    songbookFullName = (await fetchSongbooks()).find(
      (value: Songbook, index: number, obj: Songbook[]) => value.id === songbookId
    ).fullName;
    navigation.setOptions({ title: songbookFullName });
  };

  useEffect(() => {
    setLoading(true);
    loadSongs();
    setLoading(false);
  }, [songbookId]);

  const navigateToSong = (song: Song) => {
    navigation.navigate("Song", {
      songbookId: song.songbookId,
      number: song.number,
    });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SongList songs={data} songbookFullName={songbookFullName} onPress={navigateToSong} />
      )}
    </SafeAreaView>
  );
};

export default SongListScreen;
