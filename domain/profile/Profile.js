import React, { Component } from 'react';
import { Button, ScrollView } from 'react-native';

export class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
            user: null
        }
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <ScrollView>
            {this.state.user &&

            }
        </ScrollView>
    }
}
