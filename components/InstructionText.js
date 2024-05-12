import { StyleSheet, Text } from "react-native";
import { Colors } from "../utils/constants/colors";

export function InstructionText({ children, style }) {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: "bold",
  },
});
