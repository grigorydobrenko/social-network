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


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={DialogItemsData[0].name} id={DialogItemsData[0].id}/>
                <DialogItem name={DialogItemsData[1].name} id={DialogItemsData[1].id}/>
              {/*  <DialogItem name={'Leha'} id={1}/>
                <DialogItem name={'Dima'} id={2}/>
                <DialogItem name={'Max'} id={3}/>
                <DialogItem name={'Kate'} id={4}/>
                <DialogItem name={'Den'} id={5}/>*/}
            </div>
            <div className={s.messages}>
                <Message message={MessagesData[0].message} />
                <Message message={MessagesData[1].message} />
               {/* <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'How are u?'}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;