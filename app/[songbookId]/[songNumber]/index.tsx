
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import LyricComponent from '../../../components/LyricComponent';
import { SongWithLyrics } from '../../../models/SongsApiModels';
import { globalStyles } from '../../../styles/GlobalStyles';
import { fetchSongDetails, fetchSongbookMetadata } from '../../../services/SongsApi';

export default function Page() {
  const { songbookId, songNumber: songNumberStr }: { songbookId: string, songNumber: string} = useLocalSearchParams();
  const songNumber = parseInt(songNumberStr, 10);
  const [song, setSong] = useState<SongWithLyrics>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSong = async () => {
      const newSong = await fetchSongDetails(songbookId, songNumber);
      setSong(newSong);
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchSong();
    fetchSongbookMetadata(songbookId).then(meta => navigation.setOptions({ title: `${meta.fullName} #${songNumber}` }));
  }, [songbookId, songNumber])

  return (
    <SafeAreaView style={[globalStyles.container]}>
      {isLoading || !song ? (
        <ActivityIndicator />
      ) : (
        <>
          <LyricComponent songData={song} removeDuplicates={true} displayChords={false} />
        </>
      )}
    </SafeAreaView>
  );
}
