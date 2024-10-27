import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface TextInputGroupProps extends TextInputProps {
  label?: string | undefined;
  error?: string | undefined;
}

const TextInputGroup = ({ label, error, ...rest }: TextInputGroupProps) => {
  return (
    <View className="grow mx-2 mb-2">
      <View className="flex-row justify-between">
        <Text className="font-semibold text-sm mb-1 text-typography-light dark:text-typography-dark">{label}</Text>
        {error && <Text className="text-red-700">{error}</Text>}
      </View>
      <TextInput
        className={
          "border border-slate-600 rounded-lg py-1 px-3 text-lg placeholder:text-slate-600 bg-slate-50 " +
          (error ? "border-red-600 border-2" : "")
        }
        {...rest}
      />
    </View>
  );
};

export default TextInputGroup;
