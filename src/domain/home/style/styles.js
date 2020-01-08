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
        flex: .2,
        flexDirection: 'row',
        margin: '5%'
    },
    titleName: {
        marginLeft: '2%',
        flexDirection: 'column',

    },
    profilePic: {
        borderRadius: 80
    },
    postDescription: {
        width: '90%',
        marginTop: '3%',
        alignItems: 'flex-end'
    }


});