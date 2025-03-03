import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import FontSizeAdjustor from "../components/FontSizeAdjustor";

export default function Page() {
  const navigation = useNavigation();
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
      window.localStorage.setItem("colorScheme", "light");
    } else {
      setColorScheme("dark");
      window.localStorage.setItem("colorScheme", "dark");
    }
  };

  useEffect(() => {
    navigation.setOptions({ title: "Settings" });
  }, []);

  return (
    <SafeAreaView className="pt-4 pb-5 text-typography-light dark:text-typography-dark bg-background-light dark:bg-background-dark items-center">
      <Text className="text-3xl text-inherit font-title mb-4">Settings</Text>
      
      <View className="flex-row items-center justify-between max-w-sm w-full mb-4">
        <Text className="text-xl text-inherit font-bold">Color mode</Text>
        <Pressable>
          <Feather
            name={colorScheme === "dark" ? "moon" : "sun"}
            className="p-2 flex-shrink text-typography-light dark:text-typography-dark"
            style={{ marginHorizontal: 12, marginVertical: 4 }}
            size={24}
            onPress={toggleColorScheme}
          />
        </Pressable>
      </View>

      <View className="flex-row items-center justify-between max-w-sm w-full">
        <Text className="text-xl text-inherit font-bold">Font size</Text>
        <FontSizeAdjustor />
      </View>

    </SafeAreaView>
  );
}