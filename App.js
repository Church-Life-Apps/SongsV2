import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import SongListScreen from "./screens/SongListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}>
        </Stack.Screen>
        <Stack.Screen
          name="Songlist"
          component={SongListScreen}
          options={({ route }) => ({ title: route.params.title })}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
