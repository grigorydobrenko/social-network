import {AppStateType} from "./redux-store";
import {UserPropsType} from "./users-reducer";
import {createSelector} from "reselect";

export const getUsersPrimitive = (state: AppStateType): UserPropsType[] => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsersPrimitive, (users: UserPropsType[]) => {
    return users.filter(() => true)
})

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsers = (state: AppStateType): number => {
    return state.usersPage.totalUsersCounter
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress
}



