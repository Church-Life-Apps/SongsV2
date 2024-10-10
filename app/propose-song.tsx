import { SafeAreaView } from "react-native";
import { CreateSongForm, CreateSongFormSubmissionData } from "../components/forms/CreateSongForm";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import React from "react";
import { Lyric, LyricType, PendingSong } from "../models/SongsApiModels";
import { v4 as uuidv4 } from "uuid";
import { createSong } from "../services/SongsApi";

export default function Page() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Propose a Song" });
  }, []);

  const onSubmit = (data: CreateSongFormSubmissionData) => {
    const songId = uuidv4().toString()
    const lyricCounts = { 
      [LyricType.LYRIC_TYPE_BRIDGE]: 0,
      [LyricType.LYRIC_TYPE_CHORUS]: 0,
      [LyricType.LYRIC_TYPE_PRECHORUS]: 0,
      [LyricType.LYRIC_TYPE_VERSE]: 0
    };
    const song : PendingSong = {
      id: songId,
      songbookId: data.bookId,
      number: parseInt(data.number, 10),
      title: data.title,
      author: data.songwriter,
      music: data.composer,
      presentationOrder: "",
      imageUrl: "",
      audioUrl: "",
      lyrics: data.lyrics.map((value => {
        return {
          songId: songId, // uuid
          lyricType: value.lyricType,
          verseNumber: ++lyricCounts[value.lyricType],
          lyrics: value.text
        } as Lyric;
      })),
      requesterName: "",
      requesterEmail: "",
      requesterNote: ""
    };
    console.log(song);
    createSong(song, "my key");
  }

  return (
    <SafeAreaView>
      <CreateSongForm onSubmit={onSubmit}/>
    </SafeAreaView>
  );
}
