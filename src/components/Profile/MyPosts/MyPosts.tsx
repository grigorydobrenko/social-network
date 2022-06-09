import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

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
                    <Post message={'Hi, its me'} likes={4}/>
                    <Post message={'Hello'} likes={15}/>
                </div>
            </div>
        </>
    );
};

export default MyPosts;