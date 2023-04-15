import React from "react";
import { View, Text } from "react-native";
import { Song } from "../models/SongsApiModels";
import { lyricStyles } from "../styles/GlobalStyles";
import { convertSongToLyricBlocks } from "../utils/LyricUtils";

//define the component props
interface SheetMusicComponentProps {
  sheetMusic: string;
}

const SheetMusicComponent: React.FC<SheetMusicComponentProps> = (
  sheetMusic
) => {
  console.log(sheetMusic);

  //need to figure out what should actually be returned
  return (
    <View>
      <Text>{`${sheetMusic}`}</Text>
    </View>
  );
};

export default SheetMusicComponent;
