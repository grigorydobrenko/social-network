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
                    <MyPost message={'Hi, its me'} likes={4}/>
                    <MyPost message={'Hello'} likes={15}/>
                </div>
            </div>
        </>
    );
};

export default MyPosts;