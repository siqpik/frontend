import React from 'react';
import {ScrollView} from "react-native";
import PostView from "./components/Post";
import Post from "./model/Post";
import {getJson} from "../service/AuthenticationService";

export class HomeScreen extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(): void {
        this.getPosts()
    }

    render() {
        return (
            <ScrollView>
                {this.state.posts.map((post, index) =>
                    <PostView
                        key={index + ':postView'}
                        photo={post.photo}
                        userName={post.userName}
                        profilePicUrl={post.profilePicUrl}
                    />
                )}
            </ScrollView>
        );
    }

    getPosts = () => {
        getJson('/posts')
            .then(json => json.map(post => new Post(post)))
            .then(posts => this.setState({posts}))
            .catch(error => alert("Ronnie" + error))
    }
}
