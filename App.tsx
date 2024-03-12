import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { HomeScreen } from "./src/screens";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <>
        <HomeScreen />
      </>
    );
  }
}
