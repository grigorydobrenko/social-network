import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {FriendType} from "../../../redux/store";

type FriendsPropsType = {
    state: Array<FriendType>
}


const Friends: React.FC<FriendsPropsType> = (props) => {
    const {state} = props

    let friends = state.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)

    return (
        <div className={s.friends}>
            <h2 className={s.title}>Friends</h2>
            <div className={s.friendsContainer}>
                {friends}
            </div>
        </div>
    );
};

export default Friends;