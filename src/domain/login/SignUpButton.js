import {styles} from "./style/styles";
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

export const SignUpButton = props => (
    <View style={styles.signupTextCont}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.signupText}> Signup</Text>
        </TouchableOpacity>
    </View>
);
