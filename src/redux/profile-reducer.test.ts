import {addPost, deletePost, profileReducer, ProfileStateType, setStatus} from "./profile-reducer";

let state: ProfileStateType

beforeEach(() => {
    state = {
        posts: [
            {
                id: '1',
                message: 'Hi, its me',
                likes: 4,
            },
            {
                id: '2',
                message: 'Hello',
                likes: 15,
            }
        ],
        profile: null,
        status: ''
    }
})

test('should change posts length after add new post', () => {
    const post = {
        post: 'How is it going?'
    }
    const action = addPost(post)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

test('should contain correct added text', () => {
    const post = {
        post: 'How is it going?'
    }
    const action = addPost(post)

    const newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe(post.post)
})

test('should change post length after deleting', () => {
    const action = deletePost('1')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})

test('shouldn`t change post length after deleting with wrong id', () => {
    const action = deletePost('1000')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

test('should set status', () => {
    const action = setStatus('new status')

    const newState = profileReducer(state, action)

    expect(newState.status).toBe('new status')
})



