import React, {Component} from 'react';
import {Text} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {TOKEN_SESSION} from "./domain/service/AuthenticationService";

export class LoadinApp extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        AsyncStorage.getItem(TOKEN_SESSION)
            .then(token => {
                this.props.navigation.navigate(token ? 'App' : 'Login')

            })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Text>Loading...</Text>;
    }
}
