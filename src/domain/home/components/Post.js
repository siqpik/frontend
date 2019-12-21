import * as React from 'react'
import {styles} from "../style/styles";
import {Image, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default props => (
        <View style={styles.post}>
            <View style={styles.userTitle}>
                <Image source={{uri: props.profilePicUrl}}  style={styles.profilePic}/>
                <View style={styles.titleName}>
                <Text>{props.userName}</Text>
                <Text> {props.photo.date}</Text>
                </View>
            </View>
            <Image source={{uri: props.photo.url}} style={styles.wallPic} />
            <View style={styles.postDescription}>
                <Icon
                    name="star-o"
                    size={30}
                    color="black"/>
            </View>

        </View>
)