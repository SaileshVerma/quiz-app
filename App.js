import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StartGameScreen } from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import { Colors } from "./utils/constants/colors";
import { GameOverScreen } from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// import SplashScreen from "expo-splash-screen";

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [isFontLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!isFontLoading) {
    return <AppLoading />;
  }

  function pickNumberHandler(num) {
    setUseNumber(num);
  }

  let screen = <StartGameScreen onPickedNumber={pickNumberHandler} />;

  if (useNumber) {
    screen = (
      <GameScreen userNumber={useNumber} onGameOver={onGameOverHandler} />
    );
  }

  if (isGameOver) {
    screen = (
      <GameOverScreen
        roundsGuess={guessRounds}
        userNumber={useNumber}
        onRestartGame={onRestartGameHandler}
      />
    );
  }
  function onGameOverHandler(val) {
    setIsGameOver(true);
    setGuessRounds(val);
  }

  function onRestartGameHandler() {
    setUseNumber(null);
    setIsGameOver(false);
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.materialApp}
    >
      <ImageBackground
        style={styles.materialApp}
        source={require("./assets/images/bg.jpg")}
        resizeMode="cover"
        imageStyle={styles.imageContainer}
      >
        <SafeAreaView style={styles.materialApp}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  materialApp: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    opacity: 0.15,
  },
});
