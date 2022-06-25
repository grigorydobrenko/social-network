import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogPageType} from "../../redux/state";


type DialogsPropsType = {
    state: dialogPageType
}


const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let DialogItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let Messages = props.state.messages.map(message => <Message message={message.message}/>)

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