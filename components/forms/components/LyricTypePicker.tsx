import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LyricType } from "../../../models/SongsApiModels";

interface LyricTypePickerProps {
  value?: LyricType;
  onValueChange?: (type: LyricType) => void;
}

const LyricTypePicker = ({ value, onValueChange = () => {} }: LyricTypePickerProps) => {
  const friendlyVerseName = {
    [LyricType.LYRIC_TYPE_VERSE]: "Verse",
    [LyricType.LYRIC_TYPE_CHORUS]: "Chorus",
    [LyricType.LYRIC_TYPE_PRECHORUS]: "Pre-Chorus",
    [LyricType.LYRIC_TYPE_BRIDGE]: "Bridge",
  };

  return (
    <View className="grow mx-2 mb-2">
      <Text className="text-sm font-semibold mb-1">Lyric Type</Text>
      <Picker
        className="text-lg border border-slate-600 bg-slate-50 rounded-lg py-1 px-2"
        selectedValue={value}
        onValueChange={(itemValue) => onValueChange(LyricType[itemValue as keyof typeof LyricType])}
      >
        {Object.entries(LyricType).map(([_, lyricType]) => {
          return <Picker.Item label={friendlyVerseName[lyricType]} value={lyricType} key={lyricType} />;
        })}
      </Picker>
    </View>
  );
};

export default LyricTypePicker;
