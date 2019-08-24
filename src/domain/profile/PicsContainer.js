import React from 'react';
import {Pic} from "./Pic";
import {FlatGrid} from "react-native-super-grid";
import {styles} from "./style/styles";

export const PicsContainer = props => {
    return (
        <FlatGrid
            style={styles.gridView}
            items={props.pics}
            renderItem={({ item, index }) => (
                <Pic index={index}
                     url={item.url}
                />
            )}
        />
    )
};
