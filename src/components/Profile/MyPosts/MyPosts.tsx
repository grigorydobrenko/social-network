import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {CommonActionType, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    PostsData: Array<PostType>
    newPostText: string
    dispatch: (action: CommonActionType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {PostsData, newPostText, dispatch} = props

    let postElements = PostsData.map(post => <Post message={post.message} likes={post.likes}/>)


    const onClickHandler = () => {
        dispatch({type: 'ADD-POST'})
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        dispatch({type: 'CHANGE-TEXT', text: newText})
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