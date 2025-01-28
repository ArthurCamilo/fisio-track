import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: -20,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'flex-end',
        paddingBottom: 40,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    preparationCountdownContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    preparationCountdownText: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',
        opacity: 1,
    },
    videoCountdownContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'flex-end',
        paddingBottom: 40,
    },
    videoCountdownText: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',
        opacity: 1,
    },
    repetitionsCounter: {
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
