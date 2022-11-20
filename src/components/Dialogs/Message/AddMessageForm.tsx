import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";

export type IMessageFormInput = {
    message: string
}

type AddMessageFormType = {
    addMessage: (message: IMessageFormInput) => void
}

export const AddMessageForm = (props: AddMessageFormType) => {
    const {register, handleSubmit,} = useForm<IMessageFormInput>();
    const onSubmit: SubmitHandler<IMessageFormInput> = data => {
        props.addMessage(data)
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("message",)} placeholder={'Enter your message'}></textarea>
        <button>add post</button>
    </form>
}