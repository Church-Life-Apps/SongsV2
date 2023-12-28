import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../Button";
import { TextInputGroup } from "./components";
import LyricsCreator from "./components/LyricsCreator";

export const CreateSongForm = () => {
  return (
    <View className="container mx-auto xl:px-32 2xl:px-64 mb-8">
      <View className="my-4">
        <Text className="text-3xl text-center">Propose a Song</Text>
        <Text>
          This is some longer description text, I wonder how it will be displayed in the block. This is some longer
          description text, I wonder how it will be displayed in the block. This is some longer description text, I
          wonder how it will be displayed in the block. This is some longer description text, I wonder how it will be
          displayed in the block. This is some longer description text, I wonder how it will be displayed in the block.
          This is some longer description text, I wonder how it will be displayed in the block. This is some longer
          description text, I wonder how it will be displayed in the block.
        </Text>
      </View>
      <View>
        <View className="flex flex-row flex-wrap mb-1">
          <View className="grow mx-2 mb-2">
            <Text className="text-sm font-semibold mb-1">Book</Text>
            <Picker className="text-lg border border-slate-600 bg-slate-50 rounded-lg py-1 px-2">
              <Picker.Item label="SHL" value="shl" />
              <Picker.Item label="TST" value="Euro" />
              <Picker.Item label="Songs for Our Generation" value="sfog" />
            </Picker>
          </View>
          <TextInputGroup label="Number" placeholder="Number" inputMode="numeric" keyboardType="numeric" />
          <TextInputGroup label="Title" placeholder="Title" />
          <TextInputGroup label="Songwriter" placeholder="Songwriter" />
          <TextInputGroup label="Composer" placeholder="Composer" />
        </View>
        <LyricsCreator />
        <View className="flex flex-row-reverse mt-5">
          <View>
            <Button onPress={console.log} variant="green" title="Submit" />
          </View>
        </View>
      </View>
    </View>
  );
};
