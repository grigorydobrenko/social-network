import React from 'react';
import {addPost, profilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {IPostFormInput} from "./Post/AddPostForm";


type mapStateToPropsType = {
    profilePage: profilePageType
}

type mapDispatchToProps = {
    addPost: (post: IPostFormInput) => void
}

export  type MyPostsCommonType = mapDispatchToProps & mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

