import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";
import { useEffect, useState } from "react";
import { generateRandomBetween } from "../utils/helpers/generateRandomNumberHelper";
import { GameContainerText } from "../components/GameNumberText";
import { PrimaryButton } from "../components/PrimaryButton";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import { RoundCard } from "../components/RoundCard";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, seGuessRounds] = useState([initialGuess]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert('Don"t lie', "That is a wrong guess you know", [
        {
          style: "cancel",
          text: "CANCEL",
        },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }

    const newGuessNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newGuessNumber);
    seGuessRounds((prevRound) => {
      return [newGuessNumber, ...prevRound];
    });
  }

  useEffect(() => {
    if (currentGuess == userNumber) {
      console.log(":GAME OVER");
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Title> Opponent's Guess</Title>
      <GameContainerText>{currentGuess}</GameContainerText>
      <Card>
        <InstructionText style={styles.instructionTextStyle}>
          Higher or Lower{" "}
        </InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" color="white" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonStyle}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              {" "}
              <Ionicons name="add" color="white" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View
        style={{
          height: 200,
        }}
      >
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <RoundCard
              guess={item.item}
              rounds={guessRounds.length - item.index}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 100,
    // alignItems: 'center'
    paddingHorizontal: 30,
  },
  buttonContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonStyle: {
    flex: 1,
  },
  instructionTextStyle: {
    marginBottom: 20,
  },
});
