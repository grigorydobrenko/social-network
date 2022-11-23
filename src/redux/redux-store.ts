import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, profileReducerType} from "./profile-reducer";
import {DialogReducerType, dialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {usersReducer, usersReducerType} from "./users-reducer";
import {authReducer, authReducerType} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer, appReducerType} from "./app-reducer";


export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsTypes = profileReducerType | DialogReducerType | usersReducerType | authReducerType | appReducerType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: SidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))


export type AppThunk<ReturnType=void> = ThunkAction<ReturnType, AppStateType, unknown, AllActionsTypes>
// @ts-ignore
window.store = store

export default store


