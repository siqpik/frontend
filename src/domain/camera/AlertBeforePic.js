import React from 'react';
import {View, Text, Button} from "react-native";
import {styles} from "./style/styles";
import {getJson} from  "../service/AuthenticationService"

export class AlertBeforePic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            attempts: undefined
        };
    }

    componentDidMount() {
        getJson('/attempts')
            .then(json => this.setState({attempts: json.attempts}))
            .catch(error => alert('An error has occurred: ' + error))
    }

    render(){
        const LIMIT_OF_ATTEMPTS = 3;
        const {navigate} = this.props.navigation;
        return(
            this.state.attempts >= 0 && this.state.attempts < LIMIT_OF_ATTEMPTS
                ? (
                    <View style={styles.alertContainer}>
                        <View style={styles.alertText}>
                            <Text>
                                Be careful! You will only have 5 minutes to decide if you want to keep the photo or not.
                                You have used {this.state.attempts} of 3 attempts
                            </Text>
                        </View>
                        <View style={styles.alertButtons}>
                            <Button style={styles.button} title="Cancel" onPress={() => navigate('Home')}/>
                            <Button style={styles.button} title="Accept" onPress={() => navigate('Camera')}/>
                        </View>
                    </View>
                )
                : this.state.attempts >= LIMIT_OF_ATTEMPTS
                    ? (
                        <View style={styles.alertContainer}>
                            <View style={styles.alertText}>
                                <Text>
                                    Not more attempts for today! Try again tomorrow
                                </Text>
                            </View>
                            <View style={styles.alertButtons}>
                                <Button style={styles.button} title="Ok" onPress={() => navigate('Home')}/>
                            </View>
                        </View>
                    )
                    : null
        )
    }
}

