import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogPageType} from "../../redux/state";


type DialogsPropsType = {
    state: dialogPageType
}


const Dialogs:React.FC<DialogsPropsType> = (props) => {
    const {state} = props


    let DialogItems = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let Messages = state.messages.map(message => <Message message={message.message}/>)

    let newMessageEl = React.createRef<HTMLTextAreaElement>()
    let AlertMessage = () => {
        let text = newMessageEl.current?.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <textarea ref={newMessageEl}></textarea>
                <button onClick={AlertMessage}>add post</button>
            </div>
        </div>
    );
};

export default Dialogs;