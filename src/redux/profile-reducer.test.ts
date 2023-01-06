import {addPost, deletePost, profileReducer, ProfileStateType, setProfile, setStatus} from "./profile-reducer";
import {ProfileType} from "../api/api";

let state: ProfileStateType
let profile: ProfileType

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
    profile = {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'front-end',
        fullName: 'Grigory',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    }


})

test('should change posts length after add new post', () => {
    const post = {
        post: 'How is it going?'
    }

    const newState = profileReducer(state, addPost(post))

    expect(newState.posts.length).toBe(3)
})

test('should contain correct added text', () => {
    const post = {
        post: 'How is it going?'
    }

    const newState = profileReducer(state, addPost(post))

    expect(newState.posts[2].message).toBe(post.post)
})

test('should change post length after deleting', () => {
    const newState = profileReducer(state, deletePost('1'))

    expect(newState.posts.length).toBe(1)
})

test('shouldn`t change post length after deleting with wrong id', () => {
    const newState = profileReducer(state, deletePost('1000'))

    expect(newState.posts.length).toBe(2)
})

test('should set status', () => {
    const newState = profileReducer(state, setStatus('new status'))

    expect(newState.status).toBe('new status')
})

test('profile shouldn`t be null', () => {
    const newState = profileReducer(state, setProfile(profile))

    expect(newState.profile).not.toBe(null)
})





