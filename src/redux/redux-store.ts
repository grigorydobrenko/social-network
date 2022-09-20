import {combineReducers, createStore} from "redux";
import {profileReducer, profileReducerType} from "./profile-reducer";
import {DialogReducerType, dialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {usersReducer, usersReducerType} from "./users-reducer";
import {authReducer, authReducerType} from "./auth-reducer";


export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsTypes = profileReducerType | DialogReducerType | usersReducerType | authReducerType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: SidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store


