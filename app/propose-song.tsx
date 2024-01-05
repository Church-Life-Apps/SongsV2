import { SafeAreaView } from "react-native";
import { CreateSongForm } from "../components/forms/CreateSongForm";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function Page() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Propose a Song" });
  }, []);

  return (
    <SafeAreaView>
      <CreateSongForm />
    </SafeAreaView>
  );
}
