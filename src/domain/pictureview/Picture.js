import React, {Component} from 'react'
import {Image, Text, View} from "react-native"
import {styles} from "../camera/style/styles"
import ViewPager from '@react-native-community/viewpager';

export class Picture extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {pics, username, index} = this.props.route.params

        return(
            <View style={styles.container}>
                <Text>{username}</Text>
                <ViewPager style={styles.takenPic} initialPage={index} showPageIndicator={true} orientation={'horizontal'}>
                    {getPics(pics, username)}
                </ViewPager>
            </View>
        )
    }
}

const getPics = (pics) => pics.map((pic, index) =>
    <View key={index + 'pictureView'} style={styles.container}>
        <Text>{pic.date}</Text>
        <Image source={{uri: pic.url}} style={styles.takenPic} />
    </View>)
