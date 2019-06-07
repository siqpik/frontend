/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, ScrollView} from 'react-native';
import {MyCamera} from "./camera/MyCamera";


type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)

    this.state = {
        showCamera: false
    }
  }

    pic = {
    uri: 'https://cdnimg.webstaurantstore.com/images/products/large/166694/271843.jpg'
  }

  render() {
    return (
      <ScrollView>

          {this.state.showCamera && <MyCamera/>}

        {!this.state.showCamera && <Button title={'Open fking camera'} onPress={() => this.setState({showCamera: true})}/>}
      </ScrollView>
    );
  }
}