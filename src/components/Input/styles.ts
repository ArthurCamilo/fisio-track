import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    boxInput: {
        width:'100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: themes.Colors.lightGray,
        backgroundColor: themes.Colors.bgScreen,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
        overflow: 'visible'
    },
    titleInput: {
        marginLeft: 5,
        color: themes.Colors.gray,
        marginTop: 20
    },
    Button: {
        width:'10%',
    },
    Icon: {
        width:'100%',
    }
    
})