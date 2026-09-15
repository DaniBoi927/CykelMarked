import { Pressable, Text } from "react-native";
import { GS } from "../styles/GlobalStyle";

export default function AppButton({ title, onPress }) {
  return (
    <Pressable style={GS.button} onPress={onPress}>
      <Text style={GS.buttonText}>{title}</Text>
    </Pressable>
  );
}
