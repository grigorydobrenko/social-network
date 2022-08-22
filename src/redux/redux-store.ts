import {combineReducers, createStore} from "redux";
import {profileReducer, profileReducerType} from "./profile-reducer";
import {DialogReducerType, dialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";


export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsTypes = profileReducerType | DialogReducerType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: SidebarReducer
})

export let store = createStore(rootReducer)


