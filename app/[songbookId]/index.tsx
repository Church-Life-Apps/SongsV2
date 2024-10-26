import { Href, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, TouchableOpacity, StatusBar, Text } from "react-native";
import { useColorScheme } from "nativewind";

import SongList from "../../components/SongList";
import { Song } from "../../models/SongsApiModels";
import { fetchSongs, fetchSongbookMetadata, searchSongs } from "../../services/SongsApi";
import { globalStyles } from "../../styles/GlobalStyles";
import { SearchBar } from "../../components/SearchBar";
import Button from "../../components/Button";

export default function Page() {
  const { songbookId }: { songbookId: string } = useLocalSearchParams();
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const router = useRouter();
  // Use imperatively
  const { colorScheme, setColorScheme } = useColorScheme();

  console.log(colorScheme);

  const loadSongs = async () => {
    const data = await fetchSongs(songbookId);
    setSongs(data);
    setIsLoading(false);
  };

  const navigateToSong = (song: Song) => {
    router.push({
      pathname: "/[songbookId]/[songNumber]",
      params: {
        songbookId: song.songbookId,
        songNumber: song.number,
      },
    } as Href<{ pathname: string }>);
  };
  useEffect(() => {
    loadSongs();
    fetchSongbookMetadata(songbookId).then((meta) => navigation.setOptions({ title: meta.fullName }));
  }, [songbookId]);

  const search = (text: string) => {
    setIsLoading(true);
    if (text.length > 0) {
      searchSongs(text, songbookId).then((filteredSongs) => {
        setSongs(filteredSongs);
        setIsLoading(false);
      });
    } else {
      loadSongs();
    }
  };

  return (
    <SafeAreaView className="bg-background-light dark:bg-background-dark items-center justify-start px-4" style={[globalStyles.container, { }]}>
      <StatusBar></StatusBar>
      <TouchableOpacity className="my-5" onPress={() => {if (colorScheme === "dark") setColorScheme("light"); else setColorScheme("dark")} }><Text className="text-typography-light dark:text-typography-dark">Toggle</Text></TouchableOpacity>
      <SearchBar
        placeholder="Search..."
        className="text-typography-light dark:text-typography-dark"
        onChange={search}
        style={{ width: "80%", maxWidth: 1000, marginHorizontal: 8, fontSize: 20, marginVertical: 8 }}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <SongList songs={songs} onPress={navigateToSong} />
        </>
      )}
    </SafeAreaView>
  );
}
