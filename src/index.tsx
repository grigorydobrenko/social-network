import React from 'react';
import './index.css';
import {store} from './redux/state'

import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = () => {

    ReactDOM.render(<App store={store}
        />,
        document.getElementById('root'))
}

renderTree()

store.subscriber(renderTree)

