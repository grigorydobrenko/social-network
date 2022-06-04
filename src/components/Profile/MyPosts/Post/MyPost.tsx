import React from 'react';
import s from './MyPost.module.css'

const MyPost = () => {
    return (
        <>
            <div className={s.item}>
                <img src="https://cdn.icon-icons.com/icons2/35/PNG/512/teacher_man_avatar_person_2836.png" alt="ava"/>
                post 1
                <div>like</div>
            </div>
        </>
    );
};

export default MyPost;