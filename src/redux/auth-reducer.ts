import {AllActionsTypes, AppThunk} from "./redux-store";
import {authAPI, ResultCodesEnum} from "../api/api";

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isSubmit: false,
    errorMessage: ''
}

export const authReducer = (state: initialStateType = initialState, action: AllActionsTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET-AUTH':
            return {...state, ...action.payload}

        case 'auth/SET-IS-SUBMIT':
            return {...state, isSubmit: action.payload.isSubmit, errorMessage: action.payload.errorMessage}

        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: 'auth/SET-AUTH',
    payload: {
        id, email, login, isAuth
    }
} as const)

export const setStopSubmit = (isSubmit: boolean, errorMessage: string) => ({
    type: 'auth/SET-IS-SUBMIT',
    payload: {
        isSubmit, errorMessage
    }
} as const)

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    try {
        const response = await authAPI.me()

        if (response.data.resultCode === ResultCodesEnum.Succes) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    } catch (e) {
        console.log(e)
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => async (dispatch) => {
    try {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === ResultCodesEnum.Succes) {
            dispatch(getAuthUserData())
            dispatch(setStopSubmit(false, ''))
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(setStopSubmit(true, message))
        }
    } catch (e) {
        console.log(e)
    }

}

export const logout = (): AppThunk => async (dispatch) => {
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === ResultCodesEnum.Succes) {
            dispatch(setAuthUserData(0, '', '', false))
        }
    } catch (e) {
        console.log(e)
    }

}

type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean,
    isSubmit: boolean
    errorMessage: string
}

export type authReducerType = setAuthUserDataType | setStopSubmitType

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
type setStopSubmitType = ReturnType<typeof setStopSubmit>