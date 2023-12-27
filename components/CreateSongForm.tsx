import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "./Button";
export const CreateSongForm = () => {
  return (
    <View className="container mx-auto">
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
          <View className="mx-2">
            <Text className="text-xs">Book</Text>
            <Picker className="text-lg border border-gray-800 rounded py-1">
              <Picker.Item label="SHL" value="Songs & Hymns" />
              <Picker.Item label="TST" value="Euro" />
              <Picker.Item label="SFOG" value="Naira" />
            </Picker>
          </View>
          <View className="grow mx-2">
            <Text className="text-xs">Number</Text>
            <TextInput
              className="border rounded py-1 px-2 text-lg"
              placeholder="Number"
              inputMode="numeric"
              keyboardType="numeric"
            />
          </View>
          <View className="grow mx-2">
            <Text className="text-xs">Title</Text>
            <TextInput className="border rounded py-1 px-2 text-lg" placeholder="Title" />
          </View>
          <View className="grow mx-2">
            <Text className="text-xs">Songwriter</Text>
            <TextInput className="border rounded py-1 px-2 text-lg" placeholder="Songwriter" />
          </View>
          <View className="grow mx-2">
            <Text className="text-xs">Composer</Text>
            <TextInput className="border rounded py-1 px-2 text-lg" placeholder="Composer" />
          </View>
        </View>
        <View className="flex flex-row-reverse mt-3">
          <View className="grow">
            <Button variant="outline" onPress={console.log} title="+ Lyrics" />
          </View>
        </View>
        <View className="flex flex-row-reverse mt-3">
          <View className="grow-0">
            <Button onPress={console.log} variant="success" title="Submit" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {},
});
