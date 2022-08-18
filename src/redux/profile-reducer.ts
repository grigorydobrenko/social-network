import {ACTypes, PostType, profilePageType} from "./state";

export const profileReducer = (state: profilePageType, action: ACTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likes: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'CHANGE-TEXT': {
            state.newPostText = action.text
            return state
        }
        default:
            return state

    }



}
export type profileReducerType = addPostACType | changeTextACType
type addPostACType = ReturnType<typeof addPostAC>
type changeTextACType = ReturnType<typeof changeTextAC>

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