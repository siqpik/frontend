import * as React from 'react'
import {styles} from "../../camera/style/styles";
import {Image, Text, View} from "react-native";

export default props => (
        <View style={styles.post}>
            <Text>------------------------------------------------------------------------</Text>
            <Text>------------------------------------------------------------------------</Text>
            <Image source={{uri: props.profilePicUrl}}   style={{width: 35, height: 35}}/>
            <Text>{props.userName}</Text>
            <Text>{props.photo.date}</Text>
            <Image source={{uri: props.photo.url}} style={styles.takenPic} />
        </View>
)