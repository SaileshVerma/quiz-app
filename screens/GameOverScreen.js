import { Image, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";
import { Colors } from "../utils/constants/colors";
import { PrimaryButton } from "../components/PrimaryButton";

export function GameOverScreen({ roundsGuess, userNumber, onRestartGame }) {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryTextStyle}>
        You needed <Text style={styles.highlightStyle}>{roundsGuess}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlightStyle}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestartGame}>Restart</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    flexDirection: "column",
  },
  imageContainer: {
    height: 300,
    width: 300,
    margin: 30,
    borderWidth: 3,
    borderRadius: 150,
    overflow: "hidden",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
  summaryTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlightStyle: {
    fontSize: 22,
    color: Colors.primary500,
  },
});
