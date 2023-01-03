import {authReducer, AuthStateType, setAuthUserData} from "./auth-reducer";

let state: AuthStateType

beforeEach(() => {
    state = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isSubmit: false,
        errorMessage: ''
    }
})

test('set user data', () => {
    const authReducerTest = authReducer(state, setAuthUserData(1, 'my@gmail.com', 'Grigory', true))
    expect(authReducerTest.isAuth).toBe(true)
    expect(authReducerTest.id).toBe(1)
    expect(authReducerTest.email).toBe('my@gmail.com')
})