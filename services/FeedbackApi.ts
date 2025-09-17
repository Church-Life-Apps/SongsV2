import { Feedback } from "../components/forms/FeedbackForm";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export async function submitFeedback(data: Feedback) {
  return await fetch(`${baseUrl}/feedback`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
}
