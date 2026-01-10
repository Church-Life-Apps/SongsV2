import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import { submitFeedback } from "../../services/FeedbackApi";
import { TextInputGroup } from "./components";
import Button from "../Button";
import { set } from "lodash";

export interface Feedback {
  title: string;
  from: string;
  message: string;
}

export const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const { control, handleSubmit } = useForm<Feedback>({
    defaultValues: {
      title: "",
      from: "",
      message: "",
    },
  });
  return (
    <View  className="text-typography-light">
      <Text className="text-typography-light dark:text-typography-dark px-4 pb-4">
        Use the following form to provide feedback, such as new feature requests or song lyric corrections
      </Text>
      <Controller
        name="from"
        control={control}
        rules={{ required: true }}
        disabled={isSubmitting}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup label="Name" placeholder="" value={value} onChangeText={onChange} onBlur={onBlur} />
        )}
      />
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        disabled={isSubmitting}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup label="Title" placeholder="" value={value} onChangeText={onChange} onBlur={onBlur} />
        )}
      />
      <Controller
        name="message"
        control={control}
        rules={{ required: true }}
        disabled={isSubmitting}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputGroup
            label="Message"
            inputMode="text"
            multiline
            numberOfLines={3}
            placeholder=""
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {showSuccessMessage && (
        <Text className="text-green-600 my-2 text-center font-bold">
          "Thank you for your feedback!"
        </Text>
      )}
      <Button
        variant="green"
        title="Submit"
        className="mt-2"
        disabled={isSubmitting}
        onPress={handleSubmit((data) => {
          setShowSuccessMessage(false);
          setIsSubmitting(true);
          submitFeedback(data)
            .then((json) => {
              if (json.ok) {
                setShowSuccessMessage(true);
              }
              else alert("Error while submitting feedback. Please try again later.");
            })
            .then(() => { setIsSubmitting(false); });
        })}
      />
    </View>
  );
};
