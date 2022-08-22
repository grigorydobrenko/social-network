import React from 'react';
import {addPostAC, changeTextAC, profilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: profilePageType
    postText: string
}

type mapDispatchToProps = {
    addPost: () => void,
    changePostMessage: (text: string) => void
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        postText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changePostMessage: (text: string) => {
            dispatch(changeTextAC(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

