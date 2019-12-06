import React from 'react';
import {View, Text, Button} from "react-native";
import {styles} from "./style/styles";

export class AlertBeforePic extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.alertContainer}>
                <View style={styles.alertText}>
                    <Text style={styles.title}>
                        SIQPIK RULES:
                    </Text>
                    <View style={styles.rules}>

                        <View>
                            <Text style={styles.rulesText}>1. If you discard a picture you have taken it will not save on your phone</Text>
                        </View>
                        <View>
                            <Text style={styles.rulesText}>2. Once you take a picture a timer will start and you must post within that time or risk losing the photo.</Text>
                        </View>
                        <View>
                            <Text style={styles.rulesText}>3. If you discard 2 pictures then you will lose the ability to take pictures for a period of time. </Text>
                        </View>
                    </View>
                </View>


                <View style={styles.alertButtons}>
                    <Button style={styles.button} title="Cancel" onPress={() => navigate('Home')}/>
                    <Button style={styles.button} title="Accept" onPress={() => navigate('Camera')}/>
                </View>
            </View>





        )
    }
}

