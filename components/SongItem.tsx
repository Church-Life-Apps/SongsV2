import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Song } from "../models/SongsApiModels";

const itemStructuralClasses = "flex-row items-center py-4 px-3 my-1 mx-4 ";
const itemBackgroundClasses = "bg-background-light dark:bg-background-dark hover:bg-gray-200 active:bg-gray-300 hover:dark:bg-neutral-900 active:dark:bg-neutral-950 ";
const itemBorderClasses = "border-2 border-s-8 border-slate-700 dark:border-neutral-900 rounded ";
const itemTextClasses = "text-typography-light dark:text-typography-dark hover:text-gray-950 "

export const SongItem = ({ song, onPress }: { song: Song; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} className={itemStructuralClasses + itemBackgroundClasses + itemBorderClasses + itemTextClasses}>
    <Text className="text-4xl me-5 text-inherit">{song.number}</Text>
    <View className="flex-1">
      <Text className="text-lg font-semibold max-w-full text-inherit">{song.title}</Text>
      <Text className="text-xs text-muted-light dark:text-muted-dark">{song.author}</Text>
    </View>
  </TouchableOpacity>
);
