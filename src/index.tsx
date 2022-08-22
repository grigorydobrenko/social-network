import React from 'react';
import './index.css';
import {store} from './redux/redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {MyProvider} from "./StoreContext";

export const renderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <MyProvider store={store}>
                <App/>
            </MyProvider>
        </BrowserRouter>,
        document.getElementById('root'))
}

renderTree()

store.subscribe(renderTree)

