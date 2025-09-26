import { router, Stack, usePathname } from "expo-router";
import colors from "tailwindcss/colors";
import Head from "expo-router/head";
import React from "react";
import { Feather } from "@expo/vector-icons";

// Import tailwind styles
import "../styles/tailwind-styles.css";
import { StatusBar } from "react-native";
import { useColorScheme } from "nativewind";
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export const unstable_settings = {
  // Ensure that reloading on a subroute keeps a back button present.
  initialRouteName: "index",
};

export default function Layout() {
  console.log("Rendering Layout");
  const { colorScheme, setColorScheme } = useColorScheme();
  const pathName = usePathname();

  const preferredColorScheme = window.localStorage.getItem("colorScheme") as "light" | "dark" | null;

  if (preferredColorScheme !== null) {
    setColorScheme(preferredColorScheme);
  }

  const preferredFontSize = window.localStorage.getItem("fontSize");

  if (preferredFontSize === null) {
    window.localStorage.setItem("fontSize", "16px");
  }
  document.documentElement.style.setProperty("font-size", window.localStorage.getItem("fontSize"));

  const isDark = colorScheme === "dark";
  const headerBackground = isDark ? colors.neutral[900] : colors.zinc[800];
  const contentBackground = isDark ? colors.zinc[800] : colors.gray[50];
  const textColor = isDark ? colors.slate[100] : colors.gray[50];

  return (
    <SafeAreaProvider>
      <Head>
        <title>Hymns and Spiritual Songs</title>
        <meta name="description" content="A collection of hymnals and spiritual song books" />
      </Head>
      <StatusBar />
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerLeft: () =>
            // ensures the back arrow is consistent across platforms
            router.canGoBack() && (
              <Feather
                name="arrow-left"
                style={{ marginHorizontal: 12, marginVertical: 4 }}
                size={24}
                color={textColor}
                onPress={() => router.back()}
              />
            ),
          headerRight: () =>
            pathName !== "/settings" && (
              <Feather
                name={"settings"}
                className="flex-shrink"
                style={{ marginHorizontal: 12, marginVertical: 4 }}
                size={24}
                color={textColor}
                onPress={() => router.push("/settings")}
              />
            ),
          headerStyle: {
            backgroundColor: headerBackground,
          },
          headerShadowVisible: !isDark,
          headerTitleStyle: {
            color: textColor,
          },
          contentStyle: {
            backgroundColor: contentBackground,
            shadowColor: headerBackground,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Hymns and Spiritual Songs" }} />
        <Stack.Screen name="[songbookId]/index" options={{ title: "" }} />
        <Stack.Screen name="[songbookId]/[songNumber]/index" options={{ title: "" }} />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
