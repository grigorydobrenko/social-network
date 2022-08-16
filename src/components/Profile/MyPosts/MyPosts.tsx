import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    PostsData: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {PostsData, addPost, newPostText, updateNewPostText} = props

    let postElements = PostsData.map(post => <Post message={post.message} likes={post.likes}/>)


    const onClickHandler = () => {
        addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }

    return (
        <>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea value={newPostText} onChange={onChangeHandler} placeholder={'Type here'}></textarea>
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