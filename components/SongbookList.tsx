import React from "react";
import { FlatList } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Songbook } from "../models/SongsApiModels";
import { BookItem } from "./BookItem";

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
