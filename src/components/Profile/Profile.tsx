import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <>
            <body>
            <ProfileInfo/>
            <MyPosts/>
            </body>
        </>
    );
};

export default Profile;