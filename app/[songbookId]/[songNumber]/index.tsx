import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import LyricComponent from "../../../components/LyricComponent";
import { SongWithLyrics } from "../../../models/SongsApiModels";
import { fetchSongDetails, fetchSongbookMetadata } from "../../../services/SongsApi";
import SheetMusicComponent from "../../../components/SheetMusicComponent";
import { TabBar, Tab, TabView } from "../../../components/Tab";

export default function Page() {
  const { songbookId, songNumber: songNumberStr }: { songbookId: string; songNumber: string } = useLocalSearchParams();
  const songNumber = parseInt(songNumberStr, 10);
  const [song, setSong] = useState<SongWithLyrics>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSong = async () => {
      const newSong = await fetchSongDetails(songbookId, songNumber);
      setSong(newSong);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchSong();
    fetchSongbookMetadata(songbookId).then((meta) =>
      navigation.setOptions({ title: `${meta.fullName}` })
    );
    if (index === 1 && song?.imageUrl == null) {
      setIndex(0);
    }
  }, [songbookId, songNumber]);

  return (
    <>
      {isLoading || !song ? (
        <SafeAreaView className="bg-background-light dark:bg-background-dark items-center justify-start px-4">
          <ActivityIndicator />
        </SafeAreaView>
      ) : (
        <SafeAreaView className="bg-background-light dark:bg-background-dark items-center justify-start px-4">
          <TabBar className="justify-center mt-4" onChange={setIndex} value={index}>
            <Tab title="Lyrics" hide={song.imageUrl == ""} />
            <Tab title="Music" hide={song.imageUrl == ""} />
          </TabBar>
          <TabView active={index === 0}>
            <View className="pb-5">
              <LyricComponent songData={song} removeDuplicates={false} displayChords={false} />
            </View>
          </TabView>
          <TabView active={index === 1}>
            <SheetMusicComponent imageUrl={song.imageUrl} />
          </TabView>
        </SafeAreaView>
      )}
    </>
  );
}
