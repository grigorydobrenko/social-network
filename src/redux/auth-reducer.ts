import {AllActionsTypes} from "./redux-store";
import {authAPI, ResultCodesEnum} from "../api/Api";
import {Dispatch} from "redux";


type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}


const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: initialStateType = initialState, action: AllActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET-AUTH': {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state

    }


}
export type authReducerType = setProfileType

type setProfileType = ReturnType<typeof setAuth>


export const setAuth = (id: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH',
        data: {
            id, email, login
        }
    } as const
}

export const auth = () => {
    return (dispatch: Dispatch<authReducerType>) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === ResultCodesEnum.Succes) {
                let {id, email, login} = response.data.data
                dispatch(setAuth(id, email, login))
            }
        })
    }
}