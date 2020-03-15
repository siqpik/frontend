import React, {Component} from 'react'
import {Image, Text, View} from "react-native"
import {styles} from "../camera/style/styles"
import Swiper from 'react-native-swiper'

export class Picture extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const {pics, username, index} = this.props.navigation.state.params

        return(
            <View style={styles.container}>
                <Text>{username}</Text>
                <Swiper style={styles.wrapper} index={index} showsButtons loop={false}>
                    {getPics(pics, username)}
                </Swiper>
            </View>
        )
    }
}

const getPics = (pics) => pics.map((pic, index) =>
    <View key={index + 'pictureView'} style={styles.container}>
        <Text>{pic.date}</Text>
        <Image source={{uri: pic.url}} style={styles.takenPic} />
    </View>)
