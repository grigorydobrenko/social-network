import React from 'react'
import {CombinedState, Store} from "redux";
import {AllActionsTypes} from "./redux/redux-store";
import {DialogStateType} from "./redux/dialogs-reducer";
import {SidebarStateType} from "./redux/sidebar-reducer";
import {ProfileStateType} from "./redux/profile-reducer";
import store from "./redux/redux-store";


export const StoreContext = React.createContext({} as Store<CombinedState<{ profilePage: ProfileStateType; dialogPage: DialogStateType; sidebar: SidebarStateType; }>, AllActionsTypes>)

export type ProviderType = {
    store: Store<CombinedState<{ profilePage: ProfileStateType; dialogPage: DialogStateType; sidebar: SidebarStateType; }>, AllActionsTypes>,
    children: React.ReactNode
}

export const MyProvider = (props: ProviderType) => {
    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

