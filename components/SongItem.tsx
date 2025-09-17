import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Song } from "../models/SongsApiModels";

const itemStructuralClasses = "flex-row items-center py-3 px-3 me-1 ";
const itemBackgroundClasses =
  "bg-background-light dark:bg-background-dark hover:bg-gray-200 active:bg-gray-300 hover:dark:bg-neutral-900 active:dark:bg-neutral-950 ";
const itemBorderClasses = "border-slate-700 dark:border-neutral-600 ";
const itemTextClasses = "text-typography-light dark:text-typography-dark hover:text-gray-950 ";

export const SongItem = ({ song, onPress }: { song: Song; onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    className={itemStructuralClasses + itemBackgroundClasses + itemBorderClasses + itemTextClasses}
  >
    <View className="flex-1 me-5">
      <Text className="text-lg leading-[1.1] font-semibold max-w-full text-inherit">{song.title}</Text>
      <Text className="text-sm text-muted-light dark:text-muted-dark">{song.author}</Text>
    </View>
    <Text className="text-4xl text-inherit leading-none">{song.number}</Text>
  </TouchableOpacity>
);
