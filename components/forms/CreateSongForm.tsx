import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../Button";
import { TextInputGroup } from "./components";
import { useForm, Controller } from "react-hook-form"
import LyricsCreator from "./components/LyricsCreator";
import { LyricField } from "./components/VerseCreator";
import { fetchSongbooks } from "../../services/SongsApi";
import { LyricType, Songbook } from "../../models/SongsApiModels";

interface CreateSongFormProps {
  onSubmit: (data) => void;
}

export interface CreateSongFormSubmissionData {
  bookId: string;
  number: string;
  title: string;
  songwriter: string;
  composer: string;
  lyrics: LyricField[]
}

export const CreateSongForm = ( { onSubmit } : CreateSongFormProps) => {
  const [songbooks, setSongbooks] = useState<Songbook[]>([]);
  const {
    control,
    handleSubmit,
  } = useForm<CreateSongFormSubmissionData>({
    defaultValues: {
      bookId: "sfog",
      number: "",
      title: "",
      songwriter: "",
      composer: "",
      lyrics: [{ lyricType: LyricType.LYRIC_TYPE_VERSE, text: "" }]
    },
  })

  useEffect(() => {
    const loadSongbooks = async () => {
      const newSongbooks = await fetchSongbooks();
      setSongbooks(newSongbooks);
    };

    loadSongbooks();
  }, []);
  return (
    <View className="container mx-auto xl:px-32 2xl:px-64 mb-8">
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <View className="grow mx-2 mb-2">
            <Text className="text-sm font-semibold mb-1">Book</Text>
            <Picker
              className="text-lg border border-slate-600 bg-slate-50 rounded-lg py-1 px-2"
              onValueChange={onChange}
              selectedValue={value}
            >
              {songbooks.map((songbook, index) => (
                <Picker.Item label={songbook.fullName} value={songbook.id} key={index} />
              ))}
            </Picker>
          </View>
        )}
        name="bookId"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup
            label="Song Number"
            placeholder=""
            inputMode="numeric"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="number"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup
            label="Title"
            placeholder="Title"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup
            label="Songwriter"
            placeholder="Songwriter"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="songwriter"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup
            label="Composer"
            placeholder="Composer"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name="composer"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (      
          <LyricsCreator
            value={value as LyricField[]}
            onChange={onChange}
          />
        )}
        name="lyrics"
      />
      <Button variant="green" title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};