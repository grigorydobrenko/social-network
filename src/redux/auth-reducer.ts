import {AllActionsTypes} from "./redux-store";


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