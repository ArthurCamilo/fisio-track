
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    closeButton: {
        height: 60,
        paddingTop: 16,
        marginBottom: 16,
        justifyContent: 'center',
    },
    searchInput: {
        height: 50,
        borderColor: themes.Colors.lightGray,
        borderRadius: 8,
        borderWidth: 1,
        margin: -20,
        marginTop: 5,
        marginBottom: 16,
        paddingHorizontal: 30,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
    },
    addNewPatientButton: {
        padding: 16,
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    addNewPatientText: {
        color: themes.Colors.primary,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    patientItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: themes.Colors.lightGray,
    },
});
