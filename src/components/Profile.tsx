import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./Profile/MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <body className={s.content}>
            <div>main content</div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/09/29/22/55/panorama-2800783_960_720.jpg" alt="photo"
                     className={s.content__img}/>
            </div>
            <div>ava+decr</div>
            <MyPosts />
            </body>
        </>
    );
};

export default Profile;