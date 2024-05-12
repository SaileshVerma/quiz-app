import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/constants/colors";

export function GameContainerText({ children }) {
    return <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    numberContainer: {
        alignItems: 'stretch',
        justifyContent: "center",
        borderColor: Colors.accent500,
        padding: 20,
        margin: 24,
        borderWidth: 4,
        borderRadius: 4,
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});