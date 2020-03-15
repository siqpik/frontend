import React from 'react';
import {PicThumbnail} from "./PicThumbnail";
import {FlatGrid} from "react-native-super-grid";

export const PicsContainer = props =>
    (<FlatGrid
        contentContainerStyle={{alignItems: 'center'}}
        items={props.pics}
        renderItem={({ item, index }) => (
            <PicThumbnail
                index={index}
                url={item.url}
                pics={props.pics}
                username={props.username}
                navigate={props.navigate}
            />
        )}
    />)