import * as React from 'react'
import {styles} from "../style/styles";
import {Dimensions, Text, TextInput, View} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Image from 'react-native-scalable-image';

export default props => (

        <View style={styles.post}>
            <View style={styles.userTitle}>
                <Image source={{uri: props.profilePicUrl}} width={60} style={styles.profilePic}/>
                <View style={styles.titleName}>
                <Text style={styles.name}>{props.userName}</Text>
                <Text> {props.photo.date}</Text>
                </View>
            </View>
            <Image source={{uri: props.photo.url}} style={styles.wallPic} width={Dimensions.get('window').width} />
            <View style={styles.postDescription}>
                <TextInput style={styles.commentInput}/>
                <Icon
                    onPress={() => {
                        console.log(props.photo, "Hello");
                    }}
                    name="star-o"
                    size={35}
                    color="black"/>
            </View>

        </View>
)