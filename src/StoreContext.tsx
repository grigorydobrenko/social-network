import React from 'react'
import {CombinedState, Store} from "redux";
import {AllActionsTypes} from "./redux/redux-store";
import {DialogPageType} from "./redux/dialogs-reducer";
import {sidebarType} from "./redux/sidebar-reducer";
import {profilePageType} from "./redux/profile-reducer";
import store from "./redux/redux-store";


export const StoreContext = React.createContext({} as Store<CombinedState<{ profilePage: profilePageType; dialogPage: DialogPageType; sidebar: sidebarType; }>, AllActionsTypes>)

export type ProviderType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: DialogPageType; sidebar: sidebarType; }>, AllActionsTypes>,
    children: React.ReactNode
}

export const MyProvider = (props: ProviderType) => {
    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

