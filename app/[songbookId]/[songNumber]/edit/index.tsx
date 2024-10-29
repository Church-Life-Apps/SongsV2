import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { PendingSong, SongWithLyrics } from "../../../../models/SongsApiModels";
import { createSong, fetchSongDetails, fetchSongbookMetadata } from "../../../../services/SongsApi";
import { CreateSongForm } from "../../../../components/forms/CreateSongForm";
import { songWithLyricsToSongFormInput } from "../../../../utils/SongFormUtils";

export default function Page() {
  const { songbookId, songNumber: songNumberStr }: { songbookId: string; songNumber: string } = useLocalSearchParams();
  const songNumber = parseInt(songNumberStr, 10);
  const [song, setSong] = useState<SongWithLyrics>();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSong = async () => {
      const newSong = await fetchSongDetails(songbookId, songNumber);
      setSong(newSong);
    };
    fetchSong();
    fetchSongbookMetadata(songbookId).then((meta) =>
      navigation.setOptions({ title: `EDITING ${meta.fullName} #${songNumber}` })
    );
  }, [songbookId, songNumber]);

  const onSubmit = (data: PendingSong) => {
    data.id = song!.song.id;
    data.lyrics = data.lyrics.map((lyric) => {
      return { ...lyric, songId: song!.song.id };
    });
    createSong(data).then((json) => {
      if (json.status === 200) alert("Song updated");
      else alert("Error while saving song");
    });
  };

  if (!song) {
    return <></>;
  }

  return (
    <SafeAreaView className="bg-background-light dark:bg-background-dark">
      <CreateSongForm onSubmit={onSubmit} defaultValues={songWithLyricsToSongFormInput(song)} />
    </SafeAreaView>
  );
}
