import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const initialNum = Math.floor(Math.random() * 533) + 1;
const link = "https://raw.githubusercontent.com/Church-Life-Apps/Resources/master/resources/images/shl/SHL_";
const suffix = ".png";

export default function App() {
  const [num, setNum] = React.useState(initialNum);

  let refreshNum = async () => {
    setNum(Math.floor(Math.random() * 533) + 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: link + String(num).padStart(3, "0") + suffix }} style={styles.image}></Image>
      <TouchableOpacity onPress={refreshNum} style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 50,
  },
  image: {
    width: 600,
    height: 600,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "cyan",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
