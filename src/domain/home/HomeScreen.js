import React, {useEffect, useState} from 'react';
import {BackHandler, RefreshControl, Text} from 'react-native';
import WallPost from './components/Post';
import Post from './model/Post';
import {deleteItem, getJson, post} from '../service/ApiService';
import {useFocusEffect} from "@react-navigation/core";
import {
  KeyboardAvoidingScrollView
} from 'react-native-keyboard-avoiding-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";

function HomeScreen(props) {

  const [refreshing, setRefreshing] = React.useState(false);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const wait = (timeout) => {
    return new Promise(resolve => {
      getFeed();
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const [posts, setPosts] = useState([]);
  const [loggedUsername, setLoggedUsername] = useState([]);
  const {navigate} = props.navigation;

  useEffect(() => {
    AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        .then(username => {
          setLoggedUsername(username)
        })
    getFeed();
  }, []);

  useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => BackHandler.exitApp()

        BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [])
  );

  const getFormattedDate = date => {
    const d = new Date(date);
    const postYear = d.getUTCFullYear()
    return monthNames[d.getMonth()] + ' ' + d.getDay() + ' ' + (postYear
    === new Date().getUTCFullYear() ? '' : postYear)
  }

  return (
      <KeyboardAvoidingScrollView scrollEventThrottle={16}
                                  refreshControl={<RefreshControl
                                      refreshing={refreshing}
                                      onRefresh={onRefresh}/>}>
        {
          posts.length === 0 && <Text>{"\n"}
              {}      No posts yet! {"\n"}
              {}      Try admiring some friends :)</Text>

        }
        {posts.map((post, index) =>
            <WallPost
                navigate={navigate}
                id={post.id}
                key={index + ':postView'}
                date={getFormattedDate(post.date)}
                mediaUrl={post.mediaUrl}
                username={post.userInfo.username}
                profilePicUrl={post.userInfo.profilePicUrl}
                likePost={togglePostReaction}
                likesCount={post.likesCount}
                commentPost={commentPost}
                commentsCount={post.commentsCount}
                comments={post.comments}
                iReacted={post.iReacted}
                loggedUsername={loggedUsername}
            />
        )}
      </KeyboardAvoidingScrollView>
  );

  function togglePostReaction(postId, toDelete) {
    if (toDelete) {
      deleteItem('/post/' + postId + '/reaction')
      .then(response => {
        if (response.ok) {
          getFeed()
        } else {
            alert('You can not like this post now')
        }
      })
      .catch(error => alert('Borrando: ' + error))
    } else {
      post('/post/' + postId + '/reaction')
      .then(_ => getFeed())
      .catch(error => alert('posteando: ' + error))
    }
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
      if (error.message === '403') {
        props.navigation.navigate('Login')
      }
    })
  }
}

export default HomeScreen;
