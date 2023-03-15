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
    maxWidth: 400,
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
