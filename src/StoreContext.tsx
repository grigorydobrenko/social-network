import React from 'react'
import {CombinedState, Store} from "redux";
import {ACTypes, dialogPageType, profilePageType, sidebarType} from "./redux/store";
import {store} from "./redux/redux-store";


export const StoreContext = React.createContext({} as Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, ACTypes>)

export type ProviderType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, ACTypes>,
    children: React.ReactNode
}


export const MyProvider = (props: ProviderType) => {
    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

