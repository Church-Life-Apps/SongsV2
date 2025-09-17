import { useNavigation } from "expo-router";
import { useEffect } from "react";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Feedback, FeedbackForm } from "../components/forms/FeedbackForm";
import { submitFeedback } from "../services/FeedbackApi";

export default function Page() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Provide feedback" });
  }, []);

  const onSubmit = (data: Feedback) => {
    submitFeedback(data).then((json) => {
      if (json.status === 201) alert("Feedback successfully submitted");
      else alert("Error while submitting feedback. Please try again later.");
    });
  };

  return (
    <SafeAreaView className="bg-background-light dark:bg-background-dark">
      <Text>Use the following form to provide feedback, including new feature requests or song lyric corrections</Text>
      <FeedbackForm onSubmit={onSubmit} />
    </SafeAreaView>
  );
}
