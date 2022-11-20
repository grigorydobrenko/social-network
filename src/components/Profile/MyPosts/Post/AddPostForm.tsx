import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";

export type IPostFormInput = {
    post: string
}

type AddPostFormType = {
    addPost: (post: IPostFormInput) => void
}

export const AddPostForm = (props: AddPostFormType) => {
    const {register, handleSubmit} = useForm<IPostFormInput>();
    const onSubmit: SubmitHandler<IPostFormInput> = data => {
        props.addPost(data)
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("post",)} placeholder={'Add new post'}></textarea>
        <button>add post</button>
    </form>
}