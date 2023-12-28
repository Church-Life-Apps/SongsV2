import React, { useState } from "react";
import { View } from "react-native";
import VerseCreator, { LyricField } from "./VerseCreator";
import Button from "../../Button";
import { LyricType } from "../../../models/SongsApiModels";
import { swapArrayElements } from "../../../utils/ArrayUtils";

const LyricsCreator = ({}: {}) => {
  const [lyricFields, setLyricFields] = useState<LyricField[]>([{ value: "", lyricType: LyricType.LYRIC_TYPE_VERSE }]);

  function addLyricField(): void {
    setLyricFields([...lyricFields, { value: "", lyricType: LyricType.LYRIC_TYPE_VERSE }]);
  }

  function removeLyricField(index: number): void {
    let newFields = [...lyricFields];
    newFields.splice(index, 1);
    setLyricFields(newFields);
  }

  function lyricFieldUp(index: number) {
    if (index === 0) return;
    var newFields = swapArrayElements(lyricFields, index, index - 1);
    setLyricFields(newFields);
  }

  function lyricFieldDown(index: number) {
    if (index === lyricFields.length - 1) {
      return;
    }
    var newFields = swapArrayElements(lyricFields, index, index + 1);
    setLyricFields(newFields);
  }
  return (
    <>
      {lyricFields.map((field, index) => (
        <VerseCreator
          field={field}
          key={index}
          onChangeText={(value) => {
            field.value = value;
            setLyricFields([...lyricFields]);
          }}
          onChangeType={(type) => {
            field.lyricType = type;
            setLyricFields([...lyricFields]);
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
