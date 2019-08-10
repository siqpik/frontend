import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        height: Dimensions.get('window').height
    },
    takenPic:{
        flex: 1,
        resizeMode: 'contain',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#FF0000',
        borderRadius: 50,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    alertContainer: {
        flex: 1
    },
    alertText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginHorizontal: 20
    },
    alertButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        width: '40%',
    }
});
