import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Song } from "../models/SongsApiModels";
import { SafeAreaView } from "react-native-safe-area-context";

const SongItem = ({ song, onPress }: {song:Song, onPress: any}) => (
  <TouchableOpacity onPress={onPress} style={[listStyles.item]}>
    <Text style={[listStyles.title]}>
      {song.number}. {song.title}
    </Text>
    <Text style={[listStyles.subTitle]}>{song.author}</Text>
  </TouchableOpacity>
);

const SongList = ({ songs, onPress }: {songs: Song[], onPress: any}) => {
  return (
    <SafeAreaView>
    { songs.length === 0 ? 
      (<Text>No songs found for this book.</Text>)
      : <FlatList
          data={songs}
          renderItem={({ item }: { item: Song }) => <SongItem song={item} onPress={() => onPress(item)} />}
          keyExtractor={(item:Song) => item.number.toString()}
          style={listStyles.list}
          contentContainerStyle={listStyles.contentContainer}
        />
    }
  </SafeAreaView>
  );
};

export default SongList;
