import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {CommonActionType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: CommonActionType) => void
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