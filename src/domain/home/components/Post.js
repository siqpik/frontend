import * as React from 'react'
import {styles} from "../style/styles";
import {Dimensions, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Image from 'react-native-scalable-image';

export default props => (
        <View style={styles.post}>
            <View style={styles.userTitle}>
                <Image source={{uri: props.profilePicUrl}} width={50} style={styles.profilePic}/>
                <View style={styles.titleName}>
                <Text>{props.userName}</Text>
                <Text> {props.photo.date}</Text>
                </View>
            </View>
            <Image source={{uri: props.photo.url}} style={styles.wallPic} width={Dimensions.get('window').width} />
            <View style={styles.postDescription}>
                <Icon
                    name="star-o"
                    size={30}
                    color="black"/>
            </View>

        </View>
)