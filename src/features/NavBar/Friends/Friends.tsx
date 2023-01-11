import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {connect} from "react-redux";
import {SidebarStateType} from "../sidebar-reducer";
import {AppStateType} from "../../../app/redux-store";
import {Dispatch} from "redux";


export const Friends = (props: SidebarStateType) => {
    let friendsArr = props.friends.map(friend => <Friend name={friend.name} key={friend.id} avatar={friend.avatar}/>)
    return <div className={s.friends}>
        <h2 className={s.title}>Friends</h2>
        <div className={s.friendsContainer}>
            {friendsArr}
        </div>
    </div>
}

const f1 = (state: AppStateType): SidebarStateType => {
    const friends = state.sidebar.friends

    return {
        friends: friends
    }
}

const f2 = (dispatch: Dispatch) => {
    return {}
}

export const FriendsContainer = connect(f1, f2)(Friends)

