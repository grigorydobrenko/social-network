import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/store";



type MessagePropsType = MessageType


export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


