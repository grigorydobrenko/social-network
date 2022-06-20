import React from 'react';
import s from './MyPosts.module.css'
import Post, {MyPostPropsType} from "./Post/Post";

const MyPosts = () => {

    const PostsData: Array<MyPostPropsType> = [
        {
            id: 1,
            message: 'Hi, its me',
            likes: 4,
        },
        {
            id: 2,
            message: 'Hello',
            likes: 15,
        },
    ]

    let postElements = PostsData.map(post => <Post message={post.message} likes={post.likes}/>)

    return (
        <>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add post</button>
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