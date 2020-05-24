import React from 'react';
import {View, Text, ScrollView} from "react-native";
import { styles } from "../style/styles";


function CommentsPage(props) {

    return (
        <ScrollView>
            <View style={styles.commentTitleContainer}>
                <Text style={styles.commentTitle}>Comments</Text>
            </View>
            {props.route.params.comments.map(comment =>
                <View style={styles.commentPageContainer}>
                    <View style={styles.commentPage}>
                        <Text>{ comment.userName } : </Text>
                        <Text>{ comment.comments }</Text>
                    </View>
                </View>
            )}

        </ScrollView>
    )


}

export default CommentsPage;