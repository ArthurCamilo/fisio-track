
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    patientDetails: {
        marginBottom: 16,
    },
    testItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: themes.Colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    testsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themes.Colors.primary,
        marginBottom: 16,
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        padding: 16,
    }
});
