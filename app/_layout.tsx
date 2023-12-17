import { Stack } from 'expo-router';
import Head from 'expo-router/head';

export const unstable_settings = {
  // Ensure that reloading on a subroute keeps a back button present.
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <>
    <Head>
      <title>Hymnal</title>
    </Head>
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a3dbe8',
        }
      }}
    >
      <Stack.Screen name="index" options={{ title: "Hymnal" }} />
      <Stack.Screen name="[songbookId]/index" options={{ title: "" }}/>
      <Stack.Screen name="[songbookId]/[songNumber]/index" options={{ title: "" }}/>
    </Stack>
    </>
    );
}
