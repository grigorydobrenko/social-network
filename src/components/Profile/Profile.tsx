import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ACTypes, dialogPageType, profilePageType, sidebarType} from "../../redux/store";
import {CombinedState, Store} from "redux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, ACTypes>
}


const Profile: React.FC<ProfilePropsType> = (props) => {
    const {store} = props

    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </>
    );
};

export default Profile;