import React, {useEffect, useState} from 'react';
import {BackHandler, ScrollView, Text, View} from 'react-native';
import Wallpost from './components/Post';
import Post from './model/Post';
import {genericPost, getJson, post} from '../service/ApiService';
import {useFocusEffect} from "@react-navigation/core";
import {styles} from "./style/styles";

function HomeScreen(props) {

    const [posts, setPosts] = useState([]);
    const {navigate} = props.navigation;
    useEffect(() => {
         getPosts();
    },[]);

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => BackHandler.exitApp()

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

        return (
            <ScrollView>
                {posts.map((post, index) =>
                    <Wallpost
                        navigate={navigate}
                        key={index + ':postView'}
                        photo={post.photo}
                        userName={post.userName}
                        profilePicUrl={post.profilePicUrl}
                        likePost={likePost}
                        commentPost={commentPost}
                        ilikeThisPic={post.ilikeThisPic}
                    />
                )}

            </ScrollView>
        );


    function likePost(pictureID) {
        post('/picture/' + pictureID)
            .then(getPosts())
            .catch(error => alert(error))
    }

    function commentPost(pictureID, comment) {
        post('/comment/' + pictureID, comment, 'text/plain')
            .then(response => {
                getPosts()
            })
            .catch(error => alert(error))
    }

    function getPosts() {
        getJson('/posts')
            .then(json => json.map(post => new Post(post)))
            .then(posts => {
                setPosts(posts)

            })
            .catch(error => {
                if (error.message === '403'){
                    props.navigation.navigate('Login')
                }
            })
    }
}

export default HomeScreen;
