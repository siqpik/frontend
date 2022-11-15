import React, {Component} from 'react';
import {View} from "react-native";
import {Avatar, ListItem, SearchBar} from 'react-native-elements';
import ProfileResult from "../../model/ProfileResult";
import {getJson} from '../../service/ApiService';

export class SearchProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      profiles: []
    }
  }

  updateSearch = search => {
    if (search === '') {
      this.setState({
        profiles: []
      })
    } else {
      this.searchProfiles(search)
    }
    this.setState({search})
  };

  searchProfiles = name => {
    getJson('/user/' + name)
    .then(profiles => profiles.map(profile => new ProfileResult(profile)))
    .then(profiles => this.setState({profiles}))
    .catch(error => console.log(error))
  }

  render() {
    return (
        <View>
          <SearchBar
              round
              searchIcon={{size: 24}}
              onChangeText={text => this.updateSearch(text)}
              onClear={() => this.updateSearch('')}
              placeholder="Type Here..."
              value={this.state.search}
          />
          {
            this.state.profiles.map((profile, index) => (
                <ListItem key={index}
                          bottomDivider
                          onPress={() => this.props.navigation.navigate(
                              'ProfileOther', {userName: profile.userName})}
                >
                  <Avatar source={{uri: profile.avatarUrl}}/>
                  <ListItem.Content>
                    <ListItem.Title>{profile.userName}</ListItem.Title>
                    <ListItem.Subtitle>{profile.name}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
            ))
          }
        </View>
    );
  }
}
