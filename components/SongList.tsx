import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { listStyles } from "../styles/GlobalStyles";

const SongItem = ({ song, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[listStyles.item]}>
    <Text style={[listStyles.title]}>
      {song.number}. {song.title}
    </Text>
    <Text style={[listStyles.subTitle]}>{song.author}</Text>
  </TouchableOpacity>
);

const SongList = ({ songs, songbookFullName, onPress }) => {
  return (
    <FlatList
      data={songs}
      renderItem={({ item: song }) => <SongItem song={song} onPress={() => onPress(song, songbookFullName)} />}
      keyExtractor={(item) => item.number}
      style={listStyles.list}
      contentContainerStyle={listStyles.contentContainer}
    />
  );
};

export default SongList;
