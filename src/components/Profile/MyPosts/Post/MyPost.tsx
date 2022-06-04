import React from 'react';
import s from './MyPost.module.css'

type MyPostPropsType = {
    message: string,
    likes: number,
}


const MyPost = (props:MyPostPropsType) => {
    return (
        <>
            <div className={s.item}>
                <img src="https://cdn.icon-icons.com/icons2/35/PNG/512/teacher_man_avatar_person_2836.png" alt="ava"/>
                {props.message}
                <div>{props.likes}</div>
            </div>
        </>
    );
};

export default MyPost;