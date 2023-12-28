import React from "react";
import { View } from "react-native";
import Button from "../../Button";
import { LyricTypePicker, TextInputGroup } from ".";
import { LyricType } from "../../../models/SongsApiModels";

export type LyricField = {
  value: string;
  lyricType: LyricType;
};

interface LyricFieldProps {
  field: LyricField;
  onChangeText: (value: string) => void;
  onChangeType: (lyricType: LyricType) => void;
  onDelete: () => void;
  onUp: () => void;
  onDown: () => void;
}

const VerseCreator = ({ field, onChangeText, onChangeType, onDelete, onUp, onDown }: LyricFieldProps) => {
  return (
    <View className="flex flex-row mt-3 items-center border border-slate-600 rounded p-4">
      <View>
        <Button title="Up" variant={"outlineBlue"} className="mb-1" onPress={onUp} />
        <Button title="Down" variant={"outlineBlue"} className="mb-1" onPress={onDown} />
        <Button icon="trash-2" title="" variant={"outlineRed"} onPress={onDelete} />
      </View>
      <View className="border-s border-gray-400 mx-3 h-full" />
      <View className="grow">
        <LyricTypePicker value={field.lyricType} onValueChange={onChangeType} />
        <TextInputGroup
          label="Lyrics"
          inputMode="text"
          multiline
          numberOfLines={5}
          value={field.value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default VerseCreator;
