import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ACTypes, profilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ACTypes) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {
    const {profilePage, dispatch} = props

    return (
        <>
            <ProfileInfo/>
            <MyPosts PostsData={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </>
    );
};

export default Profile;