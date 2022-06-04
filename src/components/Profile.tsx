import React from 'react';
import s from './Profile.module.css'

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
            <div>
                my posts

                <div>new posts
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
            </body>
        </>
    );
};

export default Profile;