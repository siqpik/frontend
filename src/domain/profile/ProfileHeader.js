import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./style/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProfileHeader = props => {
    return (
        <View>
            {props.isLoggedUser && <TouchableOpacity style={styles.rightAlign} onPress={() => props.navigation.openDrawer()}>
                <Icon
                    name="bars"
                    size={25}
                />
            </TouchableOpacity>}
            <View style={styles.header}>
                <View>
                    <Text style={styles.name}>{props.username}</Text>
                </View>
                <Image
                    key={props.username}
                    style={styles.profilePic}
                    source={{ uri: props.profilePicUrl }}
                />
                <View style={styles.admireContainer}>
                    <View style={styles.centerHorizontal}>
                        <Text>Admirers</Text>
                        <Text style={{ fontWeight: 'bold' }}>{props.admirersCount}</Text>
                    </View>
                    <View>
                        {props.isLoggedUser
                            ? null
                            : props.amIAdmirer
                                ? <Icon
                                    name='hand-grab-o'
                                    type='font-awesome'
                                    color='black'
                                    size={35}
                                />
                                : props.hasPendingRequest
                                    ? <Icon
                                        name='hourglass-half'
                                        type='font-awesome'
                                        color='#293329'
                                        size={35}
                                        onPress={props.sendAdmireRequest}
                                    />
                                    : <Icon
                                        name='user-plus'
                                        type='font-awesome'
                                        color='#293329'
                                        size={35}
                                        onPress={props.sendAdmireRequest}
                                    />
                        }
                    </View>
                    <View style={styles.centerHorizontal}>
                        <Text>Admired</Text>
                        <Text style={{ fontWeight: 'bold' }}>{props.admiredCount}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
