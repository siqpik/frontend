import React, {Component} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native"
import {styles} from "./style/styles"
import {deleteItem, post} from '../service/ApiService';
import PagerView from "react-native-pager-view";

export class Picture extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.route.params)
    }

    render() {
        const {posts, username, index, actualUser} = this.props.route.params;
        return (
            <View style={styles.container}>

                <PagerView style={styles.takenPic} initialPage={index} showPageIndicator={false}
                           orientation={'horizontal'}>
                    {getPics(posts, actualUser, username)}
                </PagerView>
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

const changeProfilePic = pidId =>
    post('/profile/changeProfilePic/' + pidId)
        .then(resp => {
            if (resp.status === 200) {
                console.log(resp.status);
            }
        }).catch(error => alert(error));

const getPics = (posts, actualUser, username) => posts.map((pic, index) =>
    <View key={index + 'pictureView'}>
        {actualUser ?
            <View style={styles.buttonContainer} style={styles.titleContainer}>
                <Text style={styles.userTop}>{username}</Text>
                <TouchableOpacity onPress={() => changeProfilePic(pic.id)}
                                  style={styles.delete_button}>
                    <Text>Make Profile Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletePic(pic.id)} style={styles.delete_button}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View> :
            <View></View>
        }

        <Image source={{uri: pic.mediaUrl}} style={styles.pic}/>
        <ScrollView style={styles.commentContainer} alwaysBounceHorizontal={false}>
            <Text style={styles.date}>{pic.date}</Text>
            {/**getComments(pic)*/}
        </ScrollView>
    </View>)

const getComments = (pic) => pic.comments.map((post, index) =>
    <View key={index} style={styles.comments}>
        <Text style={styles.user}>{post.userName}</Text>
        <Text style={styles.comment}>{post.comments}</Text>
    </View>
)
