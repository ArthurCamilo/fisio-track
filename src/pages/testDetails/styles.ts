
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    closeButton: {
        height: 60,
        paddingTop: 16,
        marginBottom: 16,
        justifyContent: 'center',
    },
    testDetails: {
        marginBottom: 16,
    },
    resultItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: themes.Colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resultsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themes.Colors.primary,
        marginBottom: 16,
    }
    
});
