import React from 'react'
import {View, Text, Image} from 'react-native'
import {styles} from "./style/styles";

export const ProfileHeader = props => {
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <Image
                key={props.name}
                style={styles.profilePic}
                source={{uri: props.profilePicUrl}}
            />
            <View style={styles.admireContainer}>
                <View style={styles.centerHorizontal}>
                    <Text>Admirers</Text>
                    <Text style={{fontWeight: 'bold'}}>{props.admirers}</Text>
                </View>
                <View style={styles.centerHorizontal}>
                    <Text>Admiring</Text>
                    <Text style={{fontWeight: 'bold'}}>{props.admiring}</Text>
                </View>
            </View>
        </View>
    )
}
