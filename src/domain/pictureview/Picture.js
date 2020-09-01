import React, {Component} from 'react'
import {Image, Text, View, ScrollView} from "react-native"
import {styles} from "./style/styles"
import ViewPager from '@react-native-community/viewpager';

export class Picture extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {pics, username, index} = this.props.route.params

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

const getPics = (pics) => pics.map((pic, index) =>
    <View key={index + 'pictureView'}>
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
