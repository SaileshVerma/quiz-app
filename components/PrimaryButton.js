import { Pressable, StyleSheet, Text, View } from "react-native";

export function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.containerButtonStyle}
                onPress={onPress}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.buttonTextStyle}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButtonStyle: {
        elevation: 4,
        paddingVertical: 10,
        backgroundColor: "#891a52",
    },
    buttonOuterContainer: {
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4,
    },
    buttonTextStyle: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
});