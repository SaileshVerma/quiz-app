import { StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from '../components/PrimaryButton';

export function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputTextStyle} maxLength={2} />
            <PrimaryButton> First</PrimaryButton>
            <PrimaryButton> Second</PrimaryButton>
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 200,
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 12,
        backgroundColor: "#72063C",
        elevation: 10,
    },
    inputTextStyle: {
        height: 50,
        alignSelf: "center",
        width: 50,
        textAlign: "center",
        borderBottomColor: "#ddb52f",
        fontSize: 32,
        borderBottomWidth: 2,
        marginVertical: 8,
        color: "#ddb52f",
    }
});