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
  list: {
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  contentContainer: {
    alignSelf: "center",
  },
  item: {
    minWidth: 350,
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
  subTitle: {
    fontSize: 12,
    color: "#4a4a4a",
  },
});
