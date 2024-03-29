import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow, UsersStateType,
} from "./users-reducer";
import {UsersAPIComponent} from "./UsersApiComponent";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalUsers, getUsersSelector
} from "../../common/selectors/users-selectors";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {AppPage, setPage} from "../../app/app-reducer";


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
    getUsers,
    setPage
}), withAuthRedirect)(UsersAPIComponent)

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setPage: (page: AppPage) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = UsersStateType


