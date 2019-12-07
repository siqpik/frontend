import React from 'react';
import {View, Text, Button, TouchableOpacity} from "react-native";
import {styles} from "./style/styles";
import Fontisto from 'react-native-vector-icons/Fontisto';


export class AlertBeforePic extends React.Component {
    state = { stopAlerts: false};





    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.alertContainer}>
                <View style={styles.alertText}>
                    <Text style={styles.title}>
                        HOW SIQPIK WORKS:
                    </Text>
                    <View style={styles.rules}>

                        <View>
                            <Text style={styles.rulesText}>1. If you discard a picture you have taken it will not save on your phone</Text>
                        </View>
                        <View>
                            <Text style={styles.rulesText}>2. Once you take a picture a timer will start and you must post within that time or risk losing the photo.</Text>
                        </View>
                        <View>
                            <Text style={styles.rulesText}>3. You have a maximum of three photos per day. </Text>
                        </View>
                    </View>
                </View>


                <View style={styles.alertButtons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Camera')}>
                        <Text style={styles.buttonText}> Cancel </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigate('Camera')}>
                        <Text style={styles.buttonText}> Accept </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.removeWarning}>
                    <Text style={styles.removeWarningText}>Don't Show Warning Again</Text>


                    {this.state.stopAlerts === false ?
                        <TouchableOpacity  onPress={() => this.setState ({stopAlerts:  true})}>
                            <Fontisto name="checkbox-passive" size={30}></Fontisto>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.setState ({stopAlerts:  false})}>
                            <Fontisto name="checkbox-active" size={30}></Fontisto>
                        </TouchableOpacity>
                    }
                </View>



            </View>





        )
    }
}

