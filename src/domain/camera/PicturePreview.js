import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useMemo} from 'react';
import CountDown from 'react-native-countdown-component';
import {styles} from "./style/styles";



function Preview(props){ 

    return (
    <View style={styles.preview}>
        <CountDown
            until={60 * 3}
            size={30}
            // onFinish={props.showCameraAgain()}
            digitStyle={{borderWidth: 0, borderColor: '#000', marginTop: '10%'}}
            size={25}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
        />
        <Image source={{ uri: `file://${props.route.params.state.image.path}` }} style={styles.takenPic}/>
        <View style={styles.previewButtonsContainer}>
            <TouchableOpacity style={styles.previewButtons} title={'Discard'} >
                <Text style={styles.buttonText}>Discard</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.previewButtons} >
                <Text style={styles.buttonText}>Post!</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
    }

    export default Preview;