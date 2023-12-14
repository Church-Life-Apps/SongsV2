
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import LyricComponent from '../../../components/LyricComponent';
import { Song } from '../../../models/SongsApiModels';
import { lyricStyles } from '../../../styles/GlobalStyles';

export default function Page() {
  const { songbookId, songNumber }: { songbookId: string, songNumber: string} = useLocalSearchParams();
  const [song, setSong] = useState<Song>({title: "TEST", author: "YOU"} as Song);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  return (
    <View>
      <Text style={lyricStyles.title}>{song.title}</Text>
      <Text style={lyricStyles.author}>by {song.author}</Text>
      <LyricComponent songData={song} removeDuplicates={true} displayChords={false} />
    </View>
  );
}
