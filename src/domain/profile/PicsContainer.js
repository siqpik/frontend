import React from 'react';
import {Pic} from "./Pic";

export const PicsContainer = props => {
    alert(props.pics);
    return (
    props.pics
        .splice()
        .reverse()
        .map((pic, index) =>
            <Pic index={index}
                 url={pic.url}/>
        )
    )
};
