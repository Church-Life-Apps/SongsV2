import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, Pressable } from "react-native";

const variantStyles = {
  blue: "bg-sky-500 text-black",
  slate: "bg-gray-400 text-white",
  green: "bg-green-600 hover:bg-green-700 text-white",
  outlineBlue: "bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white",
  outlineSlate: "bg-transparent border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white",
  outlineRed: "bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
  disabled: "bg-stone-50 text-stone-300 border-stone-300",
};

type Variant = "blue" | "slate" | "green" | "outlineBlue" | "outlineSlate" | "outlineRed" | "disabled";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  variant: Variant;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { onPress, title, variant, className, icon, disabled } = props;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`rounded-lg px-3 py-2 ${disabled ? variantStyles["disabled"] : variantStyles[variant]} ${className}`}
    >
      <Text className="text-center font-bold" style={{ color: "inherit", userSelect: "none" }}>
        {title}
        {icon ? <Feather name={icon} size={16} /> : undefined}
      </Text>
    </Pressable>
  );
};

export default Button;
