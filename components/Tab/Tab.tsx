import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export interface TabProps {
  onPress?: () => void;
  active?: boolean;
  title: string;
  hide?: boolean;
}

export const Tab = ({ active, title, hide, onPress = () => {}, ...rest }: TabProps) => {
  if (hide) return;
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
