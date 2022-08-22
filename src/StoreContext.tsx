import React from 'react'
import {CombinedState, Store} from "redux";
import {AllActionsTypes, store} from "./redux/redux-store";
import {dialogPageType} from "./redux/dialogs-reducer";
import {sidebarType} from "./redux/sidebar-reducer";
import {profilePageType} from "./redux/profile-reducer";


export const StoreContext = React.createContext({} as Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, AllActionsTypes>)

export type ProviderType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, AllActionsTypes>,
    children: React.ReactNode
}


export const MyProvider = (props: ProviderType) => {
    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

