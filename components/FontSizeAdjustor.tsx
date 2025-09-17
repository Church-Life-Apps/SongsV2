import { View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const FontSizeAdjustor = () => {
  const fontSizes = ["13px", "16px", "20px"];
  const [fontSizeIndex, setFontSizeIndex] = useState<number>();

  const onPress = (sizeIndex: number) => {
    setFontSizeIndex(sizeIndex);
    const newFontSize = fontSizes[sizeIndex];
    document.documentElement.style.setProperty("font-size", newFontSize);
    window.localStorage.setItem("fontSize", newFontSize);
  };

  useEffect(() => {
    console.log("fontSizeIndex was set to", fontSizeIndex);
  }, [fontSizeIndex]);

  useEffect(() => {
    const storedFontSize = window.localStorage.getItem("fontSize");

    const storedFontSizeIndex = fontSizes.findIndex((val) => val === storedFontSize);
    if (storedFontSizeIndex !== -1) {
      setFontSizeIndex(storedFontSizeIndex);
    } else {
      setFontSizeIndex(1);
    }
  }, []);

  return (
    <View className="flex-row items-center">
      <Button
        variant={fontSizeIndex === 0 ? "lime" : "outlineSlate"}
        title="Small"
        onPress={() => onPress(0)}
        className="mx-1"
      />
      <Button
        variant={fontSizeIndex === 1 ? "lime" : "outlineSlate"}
        title="Medium"
        onPress={() => onPress(1)}
        className="mx-1"
      />
      <Button
        variant={fontSizeIndex === 2 ? "lime" : "outlineSlate"}
        title="Large"
        onPress={() => onPress(2)}
        className="mx-1"
      />
    </View>
  );
};

export default FontSizeAdjustor;
