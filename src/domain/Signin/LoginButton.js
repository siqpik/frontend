import {styles} from "../login/style/styles";
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

export const LoginButton = props => (
    <View style={styles.signupTextCont}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signupText}> Login</Text>
        </TouchableOpacity>
    </View>
);