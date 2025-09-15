import { ActivityIndicator, SafeAreaView, View } from "react-native";
import SongbookList from "../components/SongbookList";
import { useState, useEffect } from "react";
import { Songbook } from "../models/SongsApiModels";
import { fetchSongbooks } from "../services/SongsApi";
import { Href, router } from "expo-router";
import React from "react";
import { SECONDARY_COLOR } from "../utils/Constants";

import "../styles/tailwind-styles.css";

const navigateToSongbookPage = (songbook: Songbook) => {
  router.push({ pathname: "/[songbookId]", params: { songbookId: songbook.id } });
};

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [songbooks, setSongbooks] = useState<Songbook[]>([]);

  useEffect(() => {
    const loadSongbooks = async () => {
      const newSongbooks = await fetchSongbooks();
      setSongbooks(newSongbooks);
      setIsLoading(false);
    };

    loadSongbooks();
  }, []);

  return (
    <SafeAreaView className="items-center justify-center bg-background-light dark:bg-background-dark">
      {isLoading ? (
        <View className="my-4">
          <ActivityIndicator size="large" color={SECONDARY_COLOR} />
        </View>
      ) : (
        <SongbookList songbooks={songbooks} onPress={navigateToSongbookPage}></SongbookList>
      )}
    </SafeAreaView>
  );
}
