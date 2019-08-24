import React from 'react';
import {Image, View} from "react-native";
import {styles} from "./style/styles";

export const Pic = props => {
    return(
        <View key={props.index + 'view'}>
            <Image
                key={props.index}
                style={styles.picStyle}
                source={{uri: props.url}}
            />
        </View>
    )
};
