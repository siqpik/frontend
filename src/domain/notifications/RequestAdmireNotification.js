import React from 'react'
import { View, Text, Image,TouchableOpacity } from "react-native";
import { styles } from "./style/styles";
import { shortenName } from '../shared/utils/functions';


export const RequestAdmireNotification = props => {
    return (
        <View style={styles.generalLayout}>
            <View style={styles.userLayout}>
                <Image
                    key={props.id}
                    style={styles.img}
                    source={{ uri: props.image }}
                />
                {props.status === 'Pending' ? (
                    <View style={styles.statusContainer}>
                        <View style={styles.userContainer}>
                        <Text style={styles.userName}>{shortenName(props.name)}</Text>
                        <Text> Wants to admire you!</Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={props.accept}
                            >
                                <Text style={styles.buttonText}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button} 
                                onPress={props.dismiss}
                            >
                                <Text style={styles.buttonText}>Dismiss</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
                    :
                    <View style={styles.statusContainer}>
                        <Text style={styles.userName}>You have {props.status.toLowerCase()} {props.name}'s request!</Text>
                    </View>
                }
            </View>
        </View>
    )
}
