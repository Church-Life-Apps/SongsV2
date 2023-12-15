import React from "react";
import { FlatList, Text, View } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Song } from "../models/SongsApiModels";
import { SafeAreaView } from "react-native-safe-area-context";
import { SongItem } from "./SongItem";

const SongList = ({ songs, onPress }: {songs: Song[], onPress: any}) => {
  return (
    <>
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
  </>
  );
};

export default SongList;
