import React from 'react';
import {View, Text, Button} from "react-native";
import {styles} from "./style/styles";

export class AlertBeforePic extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.alertContainer}>
                <View style={styles.alertText}>
                    <Text>
                        Be careful! You will only have 5 minutes to decide if you want to keep the photo or not.
                    </Text>
                </View>
                <View style={styles.alertButtons}>
                    <Button style={styles.button} title="Cancel" onPress={() => navigate('Home')}/>
                    <Button style={styles.button} title="Accept" onPress={() => navigate('Camera')}/>
                </View>
            </View>

        )
    }
}

