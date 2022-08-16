import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    PostsData: Array<PostType>
    addPost: (postText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {PostsData, addPost} = props

    let postElements = PostsData.map(post => <Post message={post.message} likes={post.likes}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value)
        }
    }


    return (
        <>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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