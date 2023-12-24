import { Stack, useNavigation } from "expo-router";
import Head from "expo-router/head";
import React from "react";
import { Feather } from "@expo/vector-icons";

export const unstable_settings = {
  // Ensure that reloading on a subroute keeps a back button present.
  initialRouteName: "index",
};

export default function Layout() {
  const navigation = useNavigation();
  return (
    <>
      <Head>
        <title>Hymnal</title>
        <meta name="description" content="A collection of hymnals and spiritual song books" />
      </Head>
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerLeft: () => (
            // ensures the back arrow is consistent across platforms
            <Feather
              name="arrow-left"
              style={{ marginHorizontal: 12, marginVertical: 4 }}
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            backgroundColor: "#a3dbe8",
          },
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Hymnal", headerLeft: undefined }} />
        <Stack.Screen name="[songbookId]/index" options={{ title: "" }} />
        <Stack.Screen name="[songbookId]/[songNumber]/index" options={{ title: "" }} />
      </Stack>
    </>
  );
}
