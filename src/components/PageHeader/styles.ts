
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        padding: 6,
        flexDirection: 'row',
    },
    closeButton: {
        height: 60,
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: themes.Colors.blackTransparent,
        marginBottom: 16,
        padding: 16,
        paddingTop: 14,
    }
});
