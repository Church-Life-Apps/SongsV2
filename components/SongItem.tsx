import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { listStyles } from "../styles/GlobalStyles";
import { Song } from "../models/SongsApiModels";

export const SongItem = ({ song, onPress }: { song: Song; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={[listStyles.item]}>
    <Text style={[listStyles.number]}>{song.number}</Text>
    <View style={{ flex: 1 }}>
      <Text style={[listStyles.title]}>{song.title}</Text>
      <Text style={[listStyles.subTitle]}>{song.author}</Text>
    </View>
  </TouchableOpacity>
);
