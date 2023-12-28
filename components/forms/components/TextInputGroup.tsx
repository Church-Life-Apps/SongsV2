import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface TextInputGroupProps extends TextInputProps {
  label?: string | undefined;
}

const TextInputGroup = ({ label, ...rest }: TextInputGroupProps) => {
  return (
    <View className="grow mx-2 mb-2">
      <Text className="font-semibold text-sm mb-1">{label}</Text>
      <TextInput
        className="border border-slate-600 rounded-lg py-1 px-3 text-lg placeholder:text-slate-600 bg-slate-50"
        {...rest}
      />
    </View>
  );
};

export default TextInputGroup;
