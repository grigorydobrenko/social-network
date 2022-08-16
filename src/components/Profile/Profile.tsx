import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {
    const {profilePage, addPost, updateNewPostText} = props

    return (
        <>
            <ProfileInfo/>
            <MyPosts PostsData={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
            />
        </>
    );
};

export default Profile;