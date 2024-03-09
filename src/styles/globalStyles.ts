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
        lineHeight: 19
    }
})