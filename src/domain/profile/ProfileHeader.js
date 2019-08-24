import React from 'react'
import {View, Text, Image} from 'react-native'
import {styles} from "./style/styles";

export const ProfileHeader = props => {
    return(
        <View>
            <View>
                <Text>{props.name}</Text>
            </View>
            <Image
                key={props.name}
                style={styles.profilePic}
                source={{uri: props.profilePicUrl}}
            />
            <View>
                <View>
                    <Text>Admirers</Text>
                    <Text>{props.admirers}</Text>
                </View>
                <View>
                    <Text>Admiring</Text>
                    <Text>{props.admiring}</Text>
                </View>
            </View>
        </View>
    )
}
