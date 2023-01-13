import React from 'react';
import styles from './Message.module.scss'

import {MessageType} from "../dialogs-reducer";
import userPhoto from "../../../assets/images/user.png";

type MessagePropsType = MessageType

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>
            <img src={userPhoto} alt="userPhoto" className={styles.userPhoto}/>
            <span className={styles.messageText}>{props.message}</span>
        </div>
    )
}


