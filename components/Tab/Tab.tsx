import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export interface TabProps {
  onPress?: () => void;
  active?: boolean;
  title: string;
}

export const Tab = ({ active, title, onPress = () => {}, ...rest }: TabProps) => {
  return (
    <Pressable
      onPress={() => onPress()}
      className="rounded mx-0.5 bg-none bg-white hover:bg-gray-200"
      style={[{ backgroundColor: active ? "#5cc0d6" : undefined }]}
      {...rest}
    >
      <Text className="px-4 py-2" style={[{ color: active ? "white" : "#5cc0d6" }]}>
        {title}
      </Text>
    </Pressable>
  );
};
