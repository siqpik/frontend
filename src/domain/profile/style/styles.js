import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    picStyle: {
        justifyContent: 'flex-start',
        width: 170,
        height: 140,
        borderRadius: 5,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: '5%',
        marginTop: '5%'
    },
    header: {
        alignItems: 'center',
        paddingBottom: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 36,
    },
    admireContainer: {
        flexDirection: 'row',
    },
    centerHorizontal: {
        flex: 1,
        alignItems: 'center'
    },
    rightAlign: {
        flexDirection: 'row-reverse',
        paddingTop: 10,
        paddingLeft: 20
    }
});
