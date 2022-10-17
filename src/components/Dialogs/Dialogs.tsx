import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {CommonDialogsType} from "./DialogsContainer";


const Dialogs: React.FC<CommonDialogsType> = (props) => {
    const {dialogPage, addMessage, changeMessageText} = props


    let DialogItems = dialogPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let Messages = dialogPage.messages.map(message => <Message key={message.id} message={message.message}/>)


    const onClickHandler = () => {
        addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeMessageText(e.currentTarget.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <textarea value={dialogPage.newMessageText} onChange={onChangeHandler}
                          placeholder={'Enter your message'}></textarea>
                <button onClick={onClickHandler}>add post</button>
            </div>
        </div>
    );
};

export default Dialogs;