import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import LyricComponent from "../../../components/LyricComponent";
import { SongWithLyrics } from "../../../models/SongsApiModels";
import { globalStyles } from "../../../styles/GlobalStyles";
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
      navigation.setOptions({ title: `${meta.fullName} #${songNumber}` })
    );
    if (index === 1 && song?.song.imageUrl == null) {
      setIndex(0);
    }
  }, [songbookId, songNumber]);

  return (
    <>
      {isLoading || !song ? (
        <SafeAreaView className="bg-slate-100 dark:bg-zinc-700 items-center justify-start px-4" style={[globalStyles.container]} >
          <ActivityIndicator />
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <TabBar onChange={setIndex} value={index} style={{ marginTop: 16, justifyContent: "center" }}>
            <Tab title="Lyrics" hide={song.song.imageUrl == ""} />
            <Tab title="Music" hide={song.song.imageUrl == ""} />
          </TabBar>
          <TabView active={index === 0}>
            <View style={[globalStyles.container, { paddingBottom: 64 }]}>
              <LyricComponent songData={song} removeDuplicates={false} displayChords={false} />
            </View>
          </TabView>
          <TabView active={index === 1}>
            <SheetMusicComponent imageUrl={song.song.imageUrl} />
          </TabView>
        </SafeAreaView>
      )}
    </>
  );
}
