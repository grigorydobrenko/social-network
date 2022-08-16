import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
    addPost: (postText: string) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {
    const {state, addPost} = props

    return (
        <>
            <ProfileInfo/>
            <MyPosts PostsData={state.posts} addPost={addPost}/>
        </>
    );
};

export default Profile;