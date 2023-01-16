import React from 'react';
import styles from './Post.module.scss'
import {PostType} from "../../profile-reducer";
import userPhoto from "../../../../assets/images/user.png";
import {SvgSelector} from "../../../../common/components/svgSelector/SvgSelector";


const Post: React.FC<MyPostPropsType> = (props) => {

    const postDeleteHandler = (postId: string) => {
        props.deletePost(postId)
    }

    return (
        <>
            <div className={styles.item}>
                <div className={styles.nameBox}>
                    <img src={props.image || userPhoto} alt="ava"/>
                    <h3>{props.name}</h3>
                </div>
                <div className={styles.postMessage}>{props.message}</div>
                <div className={styles.postFooter}>
                    <div className={styles.likes}>
                        <SvgSelector svgname={'likes'}/>
                        <span>{props.likes}</span>
                    </div>
                    <button className={styles.delete} onClick={() => postDeleteHandler(props.id)}><SvgSelector svgname={'delete'}/></button>
                </div>
            </div>
        </>
    );
};

export default Post;

type MyPostPropsType = PostType & { deletePost: (postId: string) => void }