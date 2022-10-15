import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import RandomSongGenerator from "./RandomSongGenerator";

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <RandomSongGenerator />
    </View>
  );
};

export default HomeScreen;
