import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/profile-reducer";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {message} from "antd";
import {CommonType} from "./MyPostsContainer";


class MyPosts extends React.Component<CommonType> {

    render() {
        const {profilePage, addPost} = this.props

        let postElements = profilePage.posts.map(post => <Post key={post.id} message={post.message}
                                                               likes={post.likes}/>)


        // const onClickHandler = () => {
        //     addPost()
        // }
        //
        // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     let newText = e.currentTarget.value
        //     changePostMessage(newText)
        // }

        return (
            <>
                <div className={s.postsBlock}>
                    <h3>my posts</h3>
                    {/*<div>*/}
                    {/*    <div>*/}
                    {/*        <textarea value={postText} onChange={onChangeHandler} placeholder={'Type here'}></textarea>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <button onClick={onClickHandler}>add post</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <PostForm addPost={addPost}/>
                    <div className={s.posts}>
                        {postElements}
                    </div>
                </div>
            </>
        );
    }
}

type FormData = {
    message: string
}



type PostFormType = {
    addPost: (message: string) => void

}

const PostForm: React.FC<PostFormType> = ({addPost}) => {
    const {register, handleSubmit} = useForm<FormData>()

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        debugger
        dispatch(addPost(data.message))
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

                <textarea {...register('message')}
                    // defaultValue={newMessageText}
                    // onChange={onChangeHandler}

                          // value={postText}
                          // onChange={onChangeHandler}
                          placeholder={'Type here'}></textarea>


                <button >add post</button>

        </form>
    )

}


export default MyPosts;