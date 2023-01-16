import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import styles from './Message.module.scss'
import {FormTextarea} from "../../../common/components/FormTextarea/FormTextarea";


export const AddMessageForm = (props: AddMessageFormType) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IMessageFormInput>();
    const onSubmit: SubmitHandler<IMessageFormInput> = data => {
        props.addMessage(data)
        reset()
    };

    return <form onSubmit={handleSubmit(onSubmit)} className={styles.addMessageForm}>

        <div className={styles.messageTextarea}>
            <FormTextarea id="message"
                          name="message"
                          label="Write a message..."
                          rows={3}
                          register={register}
                          validationSchema={{
                              required: true
                          }}
            />
        </div>
        <div>
            <button className={styles.sendMessage}>Send</button>
        </div>
    </form>
}

export type IMessageFormInput = {
    message: string
}

type AddMessageFormType = {
    addMessage: (message: IMessageFormInput) => void
}