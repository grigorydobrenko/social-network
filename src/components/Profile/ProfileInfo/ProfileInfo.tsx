import React from 'react';
import s from './ProfileInfo.module.css'




const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/09/29/22/55/panorama-2800783_960_720.jpg" alt="photo"
                     className={s.content__img}/>
            </div>
            <div className={s.description}>ava+decr</div>
        </>
    );
};

export default ProfileInfo;