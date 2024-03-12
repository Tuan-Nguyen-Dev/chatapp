import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilles } from "../constants/fontFamilles";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    text: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fontFamilles.regular,
    },
    section: {
        marginHorizontal: 16,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50
    },
    button: {
        borderRadius: 8,
        minWidth: 40,
        height: 40,
        maxHeight: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        borderRadius: 8,
        minWidth: 40,
        height: 40,
        maxHeight: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
        paddingHorizontal: 8
    }
})