import {appReducer, AppReducerStateType, setInitializeSucceeded} from "./app-reducer";

let state: AppReducerStateType

beforeEach(() => {
    state = {
        isInitialized: false
    }
})

test('should change status isInitialized', () => {
    const appReducerTest = appReducer(state, setInitializeSucceeded())
    expect(appReducerTest.isInitialized).toBe(true)
})