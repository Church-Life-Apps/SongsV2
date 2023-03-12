import React from "react";
import { Song } from "../models/SongsApiModels";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const SongItem = ({ song, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title]}>
      {song.number}. {song.title}
    </Text>
    <Text style={[styles.author]}>{song.author}</Text>
  </TouchableOpacity>
);

const SongList = ({ songs }) => {
  const LoadSong = (song: Song) =>
    console.log("load song number ", song.number);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={songs}
        renderItem={({ item: song }) => (
          <SongItem song={song} onPress={() => LoadSong(song)} />
        )}
        keyExtractor={(item) => item.number}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: 400,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginVertical: 4,
    marginHorizontal: 16,
    borderColor: "#4a4a4a",
    borderRadius: 4,
    borderWidth: 1,
    borderLeftWidth: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    fontSize: 12,
    color: "#4a4a4a",
  },
});

export default SongList;
