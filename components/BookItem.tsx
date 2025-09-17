import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { Songbook } from "../models/SongsApiModels";

const images = {
  SHL: require("../assets/images/book_covers/SHL.jpg"),
  SFOG: require("../assets/images/book_covers/SFOG.png"),
  GENERIC: require("../assets/images/book_covers/generic.jpg"),
  // Add more book cover images here
};

type ImageKeys = keyof typeof images; // "SHL" | "SFOG" | "GENERIC"

const itemBackgroundClasses =
  "bg-background-light dark:bg-background-dark hover:bg-gray-200 active:bg-gray-300 hover:dark:bg-neutral-900 active:dark:bg-neutral-950 ";

export const BookItem = ({ songbook, onPress }: { songbook: Songbook; onPress: any }) => (
  <TouchableOpacity
    className={"flex-row items-center py-1 px-4 my-1 border-slate-700 dark:border-neutral-600 " + itemBackgroundClasses}
    onPress={onPress}
  >
    <Image
      source={images[songbook.id.toUpperCase() as ImageKeys] ?? images["GENERIC"]}
      alt="Songbook Cover"
      style={{ width: 64, height: 64 }}
      className="rounded object-contain me-4"
      resizeMode="cover"
    />
    <Text className="text-lg text-typography-light dark:text-typography-dark hover:text-gray-950 max-w-full">
      {songbook.fullName}
    </Text>
  </TouchableOpacity>
);
