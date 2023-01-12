import React from 'react';
import s from './Post.module.scss'
import {PostType} from "../../profile-reducer";
import userPhoto from "../../../../assets/images/user.png";


const Post: React.FC<MyPostPropsType> = (props) => {

    const postDeleteHandler = (postId: string) => {
        props.deletePost(postId)
    }

    return (
        <>
            <div className={s.item}>
                <div className={s.nameBox}>
                    <img src={props.image || userPhoto} alt="ava"/>
                    <h3>{props.name}</h3>
                </div>
                <div className={s.postMessage}>{props.message}</div>
                <div className={s.postFooter}><span>likes {props.likes}</span>
                    <button onClick={() => postDeleteHandler(props.id)}>delete Post</button>
                </div>
            </div>
        </>
    );
};

export default Post;

type MyPostPropsType = PostType & { deletePost: (postId: string) => void }