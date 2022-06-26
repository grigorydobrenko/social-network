import React from 'react';
import s from './Friend.module.css'



type FriendPropsType = {
    name: string,
    avatar: string
}
const Friend:React.FC<FriendPropsType> = (props) => {



    return (
        <div >
            <div className={s.friendsItem}>
                <img src={props.avatar} alt="friend"/>
                <span className={s.name}>{props.name}</span>
            </div>
        </div>
    );
};

export default Friend;