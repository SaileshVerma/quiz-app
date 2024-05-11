import { Alert, StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from '../components/PrimaryButton';
import { useState } from "react";

export function StartGameScreen() {
    const [enteredText, setEnteredText] = useState("");

    function onResetHandler() {
        setEnteredText('')
    }

    function onChangeTextHandler(text) {
        setEnteredText(text)
        console.log(text);
    }

    function onConfirmHandler() {
        const enteredNumber = parseInt(enteredText)
        if (isNaN(enteredNumber) || enteredNumber < 1 || enteredNumber > 99) {
            Alert.alert('Invalid Number', 'Please enter a valid number in range 1 to 99', [{
                onPress: onResetHandler,
                style: "destructive",
                text: "Okay",
            }])

            return;
        }
        console.log('WAS PRESSEd')
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputTextStyle}
                keyboardType="phone-pad"
                autoCapitalize="none"
                maxLength={2}
                autoCorrect={false}
                value={enteredText}
                onChangeText={onChangeTextHandler}
            />
            <View style={styles.buttonsHolderContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onResetHandler} > Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onConfirmHandler}> Confirm</PrimaryButton>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        marginTop: 200,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 12,
        backgroundColor: "#72063C",
        elevation: 10,
    },
    inputTextStyle: {
        height: 50,
        width: 50,
        textAlign: "center",
        borderBottomColor: "#ddb52f",
        fontSize: 32,
        borderBottomWidth: 2,
        marginVertical: 8,
        color: "#ddb52f",
        fontWeight: "600",
    },
    buttonsHolderContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});