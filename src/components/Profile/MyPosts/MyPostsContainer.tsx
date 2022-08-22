import React from 'react';
import {addPostAC, changeTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsPropsType = {}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    return <StoreContext.Consumer>
        {store => {

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
            )
        }
        }
    </StoreContext.Consumer>
        ;
};

