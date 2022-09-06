import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserPropsType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./UsersC";


type mapStateToPropsType = {
    usersPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.users
    }
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserPropsType>) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserPropsType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


