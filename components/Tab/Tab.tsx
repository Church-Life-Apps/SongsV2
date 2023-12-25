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
      style={[styles.buttonStyle, { backgroundColor: active ? "#5cc0d6" : "white" }]}
      {...rest}
    >
      <Text style={[styles.titleStyle, { color: active ? "white" : "#5cc0d6" }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 4,
    backgroundColor: "transparent",
    marginHorizontal: 2,
  },
  titleStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  containerStyle: {
    flex: 1,
    borderRadius: 0,
  },
});
