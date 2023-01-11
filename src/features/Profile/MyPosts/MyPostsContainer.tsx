import React from 'react';
import {addPost, ProfileStateType} from "../profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/redux-store";
import {IPostFormInput} from "./Post/AddPostForm";


type mapStateToPropsType = {
    profilePage: ProfileStateType
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

