import React, {Component} from 'react';
import {AppRegistry, ScrollView, Text} from 'react-native';
import App from "../../../App";
import User from '../model/User'
import {PicsContainer} from "./PicsContainer"

export class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        this.getUser();
    }

    render(){
        return (
            <ScrollView>
                {this.state.user &&
                <PicsContainer
                    pics={this.state.user.pics}
                />
                }
                {!this.state.user &&
                <Text>Yerrrrrrrryyyy</Text>}
            </ScrollView>
            )
    }

    getUser = () => {
        fetch("https://siqpik.herokuapp.com/profile/RDave")
            .then(resp => resp.json())
            .then(json => new User(json))
            .then(user => this.setState({user}))
            .then(alert(this.state.user))
            .catch(error => alert(error))
    }
}

AppRegistry.registerComponent('Profile', () => App);
