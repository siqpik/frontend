import React from 'react';
import {ScrollView} from "react-native";
import axios from "axios";
import PostView from "./components/Post";
import Post from "./model/Post";

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
        axios.get('https://siqpik.herokuapp.com/api/posts')
            .then(resp => resp.data)
            .then(json => json.map(post => new Post(post)))
            .then(posts => this.setState({posts}))
            .catch(error => alert(error))
    }
}