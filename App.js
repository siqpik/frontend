/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, ScrollView } from 'react-native';
import { MyCamera } from './domain/camera/MyCamera';
import { Profile } from './domain/profile/Profile';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showCamera: false,
      showProfile: false
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.showCamera && <MyCamera />}
        {this.state.showProfile && <Profile />}

        <Button
            title={'Take a new Pic'}
            onPress={
              () => this.setState({
                showCamera: true,
                showProfile: false
              })
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
    );
  }
}
