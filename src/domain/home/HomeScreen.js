import React, { useState, useEffect } from 'react';
import {ScrollView} from "react-native";
import Wallpost from "./components/Post";
import Post from "./model/Post";
import {getJson, post} from "../service/AuthenticationService";

function HomeScreen() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getPosts();
    },[]);

        return (
            <ScrollView>
                {posts.map((post, index) =>
                    <Wallpost
                        key={index + ':postView'}
                        photo={post.photo}
                        userName={post.userName}
                        profilePicUrl={post.profilePicUrl}
                        likePost={likePost}
                        ilikeThisPic={post.ilikeThisPic}
                    />
                )}
            </ScrollView>
        );


    function likePost(pictureID) {
        post('/picture/' + pictureID)
            .then(resp => {
                console.log(resp);
            }).catch(error => alert(error))
    }

    function getPosts() {
        getJson('/posts')
            .then(json => json.map(post => new Post(post)))
            .then(posts => setPosts(posts))
            .catch(error => alert("Ronnie" + error))
    }
}

export default HomeScreen;