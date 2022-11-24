import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    InitialStateType,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow,
} from "../../redux/users-reducer";
import {UsersAPIComponent} from "./UsersApiComponent";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsersSelector
} from "../../redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCounter: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
}), withAuthRedirect)(UsersAPIComponent)

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = InitialStateType


