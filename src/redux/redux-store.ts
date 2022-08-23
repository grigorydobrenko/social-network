import {combineReducers, createStore} from "redux";
import {profileReducer, profileReducerType} from "./profile-reducer";
import {DialogReducerType, dialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {usersReducer, usersReducerType} from "./users-reducer";


export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsTypes = profileReducerType | DialogReducerType | usersReducerType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: SidebarReducer,
    users: usersReducer
})

export let store = createStore(rootReducer)


