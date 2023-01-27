import React from 'react';
import {FlatGrid} from "react-native-super-grid";
import PicThumbnail from "./PicThumbnail";

export const PicsContainer = props =>
    (<FlatGrid
        contentContainerStyle={{alignItems: 'center'}}
        data={props.posts}
        itemDimension={170}
        fixed={true}
        renderItem={({item, index}) => (
            <PicThumbnail
                index={index}
                url={item.mediaUrl}
                posts={props.posts}
                username={props.username}
                navigate={props.navigate}
                actualUser={props.isActualUser}
            />
        )}
    />)
