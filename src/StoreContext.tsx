import React from 'react'
import {CombinedState, Store} from "redux";
import {AllActionsTypes} from "./app/redux-store";
import {DialogStateType} from "./features/Dialogs/dialogs-reducer";
import {SidebarStateType} from "./features/NavBar/sidebar-reducer";
import {ProfileStateType} from "./features/Profile/profile-reducer";
import store from "./app/redux-store";


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

