import React from "react";
import { useWindowDimensions, FlatList } from "react-native";
import { Songbook } from "../models/SongsApiModels";
import { BookItem } from "./BookItem";

const SongbookList = ({ songbooks, onPress }: { songbooks: Songbook[]; onPress: (item: Songbook) => void }) => {
  const { width: windowWidth } = useWindowDimensions();
  const images = {
    SHL: require("../assets/images/book_covers/SHL.jpg"),
    SFOG: require("../assets/images/book_covers/SFOG.png"),
    GENERIC: require("../assets/images/book_covers/generic.jpg"),
    // Add more book cover images here
  };

  type ImageKeys = keyof typeof images; // "SHL" | "SFOG" | "GENERIC"
  const bookWidth =
    windowWidth > 700
      ? Math.min(windowWidth / 3 - 25, 325)
      : windowWidth > 400
      ? Math.floor(windowWidth / 2) - 30
      : Math.min(windowWidth - 40, 380);

  return (
    <FlatList
      className="w-full pt-5"
      contentContainerClassName="w-full max-w-5xl self-center"
      data={songbooks.map((book) => ({
        data: book,
      }))}
      renderItem={({ item }) => <BookItem songbook={item.data} onPress={() => onPress(item.data)}></BookItem>}
    />
  );
};

export default SongbookList;
