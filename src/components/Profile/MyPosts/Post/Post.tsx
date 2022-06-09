import React from 'react';
import s from './Post.module.css'

type MyPostPropsType = {
    message: string,
    likes: number,
}


const Post = (props:MyPostPropsType) => {
    return (
        <>
            <div className={s.item}>
                <img src="https://cdn.icon-icons.com/icons2/35/PNG/512/teacher_man_avatar_person_2836.png" alt="ava"/>
                {props.message}
                <div>likes {props.likes}</div>
            </div>
        </>
    );
};

export default Post;