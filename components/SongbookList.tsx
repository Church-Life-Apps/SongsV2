import React from "react";
import { Text, Image, TouchableOpacity, View, useWindowDimensions, FlatList } from "react-native";
import { Songbook } from "../models/SongsApiModels";
import { FlatGrid } from "react-native-super-grid";
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
        renderItem={({ item }) => (
          <BookItem songbook={item.data}  onPress={() => onPress(item.data)}></BookItem>
          // <TouchableOpacity
          //   style={{ maxWidth: bookWidth, maxHeight: bookWidth * 1.5 }}
          //   className="cursor-pointer mb-3"
          //   onPress={() => onPress(item.data)}
          // >
          //   <Image
          //     source={images[item.data.id.toUpperCase() as ImageKeys] ?? images["GENERIC"]}
          //     alt="Songbook Cover"
          //     style={{ maxWidth: bookWidth, maxHeight: bookWidth }}
          //     className="border-2 border-gray-900 rounded-lg object-contain"
          //     resizeMode="cover"
          //   />
          //   <Text
          //     className="mt-2 text-center font-normal text-lg whitespace-wrap text-typography-light dark:text-typography-dark"
          //   >
          //     {item.data.fullName}
          //   </Text>
          // </TouchableOpacity>
        )}
      />
  );
};

export default SongbookList;
