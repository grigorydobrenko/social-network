import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {CommonDialogsType} from "./DialogsContainer";
import {SubmitHandler, useForm} from "react-hook-form";
import {connect, useDispatch} from "react-redux";


const Dialogs: React.FC<CommonDialogsType> = (props) => {
    const {dialogPage, addMessage, changeMessageText} = props


    let DialogItems = dialogPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let Messages = dialogPage.messages.map(message => <Message key={message.id} message={message.message}/>)




    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     changeMessageText(e.currentTarget.value)
    // }





    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {Messages}
                {/*<AddMessageForm newMessageText={dialogPage.newMessageText} onChangeHandler={onChangeHandler}/>*/}
                <AddMessageForm addMessage={addMessage}/>
                {/*<<textarea value={dialogPage.newMessageText} onChange={onChangeHandler}*/}
                {/*          placeholder={'Enter your message'}></textarea>*/}
                {/*<button onClick={onClickHandler}>add post</button>>*/}
            </div>
        </div>
    );
};

type FormData = {
    message: string
}

type AddMessageForm = {
    addMessage: (message:string) => void
    // newMessageText: string,
    // onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


const AddMessageForm:React.FC<AddMessageForm> = ({addMessage}) => {
    const {register, handleSubmit} = useForm<FormData>()

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        debugger
        dispatch(addMessage(data.message))
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register('message')}
                      // defaultValue={newMessageText}
                      // onChange={onChangeHandler}
                      placeholder={'Enter your message'}></textarea>
            <button
                // onClick={onClickHandler}
            >add post</button>
        </form>
    )
}




// type FormData = {
//     login: string;
//     password: string;
//     rememberMe: boolean
// }
//
// type AddMessageForm = {
//     newMessageText: string,
//     onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
// }
//
//
// const AddMessageForm:React.FC<AddMessageForm> = ({newMessageText,onChangeHandler}) => {
//     const {register, handleSubmit} = useForm<FormData>()
//
//     const onSubmit: SubmitHandler<FormData> = (data) => {
//         console.log(data)
//     }
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <textarea {...register('login')} defaultValue={newMessageText} onChange={onChangeHandler}
//                      placeholder={'Enter your message'}></textarea>
//             <button
//                 // onClick={onClickHandler}
//             >add post</button>
//         </form>
// )
// }


export default Dialogs;