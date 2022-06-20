import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


/*
const DialogItem = (props) => {
    return <div className={s.dialog}>
        <NavLink to='/dialogs/1'>props.name</NavLink>
    </div>
}
*/

type DialogItemPropsType = {
    name: string,
    id: number
}

type MessagePropsType = {
    id?: number
    message: string
}



const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {

    const DialogItemsData: Array<DialogItemPropsType> = [
        {
            name: 'Leha',
            id: 1,
        },
        {
            name: 'Dima',
            id: 2,
        }, {
            name: 'Max',
            id: 3,
        }, {
            name: 'Kate',
            id: 4,
        }, {
            name: 'Den',
            id: 5,
        },
    ]


    const MessagesData: Array<MessagePropsType> = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'Its me'
        }, {
            id: 3,
            message: 'Hello'
        },
    ]


    let DialogItems = DialogItemsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let Messages = MessagesData.map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
            </div>
        </div>
    );
};

export default Dialogs;