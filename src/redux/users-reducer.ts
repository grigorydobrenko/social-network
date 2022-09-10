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
    users: [],
    pageSize: 10,
    totalUsersCounter: 50,
    currentPage: 2,
    isFetching: true
}

export type InitialStateType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCounter: number
    currentPage: number
    isFetching: boolean
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
            return {...state, users: action.users}
        }

        case "SET_CURRENT_PAGE" : {
            return {...state, currentPage: action.currentPage}
        }

        case "SET_TOTAL_USERS" : {
            return {...state, totalUsersCounter: action.totalUsers}
        }
        case "TOGGLE_IS_FETCHING" : {
            return {...state, isFetching: action.isFetching}
        }


        default:
            return state

    }


}
export type usersReducerType = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersAC | toggleIsFetchingAC
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersAC = ReturnType<typeof setTotalUsersAC>
type toggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAC>

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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setTotalUsersAC = (totalUsers: number) => {
    return {
        type: 'SET_TOTAL_USERS',
        totalUsers
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}