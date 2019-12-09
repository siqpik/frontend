import React from 'react'
import {View, Text, Image, Button} from "react-native";
import {styles} from "./style/styles";


export const RequestAdmireNotification = props => {
    return (
        <View style={styles.generalLayout}>
            <Image
                key={props.name}
                style={styles.img}
                source={{uri: props.image}}
            />
            <Text>
                {props.name} wants to be your admirer
            </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    title='Accept'
                    onPress={() => alert('I accept')}
                />
                <Button
                    title='Dismiss'
                    onPress={() => alert('I dismiss')}
                />
            </View>
        </View>
    )
}
