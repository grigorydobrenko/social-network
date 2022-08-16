import React from 'react';
import s from './Friend.module.css'


type FriendPropsType = {
    name: string,
    avatar: string
}
const Friend: React.FC<FriendPropsType> = (props) => {

    const {name, avatar} = props

    return (
        <div>
            <div className={s.friendsItem}>
                <img src={avatar} alt="friend"/>
                <span className={s.name}>{name}</span>
            </div>
        </div>
    );
};

export default Friend;