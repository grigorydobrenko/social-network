import React  from 'react';
import {ACTypes, dialogPageType, profilePageType, sidebarType} from "../../../redux/store";
import {addPostAC, changeTextAC} from "../../../redux/profile-reducer";
import {CombinedState, Store} from "redux";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: Store<CombinedState<{ profilePage: profilePageType; dialogPage: dialogPageType; sidebar: sidebarType; }>, ACTypes>
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const {store} = props

    const profilePage = store.getState().profilePage

    const postText = profilePage.newPostText

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    const changePostMessage = (postText: string) => {
        store.dispatch(changeTextAC(postText))
    }

    return (
        <MyPosts profilePage={profilePage}
                 addPost={addPost}
                 changePostMessage={changePostMessage}
                 postText={postText}
        />
    );
};

