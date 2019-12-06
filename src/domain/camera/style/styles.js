import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        alignSelf: 'stretch',
    },
    post: {
        flex: 1,
        flexDirection: 'column',
        height: 380,
        alignSelf: 'stretch',
        borderStyle: 'solid'
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
    buttonsContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: "100%",
        justifyContent: "space-around",
        marginBottom: "5%"
    },
    alertContainer: {
        flex: 1
    },
    alertText: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    rules: {
        flex: 2,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5%',

    },
    rulesText: {
        fontSize: 20,
        margin: '2%'
    },
    title: {
        flex: 1,
        fontSize: 30,
        marginTop: '20%'
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
