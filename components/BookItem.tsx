import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Songbook } from "../models/SongsApiModels";

export const BookItem = ({ songbook, onPress }: { songbook: Songbook; onPress: any }) => (
  <TouchableOpacity className="flex-row items-center py-4 px-3 my-1 mx-4 rounded border border-s-8" onPress={onPress}>
    <Text className="text-base font-bold max-w-full">{songbook.fullName}</Text>
  </TouchableOpacity>
);
