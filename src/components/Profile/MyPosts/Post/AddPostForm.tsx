import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import errorsStyles from '../../../../components/Common/FormsControls/FormControls.module.css'

export type IPostFormInput = {
    post: string
}

type AddPostFormType = {
    addPost: (post: IPostFormInput) => void
}

const maxLen = maxLengthCreator(30)


export const AddPostForm = (props: AddPostFormType) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<IPostFormInput>();
    const onSubmit: SubmitHandler<IPostFormInput> = data => {
        props.addPost(data)
        reset()

    };
    const className = errors?.post ? errorsStyles.errorBorder : ''
    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("post", {
            validate: {
                required,
                maxLen
            },

        })}
                  placeholder={'Add new post'}
                  className={`${errorsStyles.outlineNone} ${className}`}></textarea>
        {/*{touchedFields.post === true && !dirtyFields.post && <div className={errorsStyles.errorMessageColor}>Field is required</div>}*/}
        {errors?.post && <div className={errorsStyles.errorMessageColor}>{errors.post.message}</div>}
        <div>
            <button>add post</button>
        </div>
    </form>
}

