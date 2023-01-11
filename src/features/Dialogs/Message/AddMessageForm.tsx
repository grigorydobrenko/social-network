import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import errorsStyles from "../../../common/components/FormsControls/FormControls.module.css";
import {maxLengthCreator, required} from "../../../common/utils/validators/validators";

export type IMessageFormInput = {
    message: string
}

type AddMessageFormType = {
    addMessage: (message: IMessageFormInput) => void
}
const maxLen = maxLengthCreator(50)

export const AddMessageForm = (props: AddMessageFormType) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IMessageFormInput>();
    const onSubmit: SubmitHandler<IMessageFormInput> = data => {
        props.addMessage(data)
        reset()
    };
    const className = errors?.message ? errorsStyles.errorBorder : ''

    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("message", {
            validate: {
                required,
                maxLen
            }
        })} placeholder={'Enter your message'} className={`${errorsStyles.outlineNone} ${className}`}></textarea>
        {errors?.message && <div className={errorsStyles.errorMessageColor}>{errors.message.message}</div>}
        <div>
            <button>add post</button>
        </div>
    </form>
}