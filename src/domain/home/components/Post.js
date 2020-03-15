import React, { useState, useEffect } from 'react';
import {styles} from "../style/styles";
import {Dimensions, Text, TextInput, View} from "react-native";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Image from 'react-native-scalable-image';

function Wallpost (props) {

    const [picLiked, setPicLiked] = useState();

    return (
        <View style={styles.post}>
            <View style={styles.userTitle}>
                <Image source={{uri: props.profilePicUrl}} width={60} style={styles.profilePic}/>
                <View style={styles.titleName}>
                    <Text style={styles.name}>{props.userName}</Text>
                    <Text> {props.photo.date}</Text>
                </View>
            </View>
            <Image source={{uri: props.photo.url}} style={styles.wallPic} width={Dimensions.get('window').width} />
            <View style={styles.postDescription}>
                <TextInput style={styles.commentInput}/>
                {props.ilikeThisPic || picLiked ?
                    <Icon
                        onPress={() => {
                            props.likePost(props.photo.id);
                            setPicLiked(false);
                        }}
                        name="star"
                        size={35}
                        color="black"
                    />
                    :
                    <Icon
                        onPress={() => {
                            props.likePost(props.photo.id);
                            setPicLiked(true);
                        }}
                        name="staro"
                        size={35}
                        color="black"
                    />
                }
            </View>
        </View>
    )
}

export default Wallpost;