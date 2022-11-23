import {AllActionsTypes, AppThunk} from "./redux-store";
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
            return {...state, ...action.payload}
        }
        default:
            return state

    }


}
export type authReducerType = setProfileType

type setProfileType = ReturnType<typeof setAuth>


export const setAuth = (id: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-AUTH',
        payload: {
            id, email, login, isAuth
        }
    } as const
}

export const auth = () => {
    return (dispatch: Dispatch<authReducerType>) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === ResultCodesEnum.Succes) {
                let {id, email, login} = response.data.data
                dispatch(setAuth(id, email, login, true))
            }
        })
    }
}

// export const login = () => {
//     return (dispatch: Dispatch<authReducerType>) => {
//         authAPI.me().then(response => {
//             if (response.data.resultCode === ResultCodesEnum.Succes) {
//                 let {id, email, login} = response.data.data
//                 dispatch(setAuth(id, email, login))
//             }
//         })
//     }
// }

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === ResultCodesEnum.Succes) {
        dispatch(auth())
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === ResultCodesEnum.Succes) {
        dispatch(setAuth(0, '', '', false))
    }
}