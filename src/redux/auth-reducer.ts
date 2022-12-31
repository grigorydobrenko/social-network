import {AllActionsTypes, AppThunk} from "./redux-store";
import {authAPI, ResultCodesEnum} from "../api/Api";

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
        case 'SET-AUTH': {
            return {...state, ...action.payload}
        }
        case 'SET-IS-SUBMIT': {
            return {...state, isSubmit: action.payload.isSubmit, errorMessage: action.payload.errorMessage}
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: 'SET-AUTH',
    payload: {
        id, email, login, isAuth
    }
} as const)

export const setStopSubmit = (isSubmit: boolean, errorMessage: string) => ({
    type: 'SET-IS-SUBMIT',
    payload: {
        isSubmit, errorMessage
    }
} as const)

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    // const response = await authAPI.me()
    // if (response.data.resultCode === ResultCodesEnum.Succes) {
    //     let {id, email, login} = response.data.data
    //     return dispatch(setAuthUserData(id, email, login, true))
    // }
    return authAPI.me()
        .then(res => {
                if (res.data.resultCode === ResultCodesEnum.Succes) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            }
        )
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === ResultCodesEnum.Succes) {
        dispatch(getAuthUserData())
        dispatch(setStopSubmit(false, ''))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(setStopSubmit(true, message))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === ResultCodesEnum.Succes) {
        dispatch(setAuthUserData(0, '', '', false))
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