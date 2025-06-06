import React from "react";
import { FlatList, Text } from "react-native";
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
          className="w-full pt-5"
          contentContainerClassName="w-full max-w-5xl self-center"
        />
      )}
    </>
  );
};

export default SongList;
