import {AppThunk} from "./redux-store";
import {getAuthUserData} from "../features/Login/auth-reducer";

const initialState: AppReducerStateType = {
    isInitialized: false
}

export const appReducer = (state: AppReducerStateType = initialState, action: AppActionsType): AppReducerStateType => {
    switch (action.type) {
        case 'app/SET-INIT-SUCCEEDED':
            return {...state, isInitialized: true}

        default:
            return state
    }
}

//actions
export const setInitializeSucceeded = () => ({type: 'app/SET-INIT-SUCCEEDED'} as const)

//thunks
export const initializeApp = (): AppThunk => async (dispatch) => {
    const promise = await dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(setInitializeSucceeded())
}

//types
export type AppReducerStateType = {
    isInitialized: boolean
}

export type AppActionsType = SetInitializeSucceededType
type SetInitializeSucceededType = ReturnType<typeof setInitializeSucceeded>
