import React, {useEffect, useState} from 'react';
import {RefreshControl} from 'react-native';
import WallPost from './components/Post';
import Post from './model/Post';
import {deleteItem, getJson, post} from '../service/ApiService';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../service/AuthenticationService";
import {
    errorLikingPost,
    errorSearchingFeed,
    errorUnReactingPost,
    likingPost,
    reset,
    searchingFeed,
    successLikingPost,
    successSearchingFeed,
    successUnReactingPost,
    unReactingToPost
} from "./modules/feedSlice";
import {useAppDispatch, useAppSelector} from "../../config/hooks";


export default props => {

    const fetchFeed = () => {
        dispatch(searchingFeed())
        getJson(`/feed/${page}`)
            .then(json => json.map(post => new Post(post)))
            .then(newPosts => {
                dispatch(successSearchingFeed(newPosts))
            }).catch(error => {
                console.log("error fetching feed: " + error)
                dispatch(errorSearchingFeed())
            }
        )
    }

    const {posts, request, page} = useAppSelector(store => store.feed)
    const dispatch = useAppDispatch()

    const [loggedUsername, setLoggedUsername] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = timeout => {
        return new Promise(resolve => {
            fetchFeed()
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        dispatch(reset())
        setRefreshing(true);
        wait(100).then(() => setRefreshing(false));
    }, []);

    const {navigate} = props.navigation;

    useEffect(() => {
        AsyncStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
            .then(username => {
                setLoggedUsername(username)
                fetchFeed()
            })
    }, []);

    /*useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => BackHandler.exitApp()

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );*/


    const togglePostReaction = (postId, toDelete) => {
        if (toDelete) {
            dispatch(unReactingToPost())
            deleteItem('/post/' + postId + '/reaction')
                .then(() => {
                    dispatch(successUnReactingPost(postId))
                })
                .catch(error => {
                    dispatch(errorUnReactingPost())
                    alert('You can not un-react this post now: ' + error)
                })
        } else {
            dispatch(likingPost())
            post('/post/' + postId + '/reaction')
                .then(() => {
                    dispatch(successLikingPost(postId))
                })
                .catch(error => {
                    dispatch(errorLikingPost())
                    alert('You can not like this post now\': ' + error)
                })
        }
    }

    const commentPost = (pictureID, comment) =>
        post('/comment/' + pictureID, comment, 'text/plain')
            .catch(error => alert(error))

    const getFormattedDate = date => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(date);
        const postYear = d.getUTCFullYear()

        return monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + (postYear === new Date().getUTCFullYear() ? '' : postYear)
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
                posts.length === 0 && <WallPost
                    date={getFormattedDate(new Date())}
                    mediaUrl={'https://res.cloudinary.com/siqpik/image/upload/v1670515879/ibscji05tdziedxvfz7p.jpg'}
                    username={'Siqpik'}
                    profilePicUrl={'https://res.cloudinary.com/siqpik/image/upload/v1670515879/ibscji05tdziedxvfz7p.jpg'}
                    likesCount={9999}
                    likePost={() => {}}
                    commentsCount={999}
                    comments={[]}
                    iReacted={true}
                    loggedUsername={loggedUsername}
                />
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
}
