import React from 'react'
import {View, Text, Image, Button} from "react-native";
import {styles} from "./style/styles";


export const RequestAdmireNotification = props => {
    return (
        <View style={styles.generalLayout}>
            <Image
                key={props.id}
                style={styles.img}
                source={{uri: props.image}}
            />
            <Text>
                {props.name} wants to be your admirer
            </Text>
            {props.status === 'Pending'
                ? (<View style={styles.buttonsContainer}>
                    <Button
                        title='Accept'
                        onPress={props.accept}
                    />
                    <Button
                        title='Dismiss'
                        onPress={props.dismiss}
                    />
                </View>)
                : <Text> {props.status} </Text>
            }
        </View>
    )
}
