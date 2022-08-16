import React from 'react';
import './index.css';
import {addPost, state, subscriber, updateNewPostText} from './redux/state'

import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = () => {

    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root'))
}

renderTree()

subscriber(renderTree)

