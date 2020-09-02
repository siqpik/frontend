import React, {Component} from 'react'
import {Image, Text, View, ScrollView, TouchableOpacity} from "react-native"
import {styles} from "./style/styles"
import ViewPager from '@react-native-community/viewpager';
import {deleteItem} from '../service/ApiService';

export class Picture extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {pics, username, index} = this.props.route.params;

        return(
            <View style={styles.container}>
                    <Text style={styles.userTop}>{username}</Text>
                <ViewPager style={styles.takenPic} initialPage={index} showPageIndicator={false} orientation={'horizontal'}>
                    {getPics(pics, username)}
                </ViewPager>
            </View>
        )
    }
}

const deletePic = (picID) =>
    deleteItem('/picture/' + picID)
            .then(resp => {
                if (resp.status === 204) {
                    console.log('DELETED', resp.status);
                }
    }).catch(error => alert(error));

const getPics = (pics) => pics.map((pic, index) =>
    <View key={index + 'pictureView'}>
        <TouchableOpacity onPress={() => deletePic(pic.id)} style={styles.delete_button}>
            <Text>DELETE</Text>
        </TouchableOpacity>
        <Image source={{uri: pic.url}} style={styles.pic} />
        <ScrollView style={styles.commentContainer} alwaysBounceHorizontal={false}>
        <Text style={styles.date}>{pic.date}</Text>
        {getComments(pic)}
        </ScrollView>
    </View>)

const getComments = (pic) => pic.comments.map((post, index) =>
    <View key={index} style={styles.comments}>
            <Text style={styles.user}>{post.userName}</Text>
            <Text style={styles.comment}>{post.comments}</Text>
    </View>
)
