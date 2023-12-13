import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import SongList from '../../components/SongList';
import { Song, Songbook } from '../../models/SongsApiModels';
import { fetchSongs, fetchSongbooks, fetchSongbookMetadata } from '../../services/SongsApi';
import { globalStyles } from '../../styles/GlobalStyles';

export default function Page() {
  const { songbookId }: { songbookId: string } = useLocalSearchParams();
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    const loadSongs = async () => {
      const data = await fetchSongs(songbookId);
      console.log("Songs: ", data);
      setSongs(data);
      setIsLoading(false);
    }
    loadSongs();
    fetchSongbookMetadata(songbookId)
      .then(meta => navigation.setOptions({ title: meta.fullName }));
    }, []);

  const navigateToSong = (song: Song) => {
    router.push({
      pathname: "/[songbookId]/[songNumber]",
      params:{
        songbookId: song.songbookId,
        number: song.number,
      }
    });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SongList songs={songs} onPress={navigateToSong} />
      )}
    </SafeAreaView>
  );
}
