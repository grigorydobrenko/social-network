import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <>

            <ProfileInfo/>
            <MyPosts PostsData={props.state.posts}/>

        </>
    );
};

export default Profile;