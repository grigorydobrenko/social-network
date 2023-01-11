import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../dialogs-reducer";



type DialogItemPropsType = DialogType

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}