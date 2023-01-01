import {addPost, deletePost, profilePageType, profileReducer} from "./profile-reducer";

const state: profilePageType = {
    posts: [
        {
            id: 1,
            message: 'Hi, its me',
            likes: 4,
        },
        {
            id: 2,
            message: 'Hello',
            likes: 15,
        }
    ],
    profile: null,
    status: ''
}

test('should change posts length after add new post', () => {
    //1 test data
    const post = {
        post: 'How is it going?'
    }
    const action = addPost(post)

    //2 action
    const newState = profileReducer(state, action )

    //3 expectation
    expect(newState.posts.length).toBe(3)
})

test('should contain correct added text', () => {
    //1 test data
    const post = {
        post: 'How is it going?'
    }
    const action = addPost(post)

    //2 action
    const newState = profileReducer(state, action )

    //3 expectation
    expect(newState.posts[2].message).toBe(post.post)
})

test('should change post length after deleting', () => {
    //1 test data
    const action = deletePost(1)

    //2 action
    const newState = profileReducer(state, action)

    //3 expectation
    expect(newState.posts.length).toBe(1)
})

test('shouldn`t change post length after deleting with wrong id', () => {
    //1 test data
    const action = deletePost(1000)

    //2 action
    const newState = profileReducer(state, action)

    //3 expectation
    expect(newState.posts.length).toBe(2)
})




