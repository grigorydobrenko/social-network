import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import errorsStyles from '../../../../common/components/FormControls/FormControls.module.scss'
import {maxLengthCreator} from "../../../../common/utils/validators/validators";
import styles from './AddPostForm.module.scss'
import {FormTextarea} from "../../../../common/components/FormTextarea/FormTextarea";


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
    return <form onSubmit={handleSubmit(onSubmit)} className={styles.addPostForm}>
        <div className={styles.messageTextarea}>
            <FormTextarea id="post"
                         name="post"
                         label="Write a post..."
                         rows={3}
                         register={register}
                         validationSchema={{
                             required: true
                         }}
        /></div>
        {/*{touchedFields.post === true && !dirtyFields.post && <div className={errorsStyles.errorMessageColor}>Field is required</div>}*/}
        <div>
            <button className={styles.sendPost}>Add post</button>
        </div>
    </form>
}

export type IPostFormInput = {
    post: string
}

type AddPostFormType = {
    addPost: (post: IPostFormInput) => void
}

