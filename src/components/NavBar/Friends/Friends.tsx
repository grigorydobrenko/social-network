import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {connect} from "react-redux";
import {sidebarType} from "../../../redux/sidebar-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export const Friends = (props: sidebarType) => {
    let friendsArr = props.friends.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)
    return <div className={s.friends}>
        <h2 className={s.title}>Friends</h2>
        <div className={s.friendsContainer}>
            {friendsArr}
        </div>
    </div>
}

const f1 = (state: AppStateType): sidebarType => {
    const friends = state.sidebar.friends

    return {
        friends: friends
    }
}

const f2 = (dispatch: Dispatch) => {
    return {}
}

export const FriendsContainer = connect(f1, f2)(Friends)

