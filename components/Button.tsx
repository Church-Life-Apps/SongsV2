import React from "react";
import { Text, Pressable } from "react-native";

const variantStyles = {
  primary: "bg-blue-300 text-black",
  secondary: "bg-gray-400 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  outline: "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white",
};

type Variant = "primary" | "secondary" | "success" | "outline";

type ButtonProps = {
  onPress: () => void;
  title: string;
  variant: Variant;
};

const Button = (props: ButtonProps) => {
  const { onPress, title = "Save", variant } = props;
  return (
    <Pressable onPress={onPress} className={`rounded px-3 py-2 ${variantStyles[variant]}`}>
      <Text className="text-center font-bold" style={{ color: "inherit" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
