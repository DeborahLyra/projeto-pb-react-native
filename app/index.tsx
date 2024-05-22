import Signup from "@/screens/signup/Signup";
import { Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./home";

export default function Index() {
  return (
    <NativeBaseProvider >
      <Home />
    </NativeBaseProvider>
  )
}
