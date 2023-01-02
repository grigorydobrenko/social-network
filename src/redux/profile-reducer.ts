import {AllActionsTypes, AppThunk} from "./redux-store";
import {getProfileResponseType, profileAPI, ResultCodesEnum} from "../api/Api";
import {Dispatch} from "redux";
import {IPostFormInput} from "../components/Profile/MyPosts/Post/AddPostForm";

const profilePage: profilePageType = {
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

export const profileReducer = (state: profilePageType = profilePage, action: AllActionsTypes): profilePageType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.post.post,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }

        case 'profile/DELETE-POST':
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}

        case 'profile/SET-PROFILE':
            return {...state, profile: action.profile}

        case 'profile/SET-STATUS':
            return {...state, status: action.status}

        default:
            return state
    }
}

export const addPost = (post: IPostFormInput) => ({type: 'profile/ADD-POST', post} as const)

export const deletePost = (postId: number) => ({type: 'profile/DELETE-POST', postId} as const)

export const setProfile = (profile: any) => ({type: 'profile/SET-PROFILE', profile} as const)

export const setStatus = (status: string) => ({type: 'profile/SET-STATUS', status} as const)

export const getProfile = (userId: string): AppThunk => async (dispatch) => {
    try {
        const data = await profileAPI.getUserProfile(userId)
        dispatch(setProfile(data))
    } catch (e) {
        console.log(e)
    }
}

export const getStatus = (userId: string): AppThunk => async (dispatch: Dispatch<profileReducerType>) => {
    try {
        const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    } catch (e) {
        console.log(e)
    }
}

export const updateStatus = (status: string): AppThunk => async (dispatch: Dispatch<profileReducerType>) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === ResultCodesEnum['Succes']) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        console.log(e)
    }
}

export type profilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

export type PostType = {
    id?: number,
    message: string,
    likes: number,
}

export type ProfileType = getProfileResponseType

export type profileReducerType = addPostACType | setProfileType | setStatusType | deletePostACType
type addPostACType = ReturnType<typeof addPost>
type deletePostACType = ReturnType<typeof deletePost>
type setProfileType = ReturnType<typeof setProfile>
type setStatusType = ReturnType<typeof setStatus>
