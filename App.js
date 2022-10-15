import React from "react";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { globalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <HomeScreen />
    </View>
  );
}
