import {appReducer, AppReducerStateType, setInitializeSucceeded} from "./app-reducer";

let state: AppReducerStateType

beforeEach(() => {
    state = {
        isInitialized: false
    }
})

test('should change status isInitialized', () => {
    const newState = appReducer(state, setInitializeSucceeded())
    expect(newState.isInitialized).toBe(true)
})