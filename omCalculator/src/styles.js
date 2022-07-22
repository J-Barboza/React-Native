import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        height: (Dimensions.get("window").width - 2) / 4,
        width: (Dimensions.get("window").width - 2) / 4,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    textButton: {
        fontSize: 35,
        fontWeight: "bold",
        color: '#fff',
    },
    textOperationButton: {
        color: '#fa8231',
    },
    display: {
        flexGrow: 1,
        textAlign: "right",
        justifyContent: "flex-end",
        padding: 20,
    },
    displayText: {
        fontSize: 40,
        color: '#fff',
    }
})

export default style
