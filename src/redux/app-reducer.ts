import {AllActionsTypes, AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const initialState: initialStateType = {
    isInitialized: false
}

export const appReducer = (state: initialStateType = initialState, action: AllActionsTypes): initialStateType => {
    switch (action.type) {
        case 'app/SET-INIT-SUCCEEDED':
            return {...state, isInitialized: true}

        default:
            return state
    }
}

export const setInitializeSucceeded = () => ({type: 'app/SET-INIT-SUCCEEDED'} as const)

export const initializeApp = (): AppThunk => async (dispatch) => {
    const promise = await dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(setInitializeSucceeded())
}

type initialStateType = {
    isInitialized: boolean
}

export type appReducerType = setInitializeSucceededType

type setInitializeSucceededType = ReturnType<typeof setInitializeSucceeded>
