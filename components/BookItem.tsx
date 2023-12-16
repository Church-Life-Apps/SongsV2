import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Songbook } from "../models/SongsApiModels";

export const BookItem = ({ songbook, onPress }: { songbook: Songbook; onPress: any; }) => (
  <TouchableOpacity onPress={onPress} style={[listStyles.item]}>
    <Text style={[listStyles.title]}>{songbook.fullName}</Text>
  </TouchableOpacity>
);
