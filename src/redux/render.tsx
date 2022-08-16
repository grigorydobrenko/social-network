import ReactDOM from "react-dom";
import App from "../App";
import {addPost, RootStateType, updateNewPostText} from "./state";
import React from 'react';


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root'))
}








