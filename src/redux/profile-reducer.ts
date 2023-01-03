import {AppThunk} from "./redux-store";
import {GetProfileResponseType, profileAPI, ResultCodesEnum} from "../api/api";
import {IPostFormInput} from "../components/Profile/MyPosts/Post/AddPostForm";
import {v1} from "uuid";

const profilePage: ProfileStateType = {
    posts: [
        {
            id: v1(),
            message: 'Hi, its me',
            likes: 4,
        },
        {
            id: v1(),
            message: 'Hello',
            likes: 15,
        }
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfileStateType = profilePage, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            const newPost: PostType = {
                id: v1(),
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

//actions
export const addPost = (post: IPostFormInput) => ({type: 'profile/ADD-POST', post} as const)

export const deletePost = (postId: string) => ({type: 'profile/DELETE-POST', postId} as const)

export const setProfile = (profile: any) => ({type: 'profile/SET-PROFILE', profile} as const)

export const setStatus = (status: string) => ({type: 'profile/SET-STATUS', status} as const)


//thunks
export const getProfile = (userId: string): AppThunk => async (dispatch) => {
    try {
        const data = await profileAPI.getUserProfile(userId)
        dispatch(setProfile(data))
    } catch (e) {
        console.log(e)
    }
}

export const getStatus = (userId: string): AppThunk => async (dispatch) => {
    try {
        const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    } catch (e) {
        console.log(e)
    }
}

export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === ResultCodesEnum['Succes']) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        console.log(e)
    }
}


//types
export type ProfileStateType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
}

export type PostType = {
    id?: string,
    message: string,
    likes: number,
}

export type ProfileType = GetProfileResponseType

export type ProfileActionsType = AddPostACType | SetProfileType | SetStatusType | DeletePostACType
type AddPostACType = ReturnType<typeof addPost>
type DeletePostACType = ReturnType<typeof deletePost>
type SetProfileType = ReturnType<typeof setProfile>
type SetStatusType = ReturnType<typeof setStatus>
