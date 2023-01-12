import React from 'react';
import {addPost, deletePost, ProfileStateType} from "../profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/redux-store";
import {IPostFormInput} from "./Post/AddPostForm";


type mapStateToPropsType = {
    profilePage: ProfileStateType
}

type mapDispatchToProps = {
    addPost: (post: IPostFormInput) => void
    deletePost: (postId: string) => void
}

export  type MyPostsCommonType = mapDispatchToProps & mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, deletePost})(MyPosts)

