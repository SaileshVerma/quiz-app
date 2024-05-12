import { StyleSheet, Text } from "react-native";

export function Title({ children }) {
  return <Text style={styles.titleContainer}>{children}</Text>;
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 22,
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    padding: 20,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
});
