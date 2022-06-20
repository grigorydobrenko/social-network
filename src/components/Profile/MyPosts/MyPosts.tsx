import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    type PostsDataType = {
        id: number
        message: string,
        likes: number,
    }

    const PostsData: Array<PostsDataType> = [
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
                    <Post message={PostsData[0].message} likes={PostsData[0].likes}/>
                    <Post message={PostsData[1].message} likes={PostsData[1].likes}/>
                </div>
            </div>
        </>
    );
};

export default MyPosts;