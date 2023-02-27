import {REQUEST} from "../../service/model/Request";
import {createSlice} from "@reduxjs/toolkit";
import Post from "../model/Post";

interface FeedSate {
    posts: Post[],
    page: number,
    request: REQUEST
}

const initialState: FeedSate = {
    posts: [],
    page: 1,
    request: REQUEST.NONE
}


const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        reset(state) {
            state.posts = []
            state.page = 1
            state.request = REQUEST.NONE
        },
        searchingFeed(state) {
            state.request = REQUEST.PENDING
        },
        errorSearchingFeed(state) {
            state.request = REQUEST.ERROR
        },
        successSearchingFeed(state, posts) {
            state.request = REQUEST.SUCCESS
            state.posts = state.page === 1 ? posts.payload : [...state.posts, ...posts.payload]
            state.page = state.page + 1
        },
        likingPost(state) {
            state.request = REQUEST.PENDING
        },
        errorLikingPost(state) {
            state.request = REQUEST.ERROR
        },
        successLikingPost(state, postId) {
            state.request = REQUEST.SUCCESS
            state.posts = state.posts.map(post => {
                return post.id === postId.payload
                    ? {...post, likesCount: post.likesCount + 1}
                    : post
            })
        },
        unReactingToPost(state) {
            state.request = REQUEST.PENDING
        },
        errorUnReactingPost(state) {
            state.request = REQUEST.ERROR
        },
        successUnReactingPost(state, postId) {
            state.request = REQUEST.SUCCESS
            state.posts = state.posts.map(post => {
                return post.id === postId.payload
                    ? {...post, likesCount: post.likesCount - 1, username: 'hpta!'}
                    : post
            })
        },
    }
})


export const {
    searchingFeed,
    successSearchingFeed,
    errorSearchingFeed,
    successLikingPost,
    likingPost,
    errorLikingPost,
    unReactingToPost,
    errorUnReactingPost,
    successUnReactingPost,
    reset
} = feedSlice.actions
export default feedSlice.reducer
