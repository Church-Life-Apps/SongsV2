import { classed } from "@tw-classed/react";
import React from "react";
import { Text, Pressable } from "react-native";

const variantStyles = {
  default: "rounded",
  primary: "bg-blue-500 text-white",
  secondary: "bg-white-500 text-black",
};

const Base = (props) => {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export const Button = classed(Base, {
  variants: {
    backgroundColor: {
      primary: "bg-blue-400",
      secondary: "bg-gray-500",
    },
  },
});
