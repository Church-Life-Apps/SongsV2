import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { SongWithLyrics, Song } from "../models/SongsApiModels";
import { fetchSongDetails, fetchSong } from "../services/SongsApi";
import LyricComponent from "../components/LyricComponent";
import { TEST_SONG, TEST_SONG_WITH_LYRIC } from "../models/TempApiObjects";
import SheetMusicComponent from "../components/SheetMusicComponent";

const SongScreen = ({ route }) => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<SongWithLyrics>(TEST_SONG_WITH_LYRIC);
  const [song, setSong] = useState<Song>(TEST_SONG);
  const [sheetMusic, setSheetMusic] = useState<string>(TEST_SONG.imageUrl);

  const songbookId = route.params.songbookId;
  const songNumber = route.params.number;

  const loadLyrics = async () => {
    const lyrics = await fetchSongDetails(songbookId, songNumber);
    setData(lyrics);
    setLoading(false);
  };

  const loadSong = async () => {
    const song = await fetchSong(songbookId, songNumber);
    setSong(song);
    setSheetMusic(song.imageUrl);
    setLoading(false);
  };

  useEffect(() => {
    loadLyrics();
    loadSong();
  }, []);

  //to show SheetMusic Component
  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SheetMusicComponent sheetMusic={sheetMusic} />
      )}
    </SafeAreaView>
  );

  //to show Lyric Component
  /* return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <LyricComponent
          songData={data}
          removeDuplicates={false}
        ></LyricComponent>
      )}
    </SafeAreaView>
  ); */
};

export default SongScreen;
