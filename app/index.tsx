import { ActivityIndicator, SafeAreaView } from 'react-native';

import SongbookList from '../components/SongbookList';
import { useState, useEffect } from 'react';
import { Songbook } from '../models/SongsApiModels';
import { fetchSongbooks } from '../services/SongsApi';
import { globalStyles } from "../styles/GlobalStyles";
import { Href, router } from 'expo-router';

const navigateToSongbookPage = (songbook: Songbook) => {
  console.log("navigate to ", songbook);
  router.push({ pathname: "/[songbookId]", params: { songbookId: songbook.id}} as Href<{ pathname: string }>)
};

export default function Page() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [songbooks, setSongbooks] = useState<Songbook[]>([]);
  
  useEffect(() => {
    const loadSongbooks = async () => {
      console.log("home");
      const newSongbooks = await fetchSongbooks();
      console.log("songbooks: ", newSongbooks);
      setSongbooks(newSongbooks);
      setIsLoading(false);
    };

    loadSongbooks();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? 
        <ActivityIndicator /> 
        : <SongbookList songbooks={songbooks} onPress={navigateToSongbookPage}></SongbookList>}
    </SafeAreaView>
  );
}
