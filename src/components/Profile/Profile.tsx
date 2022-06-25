import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostPropsType} from "./MyPosts/Post/Post";

const Profile = () => {

    const PostsData: Array<MyPostPropsType> = [
        {
            id: 1,
            message: 'Hi, its me',
            likes: 4,
        },
        {
            id: 2,
            message: 'Hello',
            likes: 15,
        },
    ]


    return (
        <>
            <body>
            <ProfileInfo />
            <MyPosts PostsData={PostsData}/>
            </body>
        </>
    );
};

export default Profile;