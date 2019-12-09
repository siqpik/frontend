import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
        borderRadius: 100
    },
    generalLayout: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderWidth: 2,
        borderColor: 'red'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        alignItems: 'center'
    }
})
