import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style/styles';
import { getJson } from '../service/ApiService';

export class AlertBeforePic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attempts: undefined
        };
    }

    componentDidMount() {
        getJson('/attempt')
            .then(json => this.setState({ attempts: json.attempts }))
            .catch(error => alert('An error has occurred: ' + error))
    }



    render() {
        const LIMIT_OF_ATTEMPTS = 3;
        const { navigate } = this.props.navigation;
        return (
            this.state.attempts >= 0 && this.state.attempts < LIMIT_OF_ATTEMPTS
                ? (
                    <View style={styles.alertContainer}>
                        <View style={styles.alertText}>
                            <Text style={styles.title}>
                                HOW SIQPIK WORKS:
                            </Text>
                            <View style={styles.rules}>
                                <View>
                                    <Text style={styles.rulesText}>You cannot upload pictures from your camera roll. All the pictures and videos (Future) will have to come in the moment you take them.</Text>
                                </View>
                                <View>
                                    <Text style={styles.rulesText}>Once you take a picture a timer will start and you must post within that time or risk losing the photo.</Text>
                                </View>
                                <View>
                                    <Text style={styles.rulesText}>You have a maximum of three photos per day. You have used {this.state.attempts} of 3 attempts </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.alertButtons}>

                            <TouchableOpacity style={styles.button} onPress={() => navigate('Siqpik')}>
                                <Text style={styles.buttonText}> Cancel </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigate('TakePic')}>
                                <Text style={styles.buttonText}> Accept </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                )
                : this.state.attempts >= LIMIT_OF_ATTEMPTS
                    ? (
                        <View style={styles.alertContainer}>
                            <View>
                                <Text style={styles.rulesText}>
                                    Not More Attempts For Today!
                                </Text>
                                <Text style={styles.rulesText}>
                                    Try Again Tomorrow
                                </Text>

                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonHome} onPress={() => navigate('Home')}>
                                    <Text style={styles.buttonText}> Back To Home Page </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                    : null
        )
    }
}

