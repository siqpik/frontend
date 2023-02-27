import React, {useState} from 'react';
import {styles} from "../style/styles";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default props => {

    const [picLiked, setPicLiked] = useState();
    const [comment, setComment] = useState();

    function goToProfile() {
        if (props.loggedUsername !== props.usernam) {
            props.navigate('ProfileOther', {
                userName: props.username
            })
        } else {
            props.navigate('Profile')
        }
    }

    return (
        <View key={1} style={styles.post}>

            <TouchableOpacity onPress={() => goToProfile()}>
                <View style={styles.userTitle}>

                    <Image source={{uri: props.profilePicUrl}} style={styles.profilePic}/>
                    <View style={styles.titleName}>
                        <Text style={styles.name}>{props.username}</Text>
                        <Text style={styles.smallerName}>{props.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Image source={{uri: props.mediaUrl}} style={styles.wallPic}/>

            <View style={styles.comments}>
                <Text
                    style={styles.firstComment}> {props.likesCount} like{props.likesCount > 1 ? 's' : ''} </Text>
                {/*<Text style={styles.firstComment}> {props.commentsCount} comments </Text>*/}
                {props.iReacted || picLiked ?
                    <Icon
                        onPress={() => {
                            props.likePost(props.id, true);
                            setPicLiked(false);
                        }}
                        name="star"
                        size={35}
                        color="black"
                    />
                    :
                    <Icon
                        onPress={() => {
                            props.likePost(props.id, false);
                            setPicLiked(true);
                        }}
                        name="staro"
                        size={35}
                        color="black"
                    />
                }
            </View>

            <View style={styles.postDescription}>
                <View style={styles.comments}>
                    {/*<TextInput style={styles.commentInput}
                               onChangeText={comment => setComment(comment)}
                               value={comment}
                               onSubmitEditing={() => {
                                   comment ? (props.commentPost(props.id, comment), setComment('')) : setComment('')
                               }}
                    />
                    {comment ?
                        <Icon name="rocket1"
                              size={30}
                              color="black"
                              onPress={() => {
                                  props.commentPost(props.id, comment);
                                  setComment('');
                              }}
                        />
                        :
                        <Icon name="rocket1" size={30} color="white"/>}*/}



                </View>
            </View>

            {
                props.comments.length >= 1 ?
                    <View style={styles.firstCommentContainer}>
                        <View style={styles.firstComment}>
                            <Text style={styles.postUserName}>
                                {props.comments[0].username}: <Text></Text>
                            </Text>
                            <Text style={styles.postFirstComment}>
                                {props.comments[0].comments}
                            </Text>
                        </View>
                        {props.comments[1] ?
                            <TouchableOpacity style={styles.firstComment}
                                              onPress={() => props.navigate(
                                                  'PostComments', {
                                                      comments: props.comments
                                                  })}
                            >
                                <Text style={styles.postFirstComment}>
                                    View all {props.comments.length} comments
                                </Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.firstCommentContainer}>
                                <Text style={styles.firstComment}> </Text>
                            </View>
                        }
                    </View>
                    :
                    <View style={styles.firstCommentContainer}>
                        <Text style={styles.firstComment}> </Text>
                    </View>
            }
        </View>
    )
}
