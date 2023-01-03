import {AllActionsTypes, AppThunk} from "./redux-store";
import {ResultCodesEnum, usersAPI} from "../api/api";

const usersPage: InitialStateType = {
    users: [],
    pageSize: 15,
    totalUsersCounter: 200,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = usersPage, action: AllActionsTypes) => {
    switch (action.type) {
        case "users/FOLLOW" :
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }

        case "users/UNFOLLOW" :
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }

        case "users/SET_USERS" :
            return {...state, users: action.users}

        case "users/SET_CURRENT_PAGE" :
            return {...state, currentPage: action.currentPage}

        case "users/SET_TOTAL_USERS" :
            return {...state, totalUsersCounter: action.totalUsers}

        case "users/TOGGLE_IS_FETCHING" :
            return {...state, isFetching: action.isFetching}

        case "users/FOLLOWING_IN_PROGRESS" :
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state

    }
}

export const followSucces = (userID: number) => ({type: 'users/FOLLOW', userID} as const)

export const unfollowSucces = (userID: number) => ({type: 'users/UNFOLLOW', userID} as const)

export const setUsers = (users: Array<UserType>) => ({type: 'users/SET_USERS', users} as const)

export const setCurrentPage = (currentPage: number) => ({type: 'users/SET_CURRENT_PAGE', currentPage} as const)

export const setTotalUsers = (totalUsers: number) => ({type: 'users/SET_TOTAL_USERS', totalUsers} as const)

export const toggleIsFetching = (isFetching: boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching} as const)

export const toggleFollowingInProgress = (userId: number, isFetching: boolean) => ({
    type: 'users/FOLLOWING_IN_PROGRESS',
    userId,
    isFetching
} as const)

export const getUsers = (currentPage: number, pageSize: number): AppThunk => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleIsFetching(false))
    }
}

export const follow = (id: number): AppThunk => async (dispatch) => {
    try {
        dispatch(toggleFollowingInProgress(id, true))
        const data = await usersAPI.follow(id)
        if (data.resultCode === ResultCodesEnum.Succes) {
            dispatch(followSucces(id))
        }
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleFollowingInProgress(id, false))
    }
}

export const unFollow = (id: number): AppThunk => async (dispatch) => {
    try {
        dispatch(toggleFollowingInProgress(id, true))
        const data = await usersAPI.unFollow(id)
        if (data.resultCode === ResultCodesEnum.Succes) {
            dispatch(unfollowSucces(id))
            dispatch(toggleFollowingInProgress(id, false))
        }
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleFollowingInProgress(id, false))
    }
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCounter: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export type usersReducerType =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsers
    | toggleIsFetching
    | toggleFollowingInProgress
type followType = ReturnType<typeof followSucces>
type unfollowType = ReturnType<typeof unfollowSucces>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsers = ReturnType<typeof setTotalUsers>
type toggleIsFetching = ReturnType<typeof toggleIsFetching>
type toggleFollowingInProgress = ReturnType<typeof toggleFollowingInProgress>