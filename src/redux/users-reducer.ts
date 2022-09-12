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
    pageSize: 15,
    totalUsersCounter: 200,
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
export type usersReducerType =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsers
    | toggleIsFetching
type followType = ReturnType<typeof follow>
type unfollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsers = ReturnType<typeof setTotalUsers>
type toggleIsFetching = ReturnType<typeof toggleIsFetching>

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setUsers = (users: Array<UserPropsType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setTotalUsers = (totalUsers: number) => {
    return {
        type: 'SET_TOTAL_USERS',
        totalUsers
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}