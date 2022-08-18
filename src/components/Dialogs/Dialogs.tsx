import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ACTypes, dialogPageType} from "../../redux/state";
import {addMessageAC, changeMessageTextAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: dialogPageType
    dispatch: (action: ACTypes) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {state, dispatch} = props


    let DialogItems = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let Messages = state.messages.map(message => <Message message={message.message}/>)


    const onClickHandler = () => {
        dispatch(addMessageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                <textarea value={state.newMessageText} onChange={onChangeHandler}
                          placeholder={'Enter your message'}></textarea>
                <button onClick={onClickHandler}>add post</button>
            </div>
        </div>
    );
};

export default Dialogs;