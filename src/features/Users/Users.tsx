import {UserType} from "./users-reducer";
import React from "react";
import {User} from "./User";
import {Paginator} from "../../common/components/Paginator/Paginator";

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
    users: UserType[]
    pageSize: number
    totalUsersCounter: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}