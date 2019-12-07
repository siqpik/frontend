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
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: Dimensions.get('window').height
    },
    alertText: {
        flex: 2,
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
    capture: {
        width: '15%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    alertButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
    },
    button: {
        width: 100,
        backgroundColor: '#000',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    buttonHome: {
        width: 200,
        backgroundColor: '#000',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    removeWarning : {
        height: 30,
        width: '90%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: '10%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    removeWarningText: {
        fontSize: 15,
        marginHorizontal: '5%'
    }
});
