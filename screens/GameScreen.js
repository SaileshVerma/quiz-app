import { Alert, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { useState } from "react";
import { generateRandomBetween } from "../utils/helpers/generateRandomNumberHelper";
import { GameContainerText } from "../components/GameNumberText";
import { PrimaryButton } from "../components/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Don"t lie', "That is a wrong guess you know", [{
                style: 'cancel',
                text: "CANCEL"
            }])
            return;
        }

        if (direction == 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess;
        }

        const newGuessNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newGuessNumber);
    }

    return (<View style={styles.screenContainer}>
        <Title> Opponent's Guess</Title>
        <GameContainerText>{currentGuess}</GameContainerText>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
    </View>);
}

const styles = StyleSheet.create({
    screenContainer: {
        marginTop: 100,
        // alignItems: 'center'
        paddingHorizontal: 30
    }
});