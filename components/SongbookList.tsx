import React from "react";
import { Song, Songbook } from "../models/SongsApiModels";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const BookItem = ({ songbook, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title]}>
      {songbook.fullName}
    </Text>
  </TouchableOpacity>
);

const SongbookList = ({ songbooks, onPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={songbooks}
        renderItem={({ item: songbook }) => (
          <BookItem songbook={songbook} onPress={() => onPress(songbook)} />
        )}
        keyExtractor={(item) => item.id}
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

export default SongbookList;
