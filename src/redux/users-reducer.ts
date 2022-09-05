import {AllActionsTypes} from "./redux-store";


// export type UserLocationType = {
//     city: string,
//     country: string
// }

// export type UserType = {
//     id: number,
//     photoUrl?: string,
//     followed: boolean,
//     name: string,
//     status: string,
//     location?: UserLocationType
// }

export type UserPropsType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

const usersPage: InitialStateType = {
    users: []
}

export type InitialStateType = {
    users: Array<UserPropsType>
}


export const usersReducer = (state: InitialStateType = usersPage, action: AllActionsTypes) => {
    switch (action.type) {
        case "FOLLOW" : {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        }
        case "UNFOLLOW" : {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        }
        case "SET_USERS" : {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state

    }


}
export type usersReducerType = followACType | unfollowACType | setUsersACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsersAC = (users: Array<UserPropsType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}