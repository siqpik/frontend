import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        alignSelf: 'stretch',
    },
    takenPic:{
        flex: 2,
        resizeMode: 'cover',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15
    },
    post: {
        flex: 2,
        flexDirection: 'column',
        height: 380,
        alignSelf: 'stretch',

    },
    userTitle: {
        flex: .2,
        flexDirection: 'row',
        margin: '5%'
    },
    titleName: {
        marginLeft: '2%',
        flexDirection: 'column'
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 75
    },
    postDescription: {
        width: '90%',
        marginTop: '3%',
        alignItems: 'flex-end'
    }


});