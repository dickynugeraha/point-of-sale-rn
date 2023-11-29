import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import RootNavigation from "./navigations/RootNavigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RootNavigation />
    </SafeAreaView>
  );
}
