import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    img: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: '1.5%',
    },
    generalLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: 'black',
        margin: 5
    },
    userContainer:{
        flex: 2,
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: 'black',
        padding: '2%',
        borderRadius: 5,
        
    },
    buttonText:{
        color: 'white',
    },
    statusContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    userName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    userLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    text: {
        alignItems: 'center'
    }
})
