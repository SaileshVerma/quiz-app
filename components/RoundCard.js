import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/constants/colors";

export function RoundCard({ rounds, guess }) {
  return (
    <View style={styles.rootContainer}>
      <Text>#{rounds}</Text>
      <Text>Opponent's Guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    margin: 4,
    backgroundColor: Colors.accent500,
    justifyContent: "space-between",
  },
});
