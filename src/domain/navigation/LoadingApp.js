import React, {Component} from 'react';
import {Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TOKEN_SESSION} from "../service/AuthenticationService";

export class LoadingApp extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        AsyncStorage.getItem(TOKEN_SESSION)
            .then(token => {
                this.props.navigation.navigate(token ? 'RootNavigation' : 'Login')
            })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Text>Loading...</Text>;
    }
}
