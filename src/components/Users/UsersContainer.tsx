import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    InitialStateType, setCurrentPage,
    toggleFollowingInProgress, unFollow,

} from "../../redux/users-reducer";
import {UsersAPIComponent} from "./UsersApiComponent";
import {compose} from "redux";


type mapStateToPropsType = InitialStateType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCounter: state.usersPage.totalUsersCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export const UsersContainer = compose(connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
}))(UsersAPIComponent)


