import React from 'react';
import s from './MyPosts.module.css'
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <>
            <div>
                my posts
                <div>new posts
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <div className={s.posts}>
                    <MyPost />

                </div>
            </div>
        </>
    );
};

export default MyPosts;