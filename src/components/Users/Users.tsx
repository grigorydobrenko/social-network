import {UserPropsType} from "../../redux/users-reducer";
import React from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

export const Users: React.FC<UsersType> = ({totalUsersCounter, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator pageSize={pageSize} totalUsersCounter={totalUsersCounter} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow} key={u.id}/>)}
            </div>
    );
}

export type UsersType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCounter: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}