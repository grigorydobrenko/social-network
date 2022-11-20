import {AllActionsTypes} from "./redux-store";
import {getProfileResponseType, profileAPI, ResultCodesEnum} from "../api/Api";
import {Dispatch} from "redux";
import {IPostFormInput} from "../components/Profile/MyPosts/Post/AddPostForm";


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
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.post.post,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }

        case 'SET-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state

    }


}
export type profileReducerType = addPostACType | setProfileType | setStatusType
type addPostACType = ReturnType<typeof addPost>
type setProfileType = ReturnType<typeof setProfile>
type setStatusType = ReturnType<typeof setStatus>

export const addPost = (post: IPostFormInput) => {
    return {
        type: 'ADD-POST',
        post
    } as const
}


export const setProfile = (profile: any) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}


export const getProfile = (userId: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setProfile(data))
        })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === ResultCodesEnum['Succes']) {
                dispatch(setStatus(status))
            }
        })
    }
}