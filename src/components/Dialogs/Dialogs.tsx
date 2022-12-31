import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {CommonDialogsType} from "./DialogsContainer";
import {AddMessageForm} from "./Message/AddMessageForm";

const Dialogs: React.FC<CommonDialogsType> = (props) => {
    const {dialogPage, addMessage} = props
    let DialogItems = dialogPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let Messages = dialogPage.messages.map(message => <Message key={message.id} message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <AddMessageForm addMessage={addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;

