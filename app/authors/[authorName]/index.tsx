import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StatusBar, View, Text } from "react-native";
import { Song } from "../../../models/SongsApiModels";
import { fetchSongsByAuthor } from "../../../services/SongsApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { SECONDARY_COLOR } from "../../../utils/Constants";
import SongList from "../../../components/SongList";

export default function Page() {
  const { authorName }: { authorName: string } = useLocalSearchParams();
  const [songs, setSongs] = useState<Song[]>([]);
  const [songsByBookId, setSongsByBookId] = useState<Record<string, Song[]>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await fetchSongsByAuthor(authorName);
      setSongs(data);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchSongs();

    navigation.setOptions({ title: `Songs by ${authorName}` });
  }, [authorName]);

  useEffect(() => {
    const groupedSongs: Record<string, Song[]> = {};
    songs.forEach((song) => {
      if (!groupedSongs[song.songbookId]) {
        groupedSongs[song.songbookId] = [];
      }
      groupedSongs[song.songbookId].push(song);
    });
    setSongsByBookId(groupedSongs);
  }, [songs]);

  const navigateToSong = (song: Song) => {
    router.push({
      pathname: "/[songbookId]/[songNumber]",
      params: {
        songbookId: song.songbookId,
        songNumber: song.number,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark items-center justify-start my-4">
      <StatusBar></StatusBar>
      <Text className="text-xl font-semibold text-typography-light dark:text-typography-dark">
        Songs By "{authorName}"
      </Text>
      <Text className="text-sm text-slate-500 dark:text-slate-300">{songs.length} songs found</Text>

      {isLoading ? (
        <View className="w-full">
          <ActivityIndicator size="large" color={SECONDARY_COLOR} />
        </View>
      ) : (
        <SongList songs={songs} onPress={navigateToSong} />
      )}
    </SafeAreaView>
  );
}
