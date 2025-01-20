import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../../../global/themes";

export const styles = StyleSheet.create({
     closeButton: {
        height: 60,
        paddingTop: 16,
        marginBottom: 16,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    returnIcon: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: themes.Colors.lightGray,
        padding: 8,
        marginVertical: 8,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8,
    },
    radioButton: {
        padding: 8,
        borderWidth: 1,
        borderColor: themes.Colors.lightGray,
        borderRadius: 4,
    },
    selectedRadioButton: {
        backgroundColor: themes.Colors.primary,
        color: '#fff',
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
    }
});
