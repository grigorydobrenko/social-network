import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsCommonType} from "./MyPostsContainer";
import {AddPostForm} from "./Post/AddPostForm";

class MyPosts extends React.Component<MyPostsCommonType> {

    shouldComponentUpdate(nextProps: Readonly<MyPostsCommonType>, nextState: Readonly<{}>): boolean {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        const {profilePage, addPost} = this.props
        const postElements = profilePage.posts.map(post => <Post key={post.id} message={post.message}
                                                                 likes={post.likes}/>)

        return (
            <>
                <div className={s.postsBlock}>
                    <AddPostForm addPost={addPost}/>
                    <div className={s.posts}>
                        {postElements}
                    </div>
                </div>
            </>
        );
    }
}

export default MyPosts;


