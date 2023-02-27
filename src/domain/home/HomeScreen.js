import React, {useEffect, useState} from 'react';
import {BackHandler, RefreshControl, Text, TouchableOpacity} from 'react-native';
import WallPost from './components/Post';
import Post from './model/Post';
import {deleteItem, getJson, post} from '../service/ApiService';
import {useFocusEffect} from "@react-navigation/core";
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";
import {connect} from "react-redux";
import {getFeed} from "../../modules/reducer";
import {bindActionCreators} from "redux";
import {fetchFeed} from "./service/feed";

const HomeScreen = props => {

    //const [posts, setPosts] = useState([]);
    //const [postsPage, setPostsPage] = useState(1);
    const [loggedUsername, setLoggedUsername] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const wait = timeout => {
        return new Promise(resolve => {
            props.fetchFeed;
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    const {navigate} = props.navigation;

    useEffect(() => {
        AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
            .then(username => {
                setLoggedUsername(username)
            })
        fetchFeed();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => BackHandler.exitApp()

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

    const fetchFeed = () => dispatch => {
        dispatch(getFeed())
        console.log("Ronn: " + props.postsPage)
        getJson(`/feed/${props.postsPage}`)
            .then(json => json.map(post => new Post(post)))
            .then(nextPosts => {
                setPosts([...posts, ...nextPosts])
                setPostsPage(postsPage + 1)
            })
            .catch(error => {
                if (error.message === '403') {
                    props.navigation.navigate('Login')
                }
            })
    }

    const togglePostReaction = (postId, toDelete) => {
        callApiToToggleReaction(toDelete, postId);

        toggleReaction(postId, toDelete);
    }

    const callApiToToggleReaction = (toDelete, postId) => {
        if (toDelete) {
            deleteItem('/post/' + postId + '/reaction')
                .then(response => {
                    if (!response.ok) {
                        alert('You can not un-react this post now')
                    }
                })
                .catch(error => alert('Borrando: ' + error))
        } else {
            post('/post/' + postId + '/reaction')
                .then(response => {
                    if (!response.ok) {
                        alert('You can not like this post now')
                    }
                })
                .catch(error => alert('posteando: ' + error))
        }
    }

    const toggleReaction = (postId, toDelete) => {
        setPosts(previous => {
            const prev = [...previous]
            const indexToChange = prev.findIndex(p => p.id === postId)

            prev[indexToChange] = {
                ...prev[indexToChange],
                iReacted: !toDelete,
                likesCount: prev[indexToChange].likesCount + (toDelete ? -1 : 1)
            }

            return prev
        })
    }

    const commentPost = (pictureID, comment) =>
        post('/comment/' + pictureID, comment, 'text/plain')
            .catch(error => alert(error))

    const getFormattedDate = date => {
        const d = new Date(date);
        const postYear = d.getUTCFullYear()
        return monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + (postYear
        === new Date().getUTCFullYear() ? '' : postYear)
    }

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 1;

        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (

        <KeyboardAvoidingScrollView
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    fetchFeed()
                }
            }}
            scrollEventThrottle={900}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
        >
            {
                (props.posts.length === 0 || props.request !== Request.SUCCESS) && <WallPost
                    date={getFormattedDate(new Date())}
                    mediaUrl={'https://res.cloudinary.com/siqpik/image/upload/v1670515879/ibscji05tdziedxvfz7p.jpg'}
                    username={'Siqpik'}
                    profilePicUrl={'https://res.cloudinary.com/siqpik/image/upload/v1670515879/ibscji05tdziedxvfz7p.jpg'}
                    likesCount={999}
                    commentsCount={999}
                    comments={[]}
                    iReacted={true}
                    loggedUsername={loggedUsername}
                />
            }
            {props.posts.map((post, index) =>
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
}

const mapStateToProps = state => ({
    posts: state.posts,
    postsPage: state.postsPage,
    request: state.request
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFeed
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
