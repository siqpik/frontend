import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {styles} from "./style/styles";

export default props =>
    <TouchableOpacity
        onPress={() => props.navigate('Picture', {
            index: props.index,
            pics: props.pics,
            username: props.username
        })}

        key={props.index + 'thumbnail'}
    >
        <Image
            key={props.index}
            style={styles.picStyle}
            source={{uri: props.url}}
        />
    </TouchableOpacity>
