import { StyleSheet, View } from "react-native";
import { Colors } from "../utils/constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 30,
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: Colors.primary500,
    elevation: 10,
  },
});
