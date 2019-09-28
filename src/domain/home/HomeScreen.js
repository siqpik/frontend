import React from 'react';
import {ScrollView, Text} from "react-native";
import axios from "axios";
import Post from "../navigation/model/Post";

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
                {this.state.posts.map(post => <Text >{post.userName}</Text>)}
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