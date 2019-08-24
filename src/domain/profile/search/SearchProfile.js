import React, {Component} from 'react';
import {View} from "react-native";
import {ListItem, SearchBar} from 'react-native-elements';
import axios from "axios";
import ProfileResult from "../../model/ProfileResult";

export class SearchProfile extends Component{

    constructor(props){
        super(props)
        this.state = {
            search: '',
            profiles: []
        }
    }

    updateSearch = search => {
        if (search === ''){
            this.setState({
                profiles: []
            })
        } else {
            this.searchProfiles(search)
        }
        this.setState({search})
    };

    searchProfiles = name => {
        axios.get('https://siqpik.herokuapp.com/api/profile/search/' + name)
            .then(resp => resp.data)
            .then(profiles => profiles.map(profile => new ProfileResult(profile)))
            .then(profiles => this.setState({profiles}))
            .catch(error => console.log(error))
    }

    render(){
        return (
            <View>
                <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={text => this.updateSearch(text)}
                    onClear={() => this.updateSearch('')}
                    placeholder="Type Here..."
                    value={this.state.search}
                />

                {this.state.profiles.map((profile, index) => (
                    <ListItem
                        key={index}
                        title={profile.name}
                        subtitle={profile.userName}
                        leftAvatar={{ source: { uri: profile.avatarUrl} }}
                        onPress={() => alert(profile.userName)}
                    />
                    ))
                }
            </View>
        );
    }
}