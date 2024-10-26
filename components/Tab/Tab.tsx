import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export interface TabProps {
  onPress?: () => void;
  active?: boolean;
  title: string;
  hide?: boolean;
}

export const Tab = ({ active, title, hide, onPress = () => {}, ...rest }: TabProps) => {
  const tabColor = active ? "bg-cyan-300 dark:bg-gray-500 hover:bg-gray-200 dark:hover:bg-gray-400" : "bg-transparent hover:bg-cyan-100 hover:dark:bg-gray-400";
  const tabTextColor = active ? "text-gray-200" : "text-cyan-300 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-200";
  if (hide) return;
  return (
    <Pressable
      onPress={() => onPress()}
      className={"rounded mx-0.5 " + tabColor}
      {...rest}
    >
      <Text className={"px-4 py-2 " + tabTextColor}>
        {title}
      </Text>
    </Pressable>
  );
};
