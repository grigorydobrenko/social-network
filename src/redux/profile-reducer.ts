import {AppThunk} from "./redux-store";
import {profileAPI, ProfileType, ResultCodesEnum} from "../api/api";
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
    status: '',
    profileEditStatus: null,
    isEdit: false
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

        case 'profile/SET-PHOTO':
            return {...state, profile: {...state.profile!, photos: action.photos}}

        case 'profile/SET-PROFILE-EDIT-STATUS':
            return {...state, profileEditStatus: action.status}

        case 'profile/SET-IS-EDIT':
            return {...state, isEdit: action.isEdit}

        default:
            return state
    }
}

//actions
export const addPost = (post: IPostFormInput) => ({type: 'profile/ADD-POST', post} as const)

export const deletePost = (postId: string) => ({type: 'profile/DELETE-POST', postId} as const)

export const setProfile = (profile: ProfileType) => ({type: 'profile/SET-PROFILE', profile} as const)

export const setStatus = (status: string) => ({type: 'profile/SET-STATUS', status} as const)

export const setPhoto = (photos: { small: string, large: string }) => ({type: 'profile/SET-PHOTO', photos} as const)

export const setProfileEditStatus = (status: string | null) => ({type: 'profile/SET-PROFILE-EDIT-STATUS', status} as const)

export const setIsEdit = (isEdit: boolean) => ({type: 'profile/SET-IS-EDIT', isEdit} as const)


//thunks
export const getProfile = (userId: number): AppThunk => async (dispatch) => {
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
        if (response.data.resultCode === ResultCodesEnum['Success']) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        console.log(e)
    }
}

export const savePhoto = (file: File): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.updatePhoto(file)
        if (response.data.resultCode === ResultCodesEnum['Success']) {
            dispatch(setPhoto(response.data.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const saveProfile = (profile: any): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === ResultCodesEnum['Success']) {
        if (userId) {
            await dispatch(getProfile(userId))
            dispatch(setProfileEditStatus(null))
            dispatch(setIsEdit(false))
        }
    } else {
        // dispatch(setProfileEditStatus(response.data.messages[0]))
        dispatch(setProfileEditStatus(response.data.messages[0]))
        // return Promise.reject(response.data.messages[0]);
    }
}


//types
export type ProfileStateType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
    profileEditStatus: string | null
    isEdit: boolean
}

export type PostType = {
    id?: string,
    message: string,
    likes: number,
}

export type ProfileActionsType = AddPostACType | SetProfileType | SetStatusType | DeletePostACType | setPhotoType | setProfileEditStatusType | setIsEditType
type AddPostACType = ReturnType<typeof addPost>
type DeletePostACType = ReturnType<typeof deletePost>
type SetProfileType = ReturnType<typeof setProfile>
type SetStatusType = ReturnType<typeof setStatus>
type setPhotoType = ReturnType<typeof setPhoto>
type setProfileEditStatusType = ReturnType<typeof setProfileEditStatus>
type setIsEditType = ReturnType<typeof setIsEdit>
