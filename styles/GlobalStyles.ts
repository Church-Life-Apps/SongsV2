import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const listStyles = StyleSheet.create({
  // the list container
  list: {
    // 100% width otherwise the scrollable area for the list is only where the items themselves are
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  // the inner list container. Items are placed in here
  contentContainer: {
    alignSelf: "center",
    maxWidth: 400,
  },
  // Individual list item
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginVertical: 4,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderColor: "#4a4a4a",
    borderRadius: 4,
    borderWidth: 1,
    borderLeftWidth: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // Smaller, gray colored text. Used for author
  subTitle: {
    fontSize: 12,
    color: "#4a4a4a",
  },
});

export const lyricStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
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
