import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SongListScreen from "./screens/SongListScreen";
import * as Linking from "expo-linking";
import LyricScreen from "./screens/LyricScreen";

const Stack = createNativeStackNavigator();
const prefix = Linking.createURL("/");
const config = {
  screens: {
    Home: "",
    Songlist: ":songbookId",
    //need to add something here but not sure what yet
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Songlist"
          component={SongListScreen}
          options={({ route }) => ({ title: route.params.title })}
        />

        {/*created new Stack for the Lyric Screen, still need to add the correct options for the title to make sense*/}
        <Stack.Screen
          name="Lyric"
          component={LyricScreen}
          options={() => ({})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
