import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
        borderRadius: 100,
        marginRight: '5%'
    },
    generalLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: .5,
        borderColor: 'black',
        margin: 5
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
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
