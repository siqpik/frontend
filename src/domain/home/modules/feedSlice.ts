//Action Creators

import {REQUEST} from "../../service/model/Request";
import {createSlice} from "@reduxjs/toolkit";
import Post from "../model/Post";

interface FeedSate {
    posts: Array<Post>,
    postsPage: number,
    request: REQUEST
}

const initialState: FeedSate = {
    posts: [],
    postsPage: 1,
    request: REQUEST.NONE
}

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        fetchFeed(state){
            state.request = REQUEST.PENDING
        }
    }
})


export const { fetchFeed } = feedSlice.actions
export default feedSlice.reducer


const GET_FEED = "GET_FEED"
const ERROR_FETCHING_FEED = 'ERROR_FETCHING_FEED'
const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS'

export const errorFetchingFeed = () => ({
    type: ERROR_FETCHING_FEED
})

export const getFeedSuccess = posts => ({
    type: GET_FEED_SUCCESS,
    posts
})

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case ERROR_FETCHING_FEED: return {
            ...state,
            request: REQUEST.ERROR
        }
        case GET_FEED_SUCCESS: return {
            ...state,
            request: REQUEST.SUCCESS,
            posts: [...state.posts, ...action.posts],
            postsPage: state.postsPage + 1
        }
        default: return state
    }
}
