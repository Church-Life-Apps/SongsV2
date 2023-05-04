import { Platform } from "react-native";

export function isMobile(): boolean {
  return Platform.OS === "android" || Platform.OS === "ios";
}
