import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    container__header:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    takenPic:{
        flex: 1,
    },
    pic: {
        flex: 1,
        resizeMode: 'cover',
    },
    commentContainer:{
        flex: 1,
        marginTop: '2%'
    },
    comments: {
        flex: 1,
        alignItems:'flex-end',
        flexDirection: 'row',
        borderBottomWidth: .5,
        height: 50,
        width: '95%',
        alignSelf: 'center',
        justifyContent:'flex-start'
    },
    comment:{
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 18,
    },
    date: {
        flex: 1,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
    user: {
        marginRight: '3%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userTop: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '5%',
        paddingTop: '2%',
        paddingBottom: '2%'
    },
    delete_button: {
        marginRight: '5%',
        flex:0,
        alignSelf:'flex-end'
    }

});