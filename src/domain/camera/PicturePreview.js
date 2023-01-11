import {ImageBackground , Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useMemo } from 'react';
import CountDown from 'react-native-countdown-component';
import { styles } from "./style/styles";



function Preview(props) {
    console.log(props)

    return (
        <View style={styles.preview}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: `file://${props.route.params.state.image.path}` }} style={styles.takenPic} >
                <View style={styles.countdown}>
                    <CountDown
                        until={60 * 3}
                        size={40}
                        onFinish={console.log("FINISHED")}
                        digitStyle={{ borderWidth: 0, borderColor: '#000',  }}
                        digitTxtStyle={{color: '#fff'}}
                        separatorStyle={{color: '#fff'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                    />
                    <View style={styles.previewButtonsContainer}>
                        <TouchableOpacity style={styles.previewButtons} >
                            <Text style={styles.buttonText}>Post!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.previewButtons} title={'Discard'} >
                            <Text style={styles.buttonText}>Discard</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Preview;