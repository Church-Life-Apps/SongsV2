import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SongListScreen from "./screens/SongListScreen";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();
const prefix = Linking.createURL("/");
const config = {
  screens: {
    Home: "",
    Songlist: ":songbookId",
  },
};
const linking = {
  prefixes: [prefix],
  config,
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Songlist"
          component={SongListScreen}
          options={({ route }) => ({ title: route.params.title })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
