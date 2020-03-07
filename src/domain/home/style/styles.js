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
    post: {
        flex: 2,
        flexDirection: 'column',
        alignSelf: 'stretch',

    },
    userTitle: {
        flex: .3,
        flexDirection: 'row',
        margin: '5%'
    },
    titleName: {
        marginLeft: '2%',
        flexDirection: 'column'
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
        marginTop: '3%',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    commentInput: {
        borderColor: 'gray',
        height: 40,
        borderWidth: 2,
        borderRadius: 1,
        width: '60%'
    }
});