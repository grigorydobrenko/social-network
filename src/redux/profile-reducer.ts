import {AllActionsTypes} from "./redux-store";


export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

export type PostType = {
    id?: number,
    message: string,
    likes: number,
}

export type ProfileType = {
    aboutMe: string,
    contacts?: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: string
    },
    lookingForAJob: true,
    lookingForAJobDescription?: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

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
    profile: null
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
        default:
            return state

    }


}
export type profileReducerType = addPostACType | changeTextACType | setProfileType
type addPostACType = ReturnType<typeof addPostAC>
type changeTextACType = ReturnType<typeof changeTextAC>
type setProfileType = ReturnType<typeof setProfile>

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