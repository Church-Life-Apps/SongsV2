import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { listStyles } from "../styles/GlobalStyles";

const BookItem = ({ songbook, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[listStyles.item]}>
    <Text style={[listStyles.title]}>{songbook.fullName}</Text>
  </TouchableOpacity>
);

const SongbookList = ({ songbooks, onPress }) => {
  return (
    <FlatList
      data={songbooks}
      renderItem={({ item: songbook }) => (
        <BookItem songbook={songbook} onPress={() => onPress(songbook)} />
      )}
      keyExtractor={(item) => item.id}
      style={listStyles.list}
      contentContainerStyle={listStyles.contentContainer}
    />
  );
};

export default SongbookList;
