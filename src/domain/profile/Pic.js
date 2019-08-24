import React from 'react';
import {Image, View} from "react-native";

export const Pic = props => {
    return(
        <View key={props.index + 'view'}>
            <Image
                key={index}
                style={{width: 400, height: 400}}
                source={{uri: props.url}}
            />
            <View key={props.index + 'space'} style={{height: 15, backgroundColor: 'white'}}/>
        </View>
    )
};
