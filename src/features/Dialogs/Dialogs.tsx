import React, {useEffect} from 'react';
import styles from './Dialogs.module.scss'
import stylesMessage from './Message/Message.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {CommonDialogsType} from "./DialogsContainer";
import {AddMessageForm} from "./Message/AddMessageForm";
import userPhoto from "../../assets/images/user.png";

const Dialogs: React.FC<CommonDialogsType> = (props) => {
    const {dialogPage, addMessage} = props
    let DialogItems = dialogPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let Messages = dialogPage.messages.slice(1).map(message => <Message key={message.id} message={message.message}/>)

    useEffect(() => {
        props.setPage('dialogs')
    }, [])

    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.dialogsItems}>
                {DialogItems}
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.messages}>
                    <div className={stylesMessage.message}>
                        <img src={userPhoto} alt="userPhoto" className={stylesMessage.userPhoto}/>
                        <span className={stylesMessage.friendMessageText}>{dialogPage.messages[0].message}</span>
                    </div>
                    {Messages}
                </div>
                <AddMessageForm addMessage={addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;

