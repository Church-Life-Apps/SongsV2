import React from "react";
import { StyleSheet, View } from "react-native-web";
import RandomSongGenerator from "./RandomSongGenerator";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RandomSongGenerator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
