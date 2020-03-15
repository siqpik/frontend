import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    picStyle: {
        justifyContent: 'flex-end',
        width: 120,
        height: 140,
        borderRadius: 10,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black'
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
