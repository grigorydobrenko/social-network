import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/store";

type MyPostsPropsType = {
    profilePage: profilePageType
    addPost: () => void
    changePostMessage: (postText: string) => void
    postText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {profilePage, addPost, changePostMessage, postText} = props

    let postElements = profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)


    const onClickHandler = () => {
        addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        changePostMessage(newText)
    }

    return (
        <>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea value={postText} onChange={onChangeHandler} placeholder={'Type here'}></textarea>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </>
    );
};

export default MyPosts;