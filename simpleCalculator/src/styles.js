import { Dimensions, StyleSheet } from "react-native";

export default style = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        fontSize: 40,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888',
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3,
    },
    display: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderWidth: 2,
        borderColor: '#000',
        textAlign: "right",
    },
    displayValue: {
        fontSize: 40,
        color: '#fff',
    }
})