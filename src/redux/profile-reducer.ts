import {AllActionsTypes} from "./redux-store";
import {getProfileResponseType, profileAPI, ResultCodesEnum} from "../api/Api";
import {Dispatch} from "redux";


export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

export type PostType = {
    id?: number,
    message: string,
    likes: number,
}

export type ProfileType  = getProfileResponseType


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
    newPostText: '',
    profile: null,
    status: ''
}


export const profileReducer = (state: profilePageType = profilePage, action: AllActionsTypes): profilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'CHANGE-TEXT': {
            return {...state, newPostText: action.text}
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
export type profileReducerType = addPostACType | changeTextACType | setProfileType | setStatusType
type addPostACType = ReturnType<typeof addPostAC>
type changeTextACType = ReturnType<typeof changeTextAC>
type setProfileType = ReturnType<typeof setProfile>
type setStatusType = ReturnType<typeof setStatus>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeTextAC = (text: string) => {
    return {
        type: 'CHANGE-TEXT',
        text
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