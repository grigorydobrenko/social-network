import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {StoreContext} from "../../../StoreContext";

type FriendsPropsType = {}


export const Friends: React.FC<FriendsPropsType> = (props) => {

    return <StoreContext.Consumer>
        {store => {
            const sidebar = store.getState().sidebar
            let friends = sidebar.friends.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)

            return (
                <div className={s.friends}>
                    <h2 className={s.title}>Friends</h2>
                    <div className={s.friendsContainer}>
                        {friends}
                    </div>
                </div>
            )
        }
        }
    </StoreContext.Consumer>
};

