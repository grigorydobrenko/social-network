import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {FriendType} from "../../../redux/state";

type FriendsPropsType = {
    state: Array<FriendType>
}


const Friends:React.FC<FriendsPropsType> = (props) => {

    let friends = props.state.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)

    return (
        <div className={s.friends}>
         <h2 className={s.title}>Friends</h2>
            <div className={s.friendsContainer}>
                {friends}
                {/*<Friend name={props.state[0].name} avatar={props.state[0].avatar}/>*/}
            </div>
        </div>
    );
};

export default Friends;