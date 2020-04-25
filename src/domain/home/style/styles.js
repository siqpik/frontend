import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        alignSelf: 'stretch',
    },
    wallPic:{
        flex: 2,
        resizeMode: 'cover',
        // width: Dimensions.get('window').width,
        alignSelf: 'center',
    },
    userTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%',
        height: 70
    },
    titleName: {
        flex: .7,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    profilePic: {
        borderRadius: 80
    },
    postDescription: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 60,
    },
    comments: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flex: 1,
        height: 40,
    },
    commentInput: {
        height: 30,
        borderColor: 'gray',
        flex: .6,
        borderWidth: 2,
        borderRadius: 1,
    }
});