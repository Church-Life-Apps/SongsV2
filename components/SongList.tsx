import React from "react";
import { FlatList, Text } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Song } from "../models/SongsApiModels";
import { SongItem } from "./SongItem";

const SongList = ({ songs, onPress }: { songs: Song[]; onPress: (item: Song) => void }) => {
  return (
    <>
      {songs.length === 0 ? (
        <Text>No songs found for this book.</Text>
      ) : (
        <FlatList
          data={songs}
          renderItem={({ item }: { item: Song }) => <SongItem song={item} onPress={() => onPress(item)} />}
          keyExtractor={(item: Song) => item.number.toString()}
          style={listStyles.list}
          contentContainerStyle={listStyles.contentContainer}
        />
      )}
    </>
  );
};

export default SongList;
