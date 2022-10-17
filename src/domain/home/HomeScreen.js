import React, {useEffect, useState} from 'react';
import {BackHandler, ScrollView, Text, View, RefreshControl} from 'react-native';
import Wallpost from './components/Post';
import Post from './model/Post';
import {genericPost, getJson, post} from '../service/ApiService';
import {useFocusEffect} from "@react-navigation/core";
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import {styles} from "./style/styles";

function HomeScreen(props) {

    const [refreshing, setRefreshing] = React.useState(false);


    const wait = (timeout) => {
        return new Promise(resolve => {
        getFeed();
        setTimeout(resolve, timeout);
        });
    }


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

    const [posts, setPosts] = useState([]);
    const {navigate} = props.navigation;
    useEffect(() => {
         getFeed();
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
            <KeyboardAvoidingScrollView scrollEventThrottle={16} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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

            </KeyboardAvoidingScrollView>
        );


    function likePost(pictureID) {
        post('/picture/' + pictureID)
            .then(getFeed())
            .catch(error => alert(error))
    }

    function commentPost(pictureID, comment) {
        post('/comment/' + pictureID, comment, 'text/plain')
            .then(response => {
                getFeed()
            })
            .catch(error => alert(error))
    }

    function getFeed() {
        const page = 1;
        const numberOfPostsPerPage = 7;
        getJson(`/feed/${page}`)
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
