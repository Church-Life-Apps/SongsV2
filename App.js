import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SongListScreen from "./screens/SongListScreen";
import * as Linking from "expo-linking";
import SongScreen from "./screens/SongScreen";

const Stack = createNativeStackNavigator();
const prefix = Linking.createURL("/");
const config = {
  screens: {
    Home: "/",
    Songlist: ":songbookId",
    Song: ":songbookId/:number",
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({ title: "Select A Songbook!" })}
        />
        <Stack.Screen
          name="Songlist"
          component={SongListScreen}
          options={({ route }) => ({
            title: route.params.title,
            // TODO: Add permananent Back button to the header bar using headerLeft option to Home screen
          })}
        />
        <Stack.Screen
          name="Song"
          component={SongScreen}
          options={({ route }) => ({
            songbookId: route.params.songbookId,
            number: route.params.number,
            title: route.params.title,
            // TODO: Add permananent Back button to the header bar using headerLeft option to Songlist screen
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
