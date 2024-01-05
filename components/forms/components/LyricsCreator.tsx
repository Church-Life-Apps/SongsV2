import React from "react";
import { Text, View } from "react-native";
import VerseCreator, { LyricField } from "./VerseCreator";
import Button from "../../Button";
import { LyricType } from "../../../models/SongsApiModels";
import { swapArrayElements } from "../../../utils/ArrayUtils";
import { FormikErrors } from "formik";

interface LyricsCreatorProps {
  value: LyricField[];
  onChange: (e: LyricField[]) => void;
  error?: string | string[] | FormikErrors<LyricField>[] | undefined;
}

const LyricsCreator = ({ value, onChange, error }: LyricsCreatorProps) => {
  function addLyricField(): void {
    onChange([...value, { text: "", lyricType: LyricType.LYRIC_TYPE_VERSE }]);
  }

  function removeLyricField(index: number): void {
    let newFields = [...value];
    newFields.splice(index, 1);
    onChange(newFields);
  }

  function lyricFieldUp(index: number) {
    if (index === 0) return;
    var newFields = swapArrayElements(value, index, index - 1);
    onChange(newFields);
  }

  function lyricFieldDown(index: number) {
    if (index === value.length - 1) {
      return;
    }
    var newFields = swapArrayElements(value, index, index + 1);
    onChange(newFields);
  }
  return (
    <>
      {error && typeof error === "string" && <Text className="text-red-700 font-semibold">{error}</Text>}
      {value.map((field, index) => (
        <VerseCreator
          field={field}
          key={index}
          onChangeText={(text) => {
            field.text = text;
            onChange([...value]);
          }}
          onChangeType={(type) => {
            field.lyricType = type;
            onChange([...value]);
          }}
          onDelete={() => removeLyricField(index)}
          onUp={() => lyricFieldUp(index)}
          onDown={() => lyricFieldDown(index)}
        />
      ))}
      <View className="flex flex-row-reverse mt-3">
        <View className="grow mx-2">
          <Button onPress={addLyricField} variant="outlineBlue" title="+ Lyric" />
        </View>
      </View>
    </>
  );
};

export default LyricsCreator;
