import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    InitialStateType, setCurrentPage,
    setTotalUsers, setUsers,
    toggleIsFetching, unfollow, UserPropsType
} from "../../redux/users-reducer";
import {UsersApiComponent} from "./UsersApiComponent";


type mapStateToPropsType = InitialStateType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCounter: state.usersPage.totalUsersCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching
})(UsersApiComponent)


