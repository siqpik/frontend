import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {styles} from "./style/styles";

export const Pic = props => {
    return(
        <TouchableOpacity onPress={() => alert('lA FOTO')} key={props.index + 'view'}>
            <Image
                key={props.index}
                style={styles.picStyle}
                source={{uri: props.url}}
            />
        </TouchableOpacity>
    )
};
