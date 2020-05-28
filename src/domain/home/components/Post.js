import React, { useState, useEffect } from 'react';
import {styles} from "../style/styles";
import {Dimensions, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Image from 'react-native-scalable-image';
import {ListItem} from "react-native-elements";

function Wallpost (props) {


    const [picLiked, setPicLiked] = useState();
    const [comment, setComment] = useState();
    return (
        <View style={styles.post}>
            <View style={styles.userTitle}>
                <Image source={{uri: props.profilePicUrl}} width={60} style={styles.profilePic}/>
                <View style={styles.titleName}>
                    <Text style={styles.name}>{props.userName}</Text>
                    <Text style={styles.name}> {props.photo.date}</Text>
                </View>
            </View>
            <Image source={{uri: props.photo.url}} style={styles.wallPic} width={Dimensions.get('window').width} />
            <View style={styles.postDescription}>
                <View style={styles.comments}>
                    <TextInput style={styles.commentInput}
                           onChangeText={comment => setComment(comment)}
                           value={comment}
                     />
                    {comment ?
                    <Icon name="rocket1"
                          size={30}
                          color="black"
                          onPress={() => {
                              props.commentPost(props.photo.id, comment);
                              }}
                    />
                    :
                    <Icon name="rocket1" size={30} color="white"/>}

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

            {props.photo.comments.length >= 1?
                <View style={styles.firstCommentContainer}>
                    <TouchableOpacity style={styles.firstComment}
                          onPress={() => props.navigate('PostComments', {
                          comments: props.photo.comments
                          })}
                    >
                        <Text>
                            {props.photo.comments[0].userName}:
                        </Text>
                        <Text>
                            {props.photo.comments[0].comments}
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.firstCommentContainer}>
                    <Text style={styles.firstComment}> </Text>
                </View>

            }
        </View>
    )
}

export default Wallpost;