import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const lyricStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollViewContainer: {
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 16,
  },
  lyrics: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 0,
    marginLeft: 20,
  },
  chords: {
    fontSize: 16,
    lineHeight: 16,
    marginLeft: 20,
    // fontWeight: "200",
  },
  verseTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
});
