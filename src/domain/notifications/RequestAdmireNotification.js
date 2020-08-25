import React from 'react'
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { styles } from "./style/styles";


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
                        <Text style={styles.userName}>{props.name}</Text>
                        <Text>Wants to admire you!</Text>
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
