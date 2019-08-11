import React, {Component} from 'react';
import {AppRegistry, Image, ScrollView, View} from 'react-native';
import App from "../../../App";
import User from '../model/User'
import axios from 'axios'

export class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        this.getUser()
    }

    render(){
        return (<ScrollView>
            {
                this.state.user &&
                this.state.user.pics
                    .map((pic, index) =>
                        <View key={index + 'view'}>
                            <Image
                                key={index}
                                style={{width: 400, height: 400}}
                                source={{uri: pic.url}}
                            />
                            <View key={index + 'space'} style={{height: 15, backgroundColor: 'white'}}/>
                        </View>
                )
            }
        </ScrollView>)
    }

    getUser = () => {
        axios.get('https://aqueous-castle-34128.herokuapp.com/profile/RDave')
            .then(resp => resp.data)
            .then(json => new User(json))
            .then(user => this.setState({user}))
            .catch(error => alert(error))
    }
}

AppRegistry.registerComponent('Profile', () => App);
