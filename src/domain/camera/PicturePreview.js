import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from "./style/styles";
import {useNavigation} from '@react-navigation/native';

// Post Media
import {getJson, uploadMedia} from "../service/ApiService";
import mime from "mime";
import CountDown from "./CountDown";
import {useAppDispatch, useAppSelector} from "../../config/hooks";
import {errorSearchingFeed, reset, searchingFeed, successSearchingFeed} from "../home/modules/feedSlice";
import Post from "../home/model/Post";


export default props => {

    const dispatch = useAppDispatch()

    const [imageUri] = useState("file:///" + props.route.params.state.image.path.split("file:/").join(""));
    const navigation = useNavigation();

    function postMedia(imagePath) {
        uploadMedia(getFormData(imagePath)).then(response => {
            if (response.status !== 201 ) {
                throw new Error(response.status)
            }
            dispatch(reset())
            fetchFeed()
            navigation.navigate("Siqpik")
        })
            .catch(error => console.log("Something went wrong posting: " + error))
    }

    const fetchFeed = () => {
        dispatch(searchingFeed())
        getJson(`/feed/1`)
            .then(json => json.map(post => new Post(post)))
            .then(newPosts => {
                dispatch(successSearchingFeed(newPosts))
            }).catch(error => {
                console.log("error fetching feed: " + error)
                dispatch(errorSearchingFeed())
            }
        )
    }

    function getFormData() {
        const fd = new FormData();
        fd.append('pic', {
            uri: imageUri,
            type: mime.getType(imageUri),
            name: imageUri.split("/").pop()
        });
        return fd;
    }

    return (
        <View style={styles.preview}>
            <View style={styles.container}>
                <ImageBackground source={{uri: `file://${props.route.params.state.image.path}`}}
                                 style={styles.takenPic}>
                    <View style={styles.countdown}>
                        <CountDown
                            until={60 * 3}
                            size={40}
                            onFinish={() => navigation.navigate('Siqpik')}
                            digitStyle={{borderWidth: 0, borderColor: '#000',}}
                            digitTxtStyle={{color: '#fff'}}
                            separatorStyle={{color: '#fff'}}
                            timeToShow={['M', 'S']}
                            timeLabels={{m: null, s: null}}
                            showSeparator
                        />
                        <View style={styles.previewButtonsContainer}>
                            <TouchableOpacity style={styles.previewButtons} onPress={() => {
                                postMedia(imageUri)
                            }}>
                                <Text style={styles.buttonText}>Post!</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.previewButtons} title={'Discard'} onPress={() => {
                                props.navigation.navigate('Siqpik')
                            }}>
                                <Text style={styles.buttonText}>Discard</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}
