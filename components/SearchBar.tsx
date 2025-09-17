import { TextInput, TextStyle, TouchableOpacity, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { debounce } from "../utils/FunctionUtils";

interface SearchBarProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder: string;
  debounceWait?: number;
  style?: TextStyle;
  className?: string;
}

export const SearchBar = ({ onChange, placeholder, style, debounceWait = 500, className }: SearchBarProps) => {
  const debounced = useCallback(
    debounce((value) => {
      onChange(value);
    }, debounceWait),
    [onChange, debounceWait]
  );

  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>();

  const clearValue = () => {
    setValue("");
    onChange("");
    inputRef.current?.focus();
  };

  const clearIcon = (
    <TouchableOpacity
      onPress={clearValue}
      className={"bg-transparent text-xl justify-center border-b-2 border-neutral-300"}
    >
      <Feather name={"x"} className={"text-typography-light dark:text-typography-dark opacity-50"} size={16} />
    </TouchableOpacity>
  );

  return (
    <View className="flex-row align-center w-full max-w-[1000px] px-3">
      <TextInput
        value={value}
        inputMode="search"
        className={className}
        style={{ ...style }}
        onChangeText={(nextValue) => {
          setValue(nextValue);
          debounced(nextValue);
        }}
        placeholder={placeholder}
        ref={inputRef}
      />
      {value ? clearIcon : <></>}
    </View>
  );
};
