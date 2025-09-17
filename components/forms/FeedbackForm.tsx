import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { TextInputGroup } from "./components";
import Button from "../Button";

interface FeedbackFormProps {
  onSubmit: (data: Feedback) => void;
  defaultValues?: Feedback;
}

export interface Feedback {
  title: string;
  from: string;
  message: string;
}

export const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const { control, handleSubmit } = useForm<Feedback>({
    defaultValues: {
      title: "",
      from: "",
      message: "",
    },
  });
  return (
    <View>
      <Controller
        name="from"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup label="Name" placeholder="" value={value} onChangeText={onChange} onBlur={onBlur} />
        )}
      />
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup label="Title" placeholder="" value={value} onChangeText={onChange} onBlur={onBlur} />
        )}
      />
      <Controller
        name="message"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup
            label="Message"
            inputMode="text"
            multiline
            numberOfLines={5}
            placeholder=""
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Button
        variant="green"
        title="Submit"
        className="mt-5"
        onPress={handleSubmit((data) => {
          onSubmit(data);
        })}
      />
    </View>
  );
};
