import React from 'react';
import {addPostAC, profilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: profilePageType
    postText: string
}

type mapDispatchToProps = {
    addPost: (message: string) => void
}

export type CommonType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        postText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: (message: string) => {
            dispatch(addPostAC(message))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

