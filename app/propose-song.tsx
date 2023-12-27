import { SafeAreaView } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { CreateSongForm } from "../components/CreateSongForm";

export default function Page() {
  return (
    <SafeAreaView>
      <CreateSongForm />
    </SafeAreaView>
  );
}
