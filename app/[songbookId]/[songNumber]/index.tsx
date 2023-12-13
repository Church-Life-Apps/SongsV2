
import { useLocalSearchParams } from 'expo-router';

import { Text } from 'react-native';

export default function Page() {
  const { songbookId, songNumber }: { songbookId: string, songNumber: string} = useLocalSearchParams();

  return <Text>Get the song #{songNumber} as found in {songbookId}</Text>;
}
