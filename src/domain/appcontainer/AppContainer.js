import React, { Component } from 'react';
import {Button, ScrollView} from "react-native";
import {Profile} from "../profile/Profile";
import {TakeNewPic} from "../camera/TakeNewPic";

export default class AppContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            showCamera: false,
            showProfile: false,
        }
    }

    render(){
        return (
            <ScrollView>
                {this.state.showCamera && <TakeNewPic />}
                {this.state.showProfile && <Profile />}

                <Button
                    title={'Take a new Pic'}
                    onPress={
                        () => {
                            this.setState({
                                showCamera: true,
                                showProfile: false
                            })
                        }
                    }
                />
                <Button
                    title={'Go to my Profile'}
                    onPress={
                        () => this.setState({
                            showCamera: false,
                            showProfile: true
                        })
                    }
                />
            </ScrollView>
        )
    }
}
