import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SongListScreen from "./screens/SongListScreen";
import * as Linking from "expo-linking";
import SongScreen from "./screens/SongScreen";
import { HeaderBackButton } from "@react-navigation/elements";

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
          options={() => ({
            title: "Select A Songbook!",
            headerBackVisible: false,
            // enforce no headerLeft
            headerLeft: () => {},
          })}
        />
        <Stack.Screen
          name="Songlist"
          component={SongListScreen}
          options={({ navigation }) => ({
            // these options are overidden in the component
            title: "",
            headerLeft: () => <HeaderBackButton onPress={() => navigation.navigate("Home")} />,
          })}
        />
        <Stack.Screen
          name="Song"
          component={SongScreen}
          options={({ navigation }) => ({
            // these options are overidden in the component
            title: "",
            headerLeft: () => <HeaderBackButton />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
