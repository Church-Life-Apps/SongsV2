import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { PendingSong, SongWithLyrics } from "../../../../models/SongsApiModels";
import { createSong, fetchSongDetails, fetchSongbookMetadata } from "../../../../services/SongsApi";
import { ICreateSongFormInput, CreateSongForm } from "../../../../components/forms/CreateSongForm";

const ToSongFormInput = (song: SongWithLyrics) : ICreateSongFormInput => {
  return {
    bookId: song.song.songbookId,
    number: song.song.number.toString(),
    title: song.song.title,
    songwriter: song.song.author,
    composer: "",
    presentationOrder: song.song.presentationOrder,
    lyrics: song.lyrics.map((value) => { return { text: value.lyrics, lyricType: value.lyricType }})
  }
}

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
      return { ...lyric, songId: song!.song.id }
    });
    createSong(data);
  }

  if (!song) {
    return (<></>)
  }

  return (
    <SafeAreaView>
      <CreateSongForm onSubmit={onSubmit} defaultValues={ToSongFormInput(song)}/>
    </SafeAreaView>
  );
}

