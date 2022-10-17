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
        flex: 2,
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
        width: '95%',
        alignSelf: 'center',
        justifyContent:'flex-start',
        paddingTop: '2%'
    },
    comment:{
        flex: 2,
        flexWrap: 'wrap',
        fontSize: 18,
        alignSelf: 'flex-start'
    },
    date: {
        flex: 1,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight: '5%'
    },
    user: {
        flex: 1,
        marginRight: '3%',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    userTop: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '5%',
        paddingTop: '2%',
        paddingBottom: '2%'
    },
    titleContainer:{
        flex: 0, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '1%'
        
    },
    buttonContainer:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    delete_button: {
        flex:0,
        alignSelf:'flex-end',
        borderWidth: 1,
        padding: '1.5%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }

});