import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../Button";
import { TextInputGroup } from "./components";
import LyricsCreator from "./components/LyricsCreator";
import { Formik } from "formik";
import { LyricField } from "./components/VerseCreator";
import { fetchSongbooks } from "../../services/SongsApi";
import { Songbook } from "../../models/SongsApiModels";
import * as Yup from "yup";

type FormFields = {
  bookId: string;
  number: string;
  title: string;
  songwriter: string;
  composer: string;
  lyrics: LyricField[];
};

const handleSubmit = (values: FormFields) => {
  console.log(values);
};

export const CreateSongForm = () => {
  const [songbooks, setSongbooks] = useState<Songbook[]>([]);

  useEffect(() => {
    const loadSongbooks = async () => {
      const newSongbooks = await fetchSongbooks();
      setSongbooks(newSongbooks);
    };

    loadSongbooks();
  }, []);
  return (
    <Formik
      initialValues={{ bookId: "", number: "", title: "", songwriter: "", composer: "", lyrics: [{}] } as FormFields}
      onSubmit={handleSubmit}
      validationSchema={Yup.object({
        bookId: Yup.string().required("Required"),
        number: Yup.string().required("Required"),
        title: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
        songwriter: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
        composer: Yup.string().min(3, "Must be 3 characters or more").notRequired(),
        lyrics: Yup.array()
          .of(Yup.object({ text: Yup.string().required("Required"), lyricType: Yup.string().required("Required") }))
          .min(1),
      })}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
        submitCount,
        isSubmitting,
      }) => (
        <View className="container mx-auto xl:px-32 2xl:px-64 mb-8">
          <View className="my-4">
            <Text className="text-3xl text-center">Propose a Song</Text>
            <Text>
              This is some longer description text, I wonder how it will be displayed in the block. This is some longer
              description text, I wonder how it will be displayed in the block. This is some longer description text, I
              wonder how it will be displayed in the block. This is some longer description text, I wonder how it will
              be displayed in the block. This is some longer description text, I wonder how it will be displayed in the
              block. This is some longer description text, I wonder how it will be displayed in the block. This is some
              longer description text, I wonder how it will be displayed in the block.
            </Text>
          </View>
          <View>
            <View className="flex flex-row flex-wrap mb-1">
              <View className="grow mx-2 mb-2">
                <Text className="text-sm font-semibold mb-1">Book</Text>
                <Picker
                  className="text-lg border border-slate-600 bg-slate-50 rounded-lg py-1 px-2"
                  onValueChange={handleChange("bookId")}
                  selectedValue={values.bookId}
                >
                  {songbooks.map((songbook, index) => (
                    <Picker.Item label={songbook.fullName} value={songbook.id} key={index} />
                  ))}
                </Picker>
              </View>
              <TextInputGroup
                label="Number"
                placeholder="Number"
                inputMode="numeric"
                keyboardType="numeric"
                value={values.number}
                onChangeText={handleChange("number")}
                onBlur={handleBlur("number")}
                error={touched.number ? errors.number : undefined}
              />
              <TextInputGroup
                label="Title"
                placeholder="Title"
                value={values.title}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                error={touched.title ? errors.title : undefined}
              />
              <TextInputGroup
                label="Songwriter"
                placeholder="Songwriter"
                value={values.songwriter}
                onChangeText={handleChange("songwriter")}
                onBlur={handleBlur("songwriter")}
                error={touched.songwriter ? errors.songwriter : undefined}
              />
              <TextInputGroup
                label="Composer"
                placeholder="Composer"
                value={values.composer}
                onChangeText={handleChange("composer")}
                onBlur={handleBlur("composer")}
                error={touched.composer ? errors.composer : undefined}
              />
            </View>
            <LyricsCreator
              value={values.lyrics}
              onChange={(lyrics) => setFieldValue("lyrics", lyrics)}
              error={touched.lyrics ? errors.lyrics : undefined}
            />
            <View className="flex flex-row-reverse mt-5">
              <View>
                {submitCount > 0 && Object.values(errors).length > 0 && (
                  <Text className="text-red-600">There are one or more problems with the form</Text>
                )}
                <Button onPress={handleSubmit} variant="green" disabled={isSubmitting} title="Submit" />
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};
