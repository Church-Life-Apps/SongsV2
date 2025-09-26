import { CreateSongForm } from "../components/forms/CreateSongForm";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import React from "react";
import { PendingSong } from "../models/SongsApiModels";
import { createSong } from "../services/SongsApi";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Propose a Song" });
  }, []);

  const onSubmit = (data: PendingSong) => {
    createSong(data).then((json) => {
      if (json.status === 201) alert("Song created");
      else alert("Error while creating song");
    });
  };

  return (
    <SafeAreaView className="bg-background-light dark:bg-background-dark">
      <CreateSongForm onSubmit={onSubmit} />
    </SafeAreaView>
  );
}
