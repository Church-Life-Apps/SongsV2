import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, Button, SafeAreaView, ScrollView, View } from "react-native";
import LyricComponent from "../../../components/LyricComponent";
import { SongWithLyrics } from "../../../models/SongsApiModels";
import { globalStyles } from "../../../styles/GlobalStyles";
import { fetchSongDetails, fetchSongbookMetadata } from "../../../services/SongsApi";
import SheetMusicComponent from "../../../components/SheetMusicComponent";

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
  }, [songbookId, songNumber]);

  return (
    <>
      {isLoading || !song ? (
        <SafeAreaView style={[globalStyles.container]}>
          <ActivityIndicator />
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <View style={{ alignItems: "center", marginVertical: 16, flexDirection: "row", justifyContent: "center" }}>
            <Button title="Text" onPress={() => setIndex(0)} />
            <Button title="Piano" onPress={() => setIndex(1)} />
          </View>
          {index === 0 ? (
            <ScrollView style={{ backgroundColor: "#fff" }}>
              <View style={[globalStyles.container, { paddingBottom: 64 }]}>
                <LyricComponent songData={song} removeDuplicates={true} displayChords={false} />
              </View>
            </ScrollView>
          ) : (
            <SheetMusicComponent imageUrl={song.song.imageUrl} />
          )}
        </SafeAreaView>
      )}
    </>
  );
}
