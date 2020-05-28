import React from 'react';
import {View, Text, ScrollView} from "react-native";
import { styles } from "../style/styles";


function CommentsPage(props) {

    return (
        <ScrollView>
            <View style={styles.commentTitleContainer}>
                <Text style={styles.commentTitle}>Comments</Text>
            </View>
            <View style={styles.commentPageContainer}>
            {props.route.params.comments.map((comment, i)  =>
                        <View key={i} style={styles.commentPage}>
                            <Text>{comment.userName}: </Text>
                            <Text style={styles.wrapComment}>{comment.comments}</Text>
                        </View>
            )}

            </View>

        </ScrollView>
    )


}

export default CommentsPage;