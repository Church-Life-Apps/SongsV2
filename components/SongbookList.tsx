import React, { useEffect, useState } from "react";
import { FlatList, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Songbook } from "../models/SongsApiModels";
import { fetchSongbooks } from "../services/SongsApi";

const BookItem = ({ songbook, onPress } : {songbook: Songbook, onPress: any}) => (
  <TouchableOpacity onPress={onPress} style={[listStyles.item]}>
    <Text style={[listStyles.title]}>{songbook.fullName}</Text>
  </TouchableOpacity>
);

const SongbookList = ({ songbooks, onPress }: { songbooks: Songbook[], onPress: any}) => {
  return (
    <FlatList
      data={songbooks}
      renderItem={({ item }) => <BookItem songbook={item} onPress={() => onPress(item)} />}
      keyExtractor={(item) => item.id}
      style={listStyles.list}
      contentContainerStyle={listStyles.contentContainer}
    />
  );
};

export default SongbookList;
