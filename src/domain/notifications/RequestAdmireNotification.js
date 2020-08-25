import React from 'react'
import { View, Text, Image, Button } from "react-native";
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
           
                <Text>
                    {props.name}
                </Text>
                <Text> admires you! </Text>
            </View>
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
