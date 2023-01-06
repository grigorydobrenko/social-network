import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogActionsType, dialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {usersReducer, UsersActionsType} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: SidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

//https://stackoverflow.com/a/52801110
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsTypes =
    ProfileActionsType
    | DialogActionsType
    | UsersActionsType
    | AuthActionsType
    | AppActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AllActionsTypes>

// @ts-ignore
window.__store__ = store

export default store


