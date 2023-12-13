import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on a subroute keeps a back button present.
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Hymnal" }} />
      <Stack.Screen name="[songbookId]/index" options={{ title: "" }}/>
      <Stack.Screen name="[songbookId]/[songNumber]/index" options={{ title: "" }}/>
    </Stack>
  );
}
